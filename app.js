var express = require('express');
var app = express();
var router = express.Router();
var compression = require('compression');
var emailForm = require('./routes/email-form.js');
var messageForm = require('./routes/message-form.js');
var bodyParser = require('body-parser');
var ip = require('ip');
var config = require('./config.js');
var logVisitor = require('./api/log-visitor.js');
var port = 15486;
var env = config.config.environment;

console.log("ENV : " + env);

if (env == 'production') {
    port = config.config.port_production;
} else {
    port = config.config.port_development;
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(compression());
app.use(express.static(__dirname + '/prod/static'));

router.get('/', function(req, res) {
    logVisitor.logVisitor(req);
    res.sendFile(__dirname + '/prod/html/index.html', function(err) {
        if (err) {
            console.log('Error sending index.html');
        } else {
            console.log('Sent: index.html');
        }
    })
});

router.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/prod/static/img/favicon/favicon.ico');
})

app.use('/message-form', messageForm);
app.use('/email-form', emailForm);

app.use(router);

app.listen(port);

console.log("Listening on " + ip.address() + ":" + port);




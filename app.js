var express = require('express');
var compression = require('compression');
var app = express();
var emailFormJS = require('./app/email-form.js');
var messageFormJS = require('./app/message-form.js');
var bodyParser = require('body-parser');
var ip = require('ip');
var recaptcha = require('./app/recaptcha.js');
var config = require('./config.js');
var port = 15486;
var env = config.config.environment;

//console.log("ENV : " + app.get('env'));
console.log("ENV : " + env);
console.log('port prod : ' + config.config.port_production);
console.log('port dev : ' + config.config.port_development);

if (env == 'production') {
    port = config.config.port_production;
} else {
    port = config.config.port_development;
}

app.use(compression());
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', function(err) {
        if (err) {
            console.log('Error sending index.html');
        } else {
            console.log('Sent: index.html');
        }
    })
});

// parse application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// parse application/json
// var jsonParser = app.use(bodyParser.json());

app.get('/favicon.ico', function(req, res) {
    res.sendFile(__dirname + '/static/img/favicon/favicon.ico');
})

app.post('/message-form', urlencodedParser, function(req, res) {
    var reqBody = req.body;
    if (reqBody.Email && reqBody.Message) {
        recaptcha.verify(req, function(recapResult) {
            console.log("return form recaptcha");
            if (recapResult.success) {
                console.log("return from recaptcha success");
                messageFormJS.messagePosted(reqBody, function(result) {
                    res.json(result);
                });           
            } else {
                console.log("return form recaptcha not success");
                res.json(recapResult.details);
            }
        });
    } else {
        res.json({
            success: false,
            details: 'Error: Must include Email and Message'
        });
    }
});


app.post('/email-form', urlencodedParser, function(req, res) {
    console.log("Email-form: %j", req.body);

    var email = req.body.email;
    if (email) {
        emailFormJS.emailRequest(email, function(result) {
            res.json(result);
        });             
    } else {
        res.send('Unable to find email in form');
    }
});

app.listen(port);

console.log("Listening on " + ip.address() + ":" + port);
//request.connection.remoteAddress

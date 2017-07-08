var express = require('express'),
    router = express.Router(),
    emailForm = require('../api/emailForm.js');

router.post('/', function(req, res) {
    console.log("Email-form: %j", req.body);

    var email = req.body.email;
    if (email) {
        emailForm.emailRequest(email, function(result) {
            res.json(result);
        });             
    } else {
        res.send('Unable to find email in form');
    }
});

module.exports = router;
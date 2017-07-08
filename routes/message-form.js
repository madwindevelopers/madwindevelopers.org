var express = require('express'),
    router = express.Router(),
    recaptcha = require('../api/recaptcha.js'),
    messageFormJS = require('../api/messageForm.js');

router.post('/', function(req, res) {
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

module.exports = router;
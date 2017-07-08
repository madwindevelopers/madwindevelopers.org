var config = require('../config.js');
var recaptcha = config.recaptcha;
var request = require('request');

function verify(req, callback) {
    var verifyRecaptchaData = {};
    verifyRecaptchaData.secret = recaptcha.secret_key;
    verifyRecaptchaData.response = req.body["g-recaptcha-response"];
    verifyRecaptchaData.remoteip = req.connection.remoteAddress;

    console.log("verifyRecaptchaData : %j", verifyRecaptchaData);

    request.post({url:config.recaptcha.url, form: verifyRecaptchaData}, function(err, httpResponse, body) {
        
        body = JSON.parse(body);
        console.log("recaptcha body : %j", body);
        if (err) {
            callback({
                success: false, 
                details: "Recaptcha error. Please try again later."
            });
        } else {
            console.log("Recaptcha success : " + body.success);
            if (!body.success)
                body.details = "You are a robot!!";

            callback(body);
            
        }
    });

}

module.exports = {
    verify
};
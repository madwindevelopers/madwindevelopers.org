var sqlHelper = require('./sql-helper.js');

function addEmailToDatabase(con, email, callback) {
    var responseDetails = "";
    var sql = "INSERT INTO Emails (Email) VALUES ('" + email + "')";
    con.query(sql, function(err, result) {
        if (err) {
            console.log("err.code: ", err.code);
            switch(err.code) {
                case "ER_DUP_ENTRY":
                    responseDetails = email + " added to mailing list";
                    break;
                default:
                    responseDetails = "Error added email.  Please try again later";
            }
            callback({
                success: false,
                details: responseDetails
            });
        } else {
            console.log(email + " inserted into database");
            callback({
                success: true,
                details: email + " added to mailing list"
            });
        }
    });
}

function emailRequest(email, callback) {
    
    var success = false;
    var details = "";

    sqlHelper.connect(function(con) {
        addEmailToDatabase(con, email, function(result) {
            callback(result);
        });
    });
}

module.exports = {
    emailRequest
};
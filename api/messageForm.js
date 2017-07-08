var sqlHelper = require('./sql-helper.js');

function addMessageToDatabase(con, message, callback) {
    var sql = "INSERT INTO Messages (Name, Email, Subject, Message) " +
              "VALUES (" + 
              "\"" + message.Name.trim() + "\", " +
              "\"" + message.Email.trim() + "\", " +
              "\"" + message.Subject.trim() + "\", " +
              "\"" + message.Message.trim() + "\"" +
              ")";
    console.log("SQL Query: " + sql);
    con.query(sql, function(err, result) {
        if(err) {
            callback({
                success: false,
                details: "Error adding message to database"
            });
        } else {
            callback({
                success: true,
                details: "Thank you for the message. Should this require a response we will be in contact shortly"
            });
        }
    });
}

function messagePosted(message, callback) {
    sqlHelper.connect(function(con) {
        addMessageToDatabase(con, message, function(result) {
            callback(result);
        });
    });
}

module.exports = {
    messagePosted
};
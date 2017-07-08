var sqlHelper = require('./sql-helper.js');

function logVisitor(req) {
    sqlHelper.connect(function(con) {
        var sql = "INSERT INTO Visitors (IP) VALUES ('" + req.connection.remoteAddress + "')";
        con.query(sql, function(err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log("Visitor logged : " + req.connection.remoteAddress);
            }
        });
    });
}

module.exports = {
    logVisitor
};
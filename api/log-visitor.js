var sqlHelper = require('./sql-helper.js');

function logVisitor(req) {
    sqlHelper.connect(function(con) {
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        console.log("ip : " + ip);
        var sql = "INSERT INTO Visitors (IP) VALUES ('" + ip + "')";
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
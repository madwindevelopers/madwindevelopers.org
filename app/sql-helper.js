var mysql = require('mysql');
var config = require('../config.js').config;
var express = require('express');
var app = express();
var env = config.environment;

function connect(callback) {

    var con = mysql.createConnection(config.db);

    con.connect(function(err) {
        if (err) {
            success = false;
            details = 'Failed to connect to database';
        } else {
            var db;
            if (env == 'development')
                db = config.db.database_development;
            else
                db = config.db.database_production;

            console.log('Using database : ' + db);
            connectToDatabase(con, db, function() {
                callback(con);
            });
        }
    });
}

function connectToDatabase(con, database, callback) {
    var sql = "USE " + database;
    con.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Connected to " + database);
        callback();
    });
}

module.exports = {
    connect
};

var config = {};

config.environment = 'development';

config.port_development = 12345;
config.port_production = 12346;

config.db = {};

config.db.host = 'host domain';
config.db.user = 'user';
config.db.password = 'password';
config.db.database_production = 'production database name';
config.db.database_development = 'development database name';

var recaptcha = {};

recaptcha.site_key = "site key";
recaptcha.secret_key = "secret key";
recaptcha.url = "https://www.google.com/recaptcha/api/siteverify";

module.exports = {
    config,
    recaptcha
};

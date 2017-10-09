const keys = require('./keys');

module.exports = function(app) {
	process.env.PORT = 3000;
	process.env.MONGODB = keys.MONGODB;
	process.env.SECRET = keys.SECRET;
};
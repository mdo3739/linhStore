const jsonParser = require('body-parser').json();

module.exports = function(app, passport){
	app.post('/api/user', jsonParser, (req, res, next) => {
		passport.authenticate('local', function(err, user, info) {
	    	if (err) { return next(err); }
	    	console.log(info);
	    	res.send(info);
	  })(req, res, next);
	});
};
const jsonParser = require('body-parser').json();

module.exports = function(app, passport){
	app.post('/api/user/signup', jsonParser, (req, res, next) => {
		passport.authenticate('local-signup', function(err, user, info) {
	    	if (err) { return next(err); }
	    	res.send(info);
	  })(req, res, next);
	});

	app.post('/api/user/login', passport.authenticate('local-login', function(req, res){
		console.log(req.user);
		
	}));
};
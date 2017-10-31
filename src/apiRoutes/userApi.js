

module.exports = function(app, passport){

	app.post('/api/user', passport.authenticate('local', {
		successRedirect: '/',
		falureRedirect: '/failure'
	}));
};
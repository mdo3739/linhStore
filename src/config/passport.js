const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = function(passport){
	passport.serializeUser(function(user, done) {
		done(null, user._id);
	});

	passport.deserializeUser((id, done) => {
		User.findById(id, (err, user) => {
			done(err, user);


		});
	});

	// Local Sign-up
	passport.use('local', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true
	},
	(req, email, password, done) =>{

		process.nextTick( () => {
			User.findOne({email: email}, (err, user) => {
				if(err){ return done(err);}
				if(user){
					return done(null, false, {message: "You already have an account!"});
				} else {
					var newUser = new User();

					newUser.email = email;
					//newUser.password = newUser.generateHash(password);
					newUser.password = password;
					newUser.save(err =>{
						if(err){ throw err;}
						console.log("User Created");
						return done(null, newUser);
					});
				}
			});
		});
	}))
};
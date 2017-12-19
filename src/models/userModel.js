const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema({
	email: String,
	password: String,
	googleId: String,
	facebookId: String,
	memberSince: {type: Date, default: Date.now()},
  	role: {type: String, default: "unverified"}
});

userSchema.methods.generateHash = function(password){
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password){
	return bcrypt.compareSync(password, this.password);
}

var User = mongoose.model("User", userSchema);
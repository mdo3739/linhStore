const mongoose = require('mongoose');
const {Schema} = mongoose;

var userSchema = new Schema({
	email: String,
	password: String,
	googleId: String,
	facebookId: String,
	memberSince: {type: Date, default: Date.now()},
  	role: {type: String, default: "unverified"}
});

var User = mongoose.model("User", userSchema);

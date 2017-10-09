const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = process.env.NODE_ENV || 'dev';
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');

// Config
if(env === 'dev'){
	require('./config/devConfig')(app);
}
require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
require('./userApi')(app);
app.get('/', (req, res) => {
	let markup = "HELLO WORLD";
	res.render('index.ejs', {markup});
});

mongoose.connect(process.env.MONGODB, {useMongoClient: true}, function(err){
	if(err) throw err;
	console.log('Connection Successful');
});
app.listen(process.env.PORT, function(){
	console.log('Listening on Port: ', process.env.PORT);
});
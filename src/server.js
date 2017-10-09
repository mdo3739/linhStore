const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = process.env.NODE_ENV || 'dev';

if(env === 'dev'){
	require('./config/devConfig')(app);
}

mongoose.connect(process.env.MONGODB, {useMongoClient: true}, function(err){
	if(err) throw err;
	console.log('Connection Successful');
});
app.listen(process.env.PORT, function(){
	console.log('Listening on Port: ', process.env.PORT);
});
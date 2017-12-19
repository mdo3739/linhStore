const express = require('express');
const mongoose = require('mongoose');
const app = express();
const env = process.env.NODE_ENV || 'dev';
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');

import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter as Router } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes';

// Config
if(env === 'dev'){
	require('./config/devConfig')(app);
}
app.use(cookieSession({
	secret: process.env.SECRET,
	maxAge: 2 * 24 * 60 * 60 * 1000 //2 days
}));
require('./models/userModel');
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'assets')));


// Routes
require('./apiRoutes/userApi')(app, passport);



app.get('*', (req, res) => {
  	let markup = '';
  	let status = 200;

    const context = {};
    markup = renderToString(
      <Router location={req.url} context={context}>
        <AppRoutes />
      </Router>,
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      return res.redirect(302, context.url);
    }

    if (context.is404) {
      status = 404;
    }

  	return res.status(status).render('index', { markup });
});

mongoose.connect(process.env.MONGODB, {useMongoClient: true}, function(err){
	if(err) {throw err;}
	console.log('Connection Successful');
});

app.listen(process.env.PORT, function(){
	console.log('Listening on Port: ', process.env.PORT);
});
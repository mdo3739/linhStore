import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes';
import Layout from './components/Layout';

const AppClient = () => (
	<Router>
    	<AppRoutes />
 	</Router>
);

window.onload = () => {
  	hydrate(<AppClient />, document.getElementById('main'));
};
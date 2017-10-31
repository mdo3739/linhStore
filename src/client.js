import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './components/AppRoutes';

const AppClient = () => (
	<Router>
    	<AppRoutes />
 	</Router>
);

window.onload = () => {
  hydrate(<AppClient />, document.getElementById('main'));
};
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Layout from './Layout';

const PageNotFound = () => (
	<div>
		<h1>Page Not Found</h1>
	</div>
);

export const AppRoutes = () => (
	<Layout>
		<Switch>
			<Route exact path='/' />
			<Route exact path='/signup' component={Signup}  />
			<Route exact path='/login' component={Login} />
	    	<Route component={PageNotFound} />
		</Switch>
	</Layout> 
);
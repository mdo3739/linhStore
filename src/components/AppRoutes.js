import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Login from './Login';
import Signup from './Signup';

const PageNotFound = () => (
	<div>
		Page Not Found
	</div>
);

export const AppRoutes = () => (
	<Layout>
    	<Switch>
    		<Route exact path='/' />
    		<Route exact path='/signup' component={Signup} />
    		<Route exact path='/login' component={Login} active='signup' />
        	<Route component={PageNotFound} />
    	</Switch> 
    </Layout>
);
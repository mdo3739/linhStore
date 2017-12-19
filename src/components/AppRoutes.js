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
	</Layout> 
);
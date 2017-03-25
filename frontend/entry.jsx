import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router,
		 Route,
		 IndexRoute,	
		 browserHistory } from 'react-router';
import Header from './components/main/header.jsx';
import Welcome from './components/main/welcome.jsx';

const router = (
	<Router history={browserHistory}>
		<Route path='/' component={Header}>
			<IndexRoute component={Welcome}/>
		</Route>
	</Router>
	)

render(router,document.getElementById('app'))

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	<Route exact path='/' component={App} />
	<Route path='/login' component={Login} />
	<Route path='/register' component={Register} />
	</Switch>
	</BrowserRouter>,
    rootElement
    
//  <React.StrictMode>
//  <App />
//  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';
import Wiki from './Wiki';
import Quiz from './Quiz';
import UserHome from './UserHome';
import UserBlog from './UserBlog';
import Blog from './Blog';
import Calculator from './Calculator';
import Results from './Results';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	  <Route exact path='/' component={App} />
	  <Route path='/login' component={Login} />
	  <Route path='/register' component={Register} />
	  <Route path='/wiki' component={Wiki} />
	  <Route path='/quiz' component={Quiz} />
	  <Route path='/userhome' component={UserHome} />
	  <Route path='/blog' component={Blog} />
	  <Route path='/userblog' component={UserBlog} />
	  <Route path='/calculator' component={Calculator} />
	  <Route path='/results' component={Results} />
	</Switch>
      </BrowserRouter>,
    rootElement
    
);

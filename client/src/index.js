import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';
import Wiki from './Wiki';
import UserHome from './UserHome';
import UserBlog from './UserBlog';
import Blog from './Blog';
import Calculator from './Calculator';
import Results from './Results';
import ResultsNoAccount from './ResultsNoAccount';
import QuizQuestion1 from './QuizQuestion1';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	  <Route exact path='/' component={App} />
	  <Route path='/login' component={Login} />
	  <Route path='/register' component={Register} />
	  <Route path='/wiki' component={Wiki} />
	  <Route path='/userhome' component={UserHome} />
	  <Route path='/blog' component={Blog} />
	  <Route path='/userblog' component={UserBlog} />
	  <Route path='/calculator' component={Calculator} />
	  <Route path='/results' component={Results} />
	  <Route path='/resultsnoaccount' component={ResultsNoAccount} />
	  <Route path='/quizquestion1' component={QuizQuestion1} />
	</Switch>
      </BrowserRouter>,
    rootElement
    
);

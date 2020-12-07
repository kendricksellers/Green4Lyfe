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
import QuizQuestion1 from './quiz/Question1';
import QuizQuestion2 from './quiz/Question2';
import QuizQuestion3 from './quiz/Question3';
import QuizQuestion4 from './quiz/Question4';
import QuizQuestion5 from './quiz/Question5';
import QuizQuestion6 from './quiz/Question6';
import QuizQuestion7 from './quiz/Question7';

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
	  <Route path='/quiz/question1' component={QuizQuestion1} />
	  <Route path='/quiz/question2' component={QuizQuestion2} />
	  <Route path='/quiz/question3' component={QuizQuestion3} />
	  <Route path='/quiz/question4' component={QuizQuestion4} />
	  <Route path='/quiz/question5' component={QuizQuestion5} />
	  <Route path='/quiz/question6' component={QuizQuestion6} />
	  <Route path='/quiz/question7' component={QuizQuestion7} />
	</Switch>
      </BrowserRouter>,
    rootElement
);

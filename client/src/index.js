import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';
import Wiki from './Wiki';
import WikiCommunityGarden from './WikiCommunityGarden';
import WikiEarthships from './WikiEarthships';
import WikiEcoVillage from './WikiEcoVillage';
import WikiFutureCity from './WikiFutureCity';
import WikiGardening from './WikiGardening';
import WikiGreenGetaway from './WikiGreenGetaway';
import WikiMinimalism from './WikiMinimalism';
import WikiPlastics from './WikiPlastics';
import WikiSustainability from './WikiSustainability';
import WikiTinyHouse from './WikiTinyHouse';
import WikiVeganism from './WikiVeganism';
import UserHome from './UserHome';
import UserBlog from './UserBlog';
import Blog from './Blog';
import BlogTemplate from './BlogTemplate';
import PostList from './PostList';
import Calculator from './Calculator';
import Results from './Results';
import ResultsNoAccount from './ResultsNoAccount';
import QuizQuestion1 from './quiz/Question1';
import QuizQuestion2 from './quiz/Question2';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	  <Route exact path='/' component={App} />
	  <Route path='/posts' component={PostList} />
	  <Route path='/login' component={Login} />
	  <Route path='/register' component={Register} />
	  <Route path='/wiki' component={Wiki} />
	  <Route path='/wikicommunitygarden' component={WikiCommunityGarden} />
	  <Route path='/wikiearthship' component={WikiEarthships} />
	  <Route path='/wikiecovillage' component={WikiEcoVillage} />
	  <Route path='/wikifuturecity' component={WikiFutureCity} />	  
	  <Route path='/wikigardening' component={WikiGardening} />
	  <Route path='/wikigreengetaway' component={WikiGreenGetaway} />
	  <Route path='/wikiminimalism' component={WikiMinimalism} />	  
	  <Route path='/wikiplastics' component={WikiPlastics} />
	  <Route path='/wikisustainability' component={WikiSustainability} />
	  <Route path='/wikitinyhouse' component={WikiTinyHouse} />
	  <Route path='/wikiveganism' component={WikiVeganism} />
	  <Route path='/userhome' component={UserHome} />
	  <Route path='/blog' component={Blog} />
	  <Route path='/blogtemplate' component={BlogTemplate} />
	  <Route path='/userblog' component={UserBlog} />
	  <Route path='/calculator' component={Calculator} />
	  <Route path='/results' component={Results} />
	  <Route path='/resultsnoaccount' component={ResultsNoAccount} />
	  <Route path='/quiz/question1' component={QuizQuestion1} />
	  <Route path='/quiz/question2' component={QuizQuestion2} />
	</Switch>
      </BrowserRouter>,
    rootElement
    
);

import React from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import VideoImage from './video-generic-ss-1920.png'
import Logo from './LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import './green4lyfe.css'


class App extends React.Component {
    render() {
	return (
	    <div className="ui">
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <Link to='/login'><button className="ui button login-button">
		  Log in
	      </button></Link>
	      <div style={{position: 'absolute', bottom: '30%', left: '30%'}}>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL5vtqDuUM1Dk80ik96WMtRVd8j2i62M_J" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
		<Link to='/quiz/question1'><button className="ui button take-quiz-button">
		    Take the quiz
		</button></Link>
	      </div>
	      
	    </div>
	);
    }
}

export default App;

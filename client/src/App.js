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
		<img src={VideoImage} alt="Generic video image" style={{height: '300px', width: '500px'}} />
		<Link to='/quiz/question1'><button className="ui button take-quiz-button">
		    Take the quiz
		</button></Link>
	      </div>
	      <div className="ui segment" style={{position: 'absolute', bottom: '10%', right: '65%'}}>
		Take our quiz for a wonderful Green experience! We promise<br></br>
		that we put our heart and soul into this website and the <br></br>
		magical	green energy it will give you. I\'m talking about<br></br>
		Shrek. We will turn you into Shrek.
	      </div>
	    </div>
	);
    }
}

export default App;

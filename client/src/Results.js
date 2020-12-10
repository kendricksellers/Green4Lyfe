import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import './Results.css'
import ResultImage from './foraging.webp'
import 'semantic-ui-css/semantic.min.css'
import './green4lyfe.css'
import axios from 'axios'
import { getCookie } from './cookie.js'
import { getQuizValue } from './quiz/calculateResults.js'
import { getLifestyleOption, getLifestyleName, getLifestyleImage } from './quiz/getLifestyle.js'

class Results extends React.Component {
    constructor() {
	super();
	this.state = { modifiers: [], topLifestyleOption: null, lifestyleName: '', lifestyleImage: null};
    }
    
    componentDidMount() {
	this.getResults();
	
    }
    
    getResults = () => {
	axios.get('https://green4lyfe.herokuapp.com/api/quizzes/' + getCookie("username"))
	    .then(response => {
		this.setState({ modifiers: response.data, topLifestyleOption: getLifestyleOption(response.data) });
		this.setState({ lifestyleName: getLifestyleName(this.state.topLifestyleOption),
				lifestyleImage: getLifestyleImage(this.state.topLifestyleOption)})
		console.log(this.state.topLifestyleOption)
	    })
    }



    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div style={{position: "absolute", top: "5%", right: "5%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<br/>
		Profile Picture
	      </div>
	      <div style={{textAlign: "center", position: "absolute", height: "60%", width: "60%", left: "21%", top: "30%"}}>
		<div>
		  <img src={this.state.lifestyleImage} style={{height: "30%", width: "40%"}}/>
		  <br/>
		You seem to be into <b>{ this.state.lifestyleName }</b>!
		</div>
	      </div>
	      <button className="ui button" style={{position: "absolute", left: "46%", top: "60%"}}>
		Retake quiz
	      </button>
		
	      <div className="ui segment sidebar" style={{position: "absolute", top: "45%", right: "5%"}}>
		YOUR NAME HERE<br/>
		ACCOUNT INFORMATION<br/>
		<Link to="/userblog">Your Blog</Link><br/>
		QUIZ RESULTS<br/>
		<Link to="/login">Log Out</Link><br/>
		<Link to="/">Exit</Link><br/>
	      </div>
	    </div>
	    
	);
    }
}

export default Results;


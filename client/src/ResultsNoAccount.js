import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import './Results.css'
import ResultImage from './foraging.webp'
import { Button } from 'semantic-ui-react'
import './green4lyfe.css'
import { getCookie } from './cookie.js'
import querystring from 'querystring'
import axios from 'axios'
import { getQuizValue } from './quiz/calculateResults.js'
import { getLifestyleOption, getLifestyleName, getLifestyleImage } from './quiz/getLifestyle.js'

class ResultsNoAccount extends React.Component {
    constructor() {
	super();
	this.state = { modifiers: [], topLifestyleOption: null, lifestyleName: '', lifestyleImage: null};
    }
    
    componentDidMount() {
	this.getResults();
	
    }
    
    getResults = () => {
	const data = getQuizValue(null);
	axios.post('http://localhost:5000/api/quizzes/results', data)
	    .then(response => {
		this.setState({ modifiers: response.data, topLifestyleOption: getLifestyleOption(response.data) });
		this.setState({ lifestyleName: getLifestyleName(this.state.topLifestyleOption.category),
				lifestyleImage: getLifestyleImage(this.state.topLifestyleOption.category)})
	    })
    }


    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div style={{textAlign: "center", position: "absolute", height: "60%", width: "60%", left: "21%", top: "30%"}}>
		<div>
		  <img src={this.state.lifestyleImage} style={{height: "30%", width: "40%"}}/>
		  <br/>
		  <b>{ this.state.lifestyleName }</b>
		</div>
	      </div>
	      <Link to="/quiz/question1">
		<Button className="button" style={{position: "absolute", left: "46%", top: "60%"}}>
		  Retake quiz
		</Button>
	      </Link>
	      <div className="ui segment" style={{position: "absolute", top: "45%", right: "5%"}}>
		<Link to="/register">Create Account</Link><br/>
		<Link to="/">Exit</Link><br/>
	      </div>
	    </div>
	);
    }
}

export default ResultsNoAccount;

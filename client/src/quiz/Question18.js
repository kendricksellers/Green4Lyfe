import { withRouter } from 'react-router'
import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'

const prevQuestion = "17";
const currQuestion = "18";
const nextQuestion = "19";

class QuizQuestion18 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	this.props.history.push('question' + nextQuestion)
    }
    answeredA = () => {
	this.answered("A");
    }
    answeredB = () => {
	this.answered("B");
    }
    answeredC = () => {
	this.answered("C");
    }
    answeredD = () => {
	this.answered("D");
    }

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div className="question-box">
		<b>
		  { currQuestion }. Which one of these would you consider to be a non essential?
		</b>
		<br/>
		<div className="answer-a" onClick={this.answeredA}>
		  <br/>
		  A. Internet / Service
		</div>
		<div className="answer-b" onClick={this.answeredB}>
		  <br/>
		  B. TV
		</div>
		<br/>
		<div className="answer-c" onClick={this.answeredC}>
		  <br/>
		  C. AC
		</div>
		<div className="answer-d" onClick={this.answeredD}>
		  <br/>
		  D. None of the above
		</div>

	      </div>
	      <div style={{position: "absolute", top: "90%", left: "42%"}}>
		<Link to={"/quiz/question" + prevQuestion}>
		  <Button className="button" style={{left: "26%"}}>prev</Button>
		</Link>
		<Link to={"/quiz/question" + nextQuestion}>
		  <Button className="button" style={{left: "26%"}}>next</Button>
		</Link>
	      </div>
	    </div>
	);
    }
}

export default QuizQuestion18;


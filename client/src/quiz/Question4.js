import { withRouter } from 'react-router'
import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'
import AnswerA from './images/4a.png'
import AnswerB from './images/4b.png'
import AnswerC from './images/4c.png'
import AnswerD from './images/4d.png'

const prevQuestion = "3";
const currQuestion = "4";
const nextQuestion = "5";

class QuizQuestion4 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	if (answer === "B")
	    this.props.history.push('question' + nextQuestion)
	else
	    this.props.history.push('question' + "6")
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
		  { currQuestion }. What is your current mode of transportation?
		</b>
		<br/>
		<div className="answer-a">
		  <img src={AnswerA} className="answer-image" onClick={this.answeredA}/>
		  <br/>
		  A. Walking
		</div>
		<div className="answer-b">
		  <img src={AnswerB} className="answer-image" onClick={this.answeredB}/>
		  <br/>
		  B. Car
		</div>
		<br/>
		<div className="answer-c">
		  <img src={AnswerC} className="answer-image" onClick={this.answeredC}/>
		  <br/>
		  C. Public bus
		</div>
		<div className="answer-d">
		  <img src={AnswerD} className="answer-image" onClick={this.answeredD}/>
		  <br/>
		  D. Bike
		</div>

	      </div>
	      <div style={{position: "absolute", top: "90%", left: "42%"}}>
		<Link to={"/quiz/question" + nextQuestion}>
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

export default withRouter(QuizQuestion4);

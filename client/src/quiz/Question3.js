import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'
import AnswerA from './images/3a.png'
import AnswerB from './images/3b.png'
import AnswerC from './images/3c.png'
import AnswerD from './images/3d.png'

const prevQuestion = "2";
const currQuestion = "3";
const nextQuestion = "4";

class QuizQuestion3 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	window.location.replace('http://localhost:3000/quiz/question' + nextQuestion)
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
		  { currQuestion }. What is your current diet?
		</b>
		<br/>
		<div className="answer-a">
		  <img src={AnswerA} className="answer-image" onClick={this.answeredA}/>
		  <br/>
		  A. I eat all the things.
		</div>
		<div className="answer-b">
		  <img src={AnswerB} className="answer-image" onClick={this.answeredB}/>
		  <br/>
		  B. Healthy
		</div>
		<br/>
		<div className="answer-c">
		  <img src={AnswerC} className="answer-image" onClick={this.answeredC}/>
		  <br/>
		  C. Vegetarian/Vegan
		</div>
		<div className="answer-d">
		  <img src={AnswerD} className="answer-image" onClick={this.answeredD}/>
		  <br/>
		  D. Diet?
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

export default QuizQuestion3;

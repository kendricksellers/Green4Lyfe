import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'
import AnswerA from './images/24a.png'
import AnswerB from './images/24b.png'
import AnswerC from './images/24c.png'
import AnswerD from './images/24d.png'

const prevQuestion = "23";
const currQuestion = "24";
const nextQuestion = "25";

class QuizQuestion24 extends React.Component {
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
		  { currQuestion }. Let it snow!
		</b>
		<br/>
		<div className="answer-a">
		  <img src={AnswerA} className="answer-image" onClick={this.answeredA}/>
		  <br/>
		  A. Let it snow!
		</div>
		<div className="answer-b">
		  <img src={AnswerB} className="answer-image" onClick={this.answeredB}/>
		  <br/>
		  B. Sun sun sun!
		</div>
		<br/>
		<div className="answer-c">
		  <img src={AnswerC} className="answer-image" onClick={this.answeredC}/>
		  <br/>
		  C. Rain
		</div>
		<div className="answer-d">
		  <img src={AnswerD} className="answer-image" onClick={this.answeredD}/>
		  <br/>
		  D. I love every season!
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

export default QuizQuestion24;


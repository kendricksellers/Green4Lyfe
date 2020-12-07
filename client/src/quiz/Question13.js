import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'

const prevQuestion = "12";
const currQuestion = "13";
const nextQuestion = "14";

class QuizQuestion10 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	if (answer === "B")
	    window.location.replace('http://localhost:3000/quiz/question' + nextQuestion)
	else
	    window.location.replace('http://localhost:3000/quiz/question' + 15)
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
		  { currQuestion }. How far would you be willing to relocate?
		</b>
		<br/>
		<div className="answer-a" onClick={this.answeredA}>
		  <br/>
		  A. As close to home as possible.
		</div>
		<div className="answer-b" onClick={this.answeredB}>
		  <br/>
		  B. I’ll move anywhere.
		</div>
		<br/>
		<div className="answer-c" onClick={this.answeredC}>
		  <br/>
		  C. I would like to stay in my state.
		</div>
		<div className="answer-d" onClick={this.answeredD}>
		  <br/>
		  D. Within the country.
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

export default QuizQuestion10;


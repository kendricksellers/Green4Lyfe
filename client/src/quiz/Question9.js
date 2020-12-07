import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'

const prevQuestion = "8";
const currQuestion = "9";
const nextQuestion = "10";

class QuizQuestion9 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	if (answer === "D")
	    window.location.replace('http://localhost:3000/quiz/question' + nextQuestion)
	else
	    window.location.replace('http://localhost:3000/quiz/question' + 10)
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
		  { currQuestion }. Who do you live with?
		</b>
		<br/>
		<div className="answer-a">
		  <br/>
		  A. By myself.
		</div>
		<div className="answer-b">
		  <br/>
		  B. I have some roommates.
		</div>
		<br/>
		<div className="answer-c">
		  <br/>
		  C. With my parents.
		</div>
		<div className="answer-d">
		  <br/>
		  D. I am currently supporting a family.
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

export default QuizQuestion9;


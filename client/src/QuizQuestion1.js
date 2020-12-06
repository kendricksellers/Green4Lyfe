import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import ExampleQuestion from './ExQuestionImg.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import AnswerA from './1a.png'
import AnswerB from './1b.png'
import AnswerC from './1c.png'
import AnswerD from './1d.png'

class QuizQuestion1 extends React.Component {
    answeredA = false;
    answeredB = false;
    answeredC = false;
    answeredD = false;

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div style={{position: "absolute", top: "15%", left: "20%", width: "70%", height: "70%"}}>
		What is the most valuable thing to you?
		<br/>
		<div style={{height: "100%", width: "100%"}}>
		  <img src={AnswerA} className="answer-image answer-a"/>
		  <br/>
		  Time
		  <img src={AnswerB} className="answer-image answer-b"/>
		  <br/>
		  Money
		  <img src={AnswerC} className="answer-image answer-c"/>
		  <br/>
		  Environment
		  <img src={AnswerD} className="answer-image answer-d"/>
		  <br/>
		  Comfort

		</div>
		<Button className="button" style={{left: "26%"}}>prev</Button>
		<Button className="button" style={{left: "26%"}}>next</Button>
	      </div>
	    </div>
	);
    }
}

export default QuizQuestion1;


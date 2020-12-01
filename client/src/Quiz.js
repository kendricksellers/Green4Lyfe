import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import ExampleQuestion from './ExQuestionImg.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

class Quiz extends React.Component {

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div style={{position: "absolute", top: "15%", left: "20%"}}>
		<Link to="/resultsnoaccount">
		  <img src={ExampleQuestion} style={{height: "70%", width: "70%"}}/>
		</Link>
		<br/>
		<Button className="button" style={{left: "26%"}}>prev</Button>
		<Button className="button" style={{left: "26%"}}>next</Button>
	      </div>
	    </div>
	);
    }
}

export default Quiz;


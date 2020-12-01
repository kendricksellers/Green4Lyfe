import React from 'react';
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import http from 'http'
import Logo from './LOGO-Black-Scrumbags.png'
import axios from 'axios'

import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'

class Login extends React.Component {
    username = null;
    password = null;
    constructor() {
	super();
	this.state = {authenticationFailure: false, username: ''};
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
	event.preventDefault();
	const data = querystring.stringify({
	    username: this.username,
	    password: this.password
	});
	axios.post('http://localhost:5000/api/users/login', data)
		  .then(response => {
		      if (response.data.error)
			  this.setState({authenticationFailure: true})
		      else {
			  var date = new Date();
			  date.setTime(date.getTime() + (60 * 60 * 1000));
			  document.cookie = "username=" + this.username + "; expires=" + date.toUTCString() + ";";
			  window.location.replace('http://localhost:3000/userhome')
		      }
		  })
    }

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>

		<div className="ui segment login" style={{width: "20%"}}>
		{ this.state.authenticationFailure && <div>Username or password is incorrect<br/></div> }
		<br/>
		<h1>Log In</h1>
		<div>
		  <form onSubmit={this.handleSubmit}>
		    <Input type="text" className="ui input" style={{width: "80%"}} onChange={event => this.username = event.target.value} id="Username" name="Username" placeholder="Username" /><br/><br/>
		      <Input type="password" className="ui input" onChange={event => this.password = event.target.value} id="Password" name="Password" placeholder="Password" /><br/><br/>
			<Input type="submit" className="ui button" value="Log in" width="100%" /><br/>
		  </form>
		  <br/>Forgot password?
		</div>
	      </div>
	    </div>
	);
    }
}

export default Login;


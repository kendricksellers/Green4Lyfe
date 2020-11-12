import React from 'react';
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import http from 'http'
import './Login.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import axios from 'axios'

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
		      else
			  this.setState({authenticationFailure: false})
		  })
    }

    render() {
	return (
   <div>
      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
      </Link>

		<div className="login">
		
		{ this.state.authenticationFailure && <div>Username or password is incorrect<br/></div> }
		<h1>Log In</h1>
		<div>
		<form onSubmit={this.handleSubmit}>
		<input type="text" onChange={event => this.username = event.target.value} id="Username" name="Username" placeholder="Username" /><br/>
		<input type="password" onChange={event => this.password = event.target.value} id="Password" name="Password" placeholder="Password" /><br/>
		<input type="submit" value="Log in" class="button" width="100%" /><br/>
		</form>
		<br/>Forgot password?
		  </div>
    </div>
      
    </div>
	    
	);
    }
}

export default Login;


import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'
import Logo from './LOGO-Black-Scrumbags.png'
import http from 'http'
import querystring from 'querystring'
import { withRouter } from 'react-router'
import request from 'request'
import 'semantic-ui-css/semantic.min.css'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import './green4lyfe.css'

class Register extends React.Component {
    name = null;
    email = null;
    password = null;
    passwordConfirm = null;
    
    constructor() {
	super();
	this.state = {
	    password_empty: false,
	    username_empty: false,
	    email_empty: false,
	    confirm_password_empty: false,
	    password_match: true,
	    user_already_exists: false
	};
	
	this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
	event.preventDefault();
	var failed = false;
	this.setState({email_empty: false});
	this.setState({username_empty: false});
	this.setState({password_empty: false});
	this.setState({confirm_password_empty: false});
	this.setState({password_match: true});
	this.setState({user_already_exists: false});
	
	if (this.email == null || this.email === "") {
	    this.setState({email_empty: true});
	    failed = true;
	}
	if (this.name == null || this.name === "") {
	    this.setState({username_empty: true});
	    failed = true;
	}
	if (this.password == null || this.password === "") {
	    this.setState({password_empty: true});
	    failed = true;
	}
	if (this.passwordConfirm == null || this.passwordConfirm === "") {
	    this.setState({confirm_password_empty: true});
	    failed = true;
	}
	
	if (failed)
	    return;
	
	if (this.password !== this.passwordConfirm) {
	    this.setState({password_match: false})
	    failed = true;
	}
	
	if (failed)
	    return;
	
	const data = {
	    username: this.name,
	    password: this.password,
	    email: this.email,
	    registrationDate: Date.now()
	}
	const options = {
	    hostname: 'green4lyfe.herokuapp.com',
	    path: '/api/users/',
	    port: 5000,
	    method: 'POST',
	    headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': data.length
	    }
	}
	
	const request = http.request(options, res => {
	    console.log('status: ${res.statusCode}')
	    res.on('data', d => {
		console.log(d);
	    })
	})
	request.on('error', error => {
	    if (error.code === 11000)
		this.setState({user_already_exists_error: true});
	})
	request.write(querystring.stringify(data))
	request.end()
	document.cookie = "username=" + this.name
	this.props.history.push('userhome');
	
    }
    render() {
	return (	    
		<div>
		<Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
		</Link>
		<div className="ui segment register" style={{width: "35%", top: "20%"}}>
		<b>Thank you for taking our quiz!</b><br/>
		<br/>
		<b>Register for an account to save and access<br/>
		<br/>your quiz results and other features<br/>
		<br/>of our website!</b>
		<br/>
		<br/>
		<div>
		{ this.state.email_empty && <b>Email field is empty<br/></b> }
	    { this.state.username_empty && <b>Username field is empty<br/></b> }
	    { this.state.password_empty && <b>Password field is empty<br/></b> }
	    { this.state.confirm_password_empty && <b>Password Confirmation field is empty<br/></b> }
	    { !this.state.password_match && <b>Passwords dont match<br/></b> }
	    { this.state.user_already_exists && <b>Username already taken<br/></b> }
	    
	    </div>
		<div>
		<form onSubmit={this.handleSubmit}>
		<Input type="text" className="ui input" style={{width: "100%"}} onChange={event => this.email = event.target.value} id="E-mail" name="E-mail" placeholder="E-mail"/><br/><br/>
		<Input type="text" className="ui input" style={{width: "100%"}} onChange={event => this.name = event.target.value} id="Username" name="Username" placeholder="Username"/><br/><br/>
		<Input type="password" className="ui input password" style={{width: "100%"}} onChange={event => this.password = event.target.value} id="Password" name="Password" placeholder="Password"/><br/><br/>
		<Input type="password" className="ui input password" style={{width: "100%"}} onChange={event => this.passwordConfirm = event.target.value} id="Password" name="Password" placeholder="Re-enter password"/><br/><br/>
		<Button type="submit" style={{width: "100%"}} className="button">Register</Button>
		</form>
		</div>
		</div>
		<div>
		</div>
		</div>
	);
    }
}

export default withRouter(Register);


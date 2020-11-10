import React from 'react';
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import http from 'http'
import './Login.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'

class Login extends React.Component {
    username = null;
    password = null;
    constructor() {
	super();
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
	event.preventDefault();
	const data = {
	    username: this.username,
	    password: this.password
	};
	const options = {
	    hostname: 'localhost',
	    path: '/api/users/login',
	    port: 5000,
	    method: 'GET',
	    headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': data.length
	    },
	    form: querystring.stringify(data)
	}
	const request = http.request(options, res => {
	    console.log('status: ${res.statusCode}')
	    res.on('data', d => {
		console.log(d);
	    })
	})
	request.on('error', error => {
	    console.error(error)
	})
	//request.write(querystring.stringify(data))
	request.end()
    }

    render() {
	return (
   <div>
      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
      </Link>

    <div className="login">
      <h1>Log In</h1>
		<div>
		<form onSubmit={this.handleSubmit}>
		<input type="text" onChange={event => this.username = event.target.value} id="Username" name="Username" placeholder="Username" /><br/>
		<input type="password" onChange={event => this.password = event.target.value} id="Password" name="Password" placeholder="Password" /><br/>
		<input type="submit" value="Log in" class="button" width="100%" /><br/>
		</form>
	Forgot password?
      </div>
    </div>
    <div>
      
    </div>
    </div>
	    
	);
    }
}

export default Login;


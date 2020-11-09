import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import https from 'https'
import querystring from 'querystring'
import request from 'request'

class Register extends React.Component {
    name = null;
    email = null;
    password = null;
    passwordConfirm = null;




    
    handleSubmit(event) {
	const data = JSON.stringify({
	    username: this.name,
	    password: this.password,
	    firstName: this.email,
	    registrationDate: Date.now()
	})
	const options = {
	    hostname: 'localhost/api/users',
	    port: 5000,
	    method: 'POST',
	    headers: {
		'Content-Type': 'application/json',
		'Content-Length': data.length
	    },
	    form: data
	}
	request(options, (err, res, body) => {
	    if (err)
		throw err
	    console.log(body)
	})
	    
	/*
	const request = https.request(options, res => {
	    console.log('status: ${res.statusCode}')
	    res.on('data', d => {
		process.stdout.write(d)
	    })
	})
	request.on('error', error => {
	    console.error(error)
	})
	request.write(data)
	request.end()
	*/
    }
    render() {
	return (	    
  <div>
      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
      </Link>

    <div class="register">
      <b>Thank you for taking our quiz!</b>
      <br/>
      <b>Register for an account to save and access
	<br/>your quiz results and other features
	<br/>of our website!</b>
      <br/>
      <br/>
		<div>
		<form onSubmit={this.handleSubmit}>
		<input type="text" value={this.email} onChange={event => this.email = event.target.value} id="E-mail" name="E-mail" placeholder="E-mail"/><br/>
		<input type="text" value={this.name} onChange={event => this.name = event.target.value} id="Username" name="Username" placeholder="Username"/><br/>
		<input type="password" value={this.password} onChange={event => this.name = event.target.value} id="Password" name="Password" placeholder="Password"/><br/>
		<input type="password" value={this.passwordConfirm} onChange={event => this.passwordConfirm = event.target.value} id="Password" name="Password" placeholder="Re-enter password"/><br/>
		<input type="submit" value="Register" class="button" width="100%"/>
		</form>
		</div>
    </div>
    <div>
      
    </div>
    


  </div>



	);
    }
}

export default Register;


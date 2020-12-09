import React from 'react';
import { Link } from 'react-router-dom'
import querystring from 'querystring'
import { withRouter } from 'react-router'
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
	axios.post('https://green4lyfe.herokuapp.com/api/users/login', data)
		  .then(response => {
		      if (response.data.error)
			  this.setState({authenticationFailure: true})
		      else {
			  var date = new Date();
			  date.setTime(date.getTime() + (60 * 60 * 1000));
			  document.cookie = "username=" + this.username + "; expires=" + date.toUTCString() + ";";
			  this.props.history.push('https://green4lyfe.netlify.app/userhome')
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
		    <Input type="text" className="ui input" style={{width: "100%"}} onChange={event => this.username = event.target.value} id="Username" name="Username" placeholder="Username" /><br/><br/>
		      <Input type="password" className="ui input" style={{width: "100%"}} onChange={event => this.password = event.target.value} id="Password" name="Password" placeholder="Password" /><br/><br/>
			<Button type="submit" className="ui button" style={{width: "100%"}} value="Log in">
			  Submit
			</Button><br/>
		  </form>
		</div>
	      </div>
	    </div>
	);
    }
}

export default withRouter(Login);


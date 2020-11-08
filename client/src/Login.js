import React from 'react';
import { Link } from 'react-router-dom'
import mongoose from 'mongoose'
import './Login.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'

class Login extends React.Component {

    render() {
	return (
   <div>
      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
      </Link>

    <div className="login">
      <h1>Log In</h1>
      <div>
	  <input type="text" id="Username" name="Username" placeholder="Username" /><br/>
	  <input type="password" id="Password" name="Password" placeholder="Password" /><br/>
	  <input type="submit" value="Log in" class="button" width="100%" /><br/>
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


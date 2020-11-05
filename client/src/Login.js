import React from 'react';
import { Link } from 'react-router-dom'
import mongoose from 'mongoose'
//import connectToDatabase from '../../server/connectToMongoDB.js'
import './Login.css'
import './green4lyfe.css'
import VideoImage from './video-generic-ss-1920.png'

class Login extends React.Component {

    render() {
	return (
   <div>
    <Link to='/'><div>
      Green4Lyfe image here
    </div></Link>

    <div className="login">
      <h1>Log In</h1>
      <div>
	  <input type="text" id="Username" name="Username" placeholder="Username" /><br/>
	  <input type="text" id="Password" name="Password" placeholder="Password" /><br/>
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


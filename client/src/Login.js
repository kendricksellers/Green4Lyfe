import React from 'react';
import './Login.css'
import './green4lyfe.css'
import VideoImage from './video-generic-ss-1920.png'

class Login extends React.Component {
    render() {
	return (
   <div>
    <div>
      Green4Lyfe image here
    </div>

    <div className="login">
      <h1>Log In</h1>
      <div>
	<form action="fake.js">
	  <input type="text" id="Username" name="Username" placeholder="Username" /><br/>
	  <input type="text" id="Password" name="Password" placeholder="Password" /><br/>
	  <input type="submit" value="Log in" class="button" width="100%" />
	</form>
	<br/>
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


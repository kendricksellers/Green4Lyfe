import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'
import './green4lyfe.css'
import VideoImage from './video-generic-ss-1920.png'
import Logo from './LOGO-Black-Scrumbags.png'

class Register extends React.Component {
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
	  <input type="text" id="Username" name="Username" placeholder="Username"/><br/>
	  <input type="text" id="E-mail" name="E-mail" placeholder="E-mail"/><br/>
	  <input type="password" id="Password" name="Password" placeholder="Password"/><br/>
  	  <input type="password" id="Password" name="Password" placeholder="Re-enter Password"/><br/>
	  <input type="submit" value="Register" class="button" width="100%"/>
      </div>
    </div>
    <div>
      
    </div>
    


  </div>



	);
    }
}

export default Register;


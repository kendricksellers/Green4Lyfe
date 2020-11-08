import React from 'react';
import { Link } from 'react-router-dom'
import './Register.css'
import './green4lyfe.css'

class Register extends React.Component {
    render() {
	return (	    
  <div>
    <Link to='/'><div>
      Green4Lyfe image here
    </div></Link>

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


import React from 'react';
import './Register.css'
import './green4lyfe.css'

class Register extends React.Component {
    render() {
	return (	    
  <div>
    <div>
      Green4Lyfe image here
    </div>

    <div class="register">
      <b>Thank you for taking our quiz!</b>
      <br/>
      <b>Register and account to save and access
	<br/>your quiz results as well as other features
	<br/>if our website!</b>
      <br/>
      <br/>
      <div>
	<form action="fake.js">
	  <input type="text" id="Username" name="Username" placeholder="Username"/><br/>
	  <input type="text" id="E-mail" name="E-mail" placeholder="E-mail"/><br/>
	  <input type="text" id="Password" name="Password" placeholder="Password"/><br/>
  	  <input type="text" id="Password" name="Password" placeholder="Re-enter Password"/><br/>
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


import React from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'

class Calculator extends React.Component {

    render() {
	return (
   <div>
      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
      </Link>
		
    </div>
	    
	);
    }
}

export default Calculator;

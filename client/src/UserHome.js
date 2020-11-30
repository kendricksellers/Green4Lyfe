import React from 'react';
import { Link } from 'react-router-dom'
import './UserHome.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

class UserHome extends React.Component {

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div className="ui segment" style={{position: "absolute", top: "10%", left: "35%"}}>
		<Link to="/blog">
		  <Button className="button">Global Blog</Button>
		</Link>
		<Link to="/wiki">
		  <Button className="button">Lifestyles</Button>
		</Link>
		<Link to="/calculator">
		  <Button className="button">Carbon Footprint</Button>
		</Link>
	      </div>
	      <div className="ui segment" style={{position: "absolute", top: "5%", right: "5%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<br/>
		PROFILE NAME
	      </div>
	      
	      <div className="ui segment box" style={{position: "absolute", left: "25%", top: "50%"}}>
		<h3>Your latest blog entry</h3>
		<br/>
		Wow! Living in a tiny home is an amazing lifestyle!
	      </div>

	      <div className="ui segment box" style={{position: "absolute", left: "50%", top: "50%"}}>
		<h3>Current Lifestyle Information</h3>
		<br/>
		Tiny home: Living in a tiny home is the pinicle of minimalism...
	      </div>

	      <div className="ui segment" style={{position: "absolute", top: "45%", right: "5%"}}>
		YOUR NAME HERE<br/>
		ACCOUNT INFORMATION<br/>
		<Link to="/userblog">Your Blog</Link><br/>
		<Link to="/results">Results</Link><br/>
		<Link to="/login">Log Out</Link><br/>
		<Link to="/">Exit</Link><br/>
	      </div>
	    </div>
	    
	);
    }
}

export default UserHome;


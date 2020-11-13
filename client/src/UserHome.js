import React from 'react';
import { Link } from 'react-router-dom'
import './UserHome.css'
import './green4lyfe.css'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'

class UserHome extends React.Component {

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div style={{position: "absolute", top: "10%", left: "35%"}}>
		<Link to="/blog">
		  <button className="button">Global Blog</button>
		</Link>
		<Link to="/wiki">
		  <button className="button">Lifestyles</button>
		</Link>
		<Link to="/calculator">
		  <button className="button">Carbon Footprint</button>
		</Link>
	      </div>
	      <div style={{position: "absolute", top: "5%", right: "5%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<br/>
		Profile Picture
	      </div>
	      
	      <div className="box" style={{position: "absolute", left: "25%", top: "50%"}}>
		<h3>Your latest blog entry</h3>
		<br/>
		Wow! Living in a tiny home is an amazing lifestyle!
	      </div>

	      <div className="box" style={{position: "absolute", left: "50%", top: "50%"}}>
		<h3>Current Lifestyle Information</h3>
		<br/>
		Tiny home: Living in a tiny home is the pinicle of minimalism...
	      </div>

	      <div className="sidebar" style={{position: "absolute", top: "45%", right: "5%"}}>
		YOUR NAME HERE<br/>
		ACCOUNT INFORMATION<br/>
		<Link to="/userblog">Your Blog</Link><br/>
		QUIZ RESULTS<br/>
		<Link to="/login">Log Out</Link><br/>
		<Link to="/">Exit</Link><br/>
	      </div>
	    </div>
	    
	);
    }
}

export default UserHome;


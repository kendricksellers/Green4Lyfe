import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './green4lyfe.css';
import Logo from './LOGO-Black-Scrumbags.png';
import './Blog.css';
import ProfilePicture from './face.jpg'

class UserBlog extends React.Component {
    
    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <input type="text" placeholder="Search users or posts" style={{width: "64.5%", position: "absolute", left: "32%"}}/>
	      <h3 style={{position: "absolute", top: "15%", left: "10%"}}>My blog</h3>
	      <div className="post-box" style={{position: "absolute", top: "23%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<b>Me</b>
		<br/>
		<textarea name="Post box" rows="24" cols="44"/>
		<br/>
		<div style={{textAlign: "center"}}>
		  <button className="button ui">Post</button>
		  <button className="button ui">Upload Image</button>
		</div>
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "10%", backgroundColor: "#ffffff", height: "18%", width: "65%"}}>
		<img src={ProfilePicture} height="50px" width="50px" alt="profile pic"/>
		<b>Me</b>
		<br/><br/>
		Just retook the quiz. Turns out I am really into foraging and farming.
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "30%", backgroundColor: "#ffffff", height: "18%", width: "65%"}}>
		<img src={ProfilePicture} height="50px" width="50px" alt="profile pic"/>
		<b>Me</b>
		<br/><br/>
		I wish that I could move to West Virginia, but I just dont have the money :(
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "50%", backgroundColor: "#ffffff", height: "18%", width: "65%"}}>
		<img src={ProfilePicture} height="50px" width="50px" alt="profile pic"/>
		<b>Me</b>
		<br/><br/>
		I still cant tell the difference between mushrooms! Im trying to pick them for cooking but I dont know if Im picking a poisonous species that just looks like cooking shrooms.
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "70%", backgroundColor: "#ffffff", height: "18%", width: "65%"}}>
		<img src={ProfilePicture} height="50px" width="50px" alt="profile pic"/>
		<b>Me</b>
		<br/>
		I dont know why it has to be called "planning poker."
	      </div>
            </div>
	);
    }
}

export default UserBlog;


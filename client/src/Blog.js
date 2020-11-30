import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './green4lyfe.css';
import Logo from './LOGO-Black-Scrumbags.png';
import './Blog.css';
import ProfilePicture from './face.jpg'
import Face2 from './face2.jpg'
import Face3 from './face3.jpg'
import Face4 from './face4.jpg'
import Face5 from './face5.jpg'
import TinyHouse from './tinyhouse.jpg'

class Blog extends React.Component {
    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <input type="text" placeholder="Search users or posts" style={{width: "64.5%", position: "absolute", left: "32%"}}/>
	      <div className="post-box" style={{position: "absolute", top: "23%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<b>Me</b>
		<br/>
		<textarea name="Post box" rows="24" cols="44"/>
		<br/>
		<div style={{textAlign: "center"}}>
		  <button className="button">Post</button>
		  <button className="button">Upload Image</button>
		</div>
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "10%", backgroundColor: "#ffffff", height: "22%", width: "65%"}}>
		<img src={Face2} height="50px" width="50px" alt="profile pic"/>
		<b>Jake Lake</b>
		<br/><br/>
		My quiz result, a tiny house, didnt really match how I really felt. I retook the quiz and it says that farming is more my style.
		<br/>
		<button className="button">Like</button>
		<button className="button">Comment</button>
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "34%", backgroundColor: "#ffffff", height: "22%", width: "65%"}}>
		<img src={Face3} height="50px" width="50px" alt="profile pic"/>
		<b>John Miller</b>
		<br/><br/>
		First time user here! How do I make posts?
		<br/>
		<button className="button">Like</button>
		<button className="button">Comment</button>
	      </div>
	      <div style={{position: "absolute", left: "32%", top: "58%", backgroundColor: "#ffffff", height: "33%", width: "65%"}}>
		<img src={Face5} height="50px" width="50px" alt="profile pic"/>
		<b>Lary Cowel</b>
		<br/>
		<img src={TinyHouse} height="100px" width="200px"/>
		This is my new Tiny House! It looks amazing! This website really changed my life.
		<br/>
		<button className="button">Like</button>
		<button className="button">Comment</button>
	      </div>
            </div>
	);
    }
}

export default Blog;

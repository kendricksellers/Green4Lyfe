import React from "react";
import axios from "axios";
import { getCookie } from "./cookie.js";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Form, TextArea, Container, Header, Icon } from 'semantic-ui-react';
import querystring from 'querystring';
import './green4lyfe.css';
import Logo from './LOGO-Black-Scrumbags.png';
import './Blog.css';


class Blog extends React.Component{

    //Constructor for post input value (value) and function initializiation (handling Change for input bar and Submit button)
    //Props stuff necessary for stability
    constructor(props) {
        super(props);
        this.state = {
			postInput: '',
			postTitle: '',
			deleteNum: 0,
            displayedPosts: [],
            currUserPostCount: 0
        };
    
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmitDel = this.handleSubmitDel.bind(this);
		this.handleChangePost = this.handleChangePost.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeDel = this.handleChangeDel.bind(this);
		this.preparePosts = this.preparePosts.bind(this);
    }
      
    //Triggered by submit buttons
    handleSubmit(event) {
        event.preventDefault();
		this.post();
		this.setState({postInput: ''});
	}
	handleSubmitDel(event) {
        event.preventDefault();
		this.deletePost(event.target.value);
		this.setState({deleteNum: 0});
	}

    //Save the data in the search bar into a variable
    handleChangePost(event) {
		this.setState({postInput: event.target.value});	
	}
	handleChangeTitle(event) {
		this.setState({postTitle: event.target.value});
	}
	handleChangeDel(event) {
		this.setState({deleteNum: event.target.value});
    }

    //Initialization of the blog page
    componentDidMount(){
        this.getPosts();
    }
    
    //Function to call all posts for the current user
    async getPosts(){
        await axios.get("http://localhost:5000/api/posts/" + this.getUsername())
        .then((response) => {
			//Test if the response is array (non-error with posts in it)
			if (Array.isArray(response.data)){
				console.log(response)
				this.setState({displayedPosts: response.data})
				this.setState({currUserPostCount: response.data.length})
			}
			else {
				console.log("User had no posts to view")
			}
          })
         .catch((error)=>{
            console.log(error);
         });
    }

    //Function to post
    async post(){
        const data = querystring.stringify({
            content: this.state.postInput,
            username: this.getUsername(),
            title: this.state.postTitle,
            postID: this.state.currUserPostCount + 1
        });

        await axios.post("http://localhost:5000/api/posts", data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.getPosts();
    }

    //Function to call the cookie for the username
    getUsername() {
        var username = getCookie("username");
        if (username == null)
            return <Link to="/login">Click to log in</Link>
        return username;
	}

	//Deleting post call
	async deletePost(){
		console.log(this.state.deleteNum);
        await axios.delete("http://localhost:5000/api/posts" + "/" + this.getUsername() + "/" + this.state.deleteNum)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.getPosts();
    }

    //Function create post list entries and save into array displayPosts
    preparePosts() { 
		if (this.state.currUserPostCount === 0){
			return <div>Write a post to get started!</div>
		}
		else {
			var printPosts = this.state.displayedPosts.map(function(entry){
				return (
					<div class="ui raised clearing segment">
						{/*entry.username === username && <div ><Icon circular onClick={this.deletePost(entry.postID)} className="delete_icon" delete name='delete'/></div>*/}
						<top>
							<h3 className="postHeaders">"{entry.title}" by {entry.username} (Post {entry.postID})</h3>
  							<p>{entry.content}</p>
						</top>
						
					</div>
				);
			})
			return <ul>{ printPosts }</ul>
		}
    }
    
	//Render things to the screen (probably base blog background later on)
    render(){
        return(
            <div>
				{/*Logo/Login*/}
				<div>
					<Link to='/'>
						<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      			</Link>
				</div>
				<div className="ui segment" style={{position: "absolute", top: "1%", right: "3%"}}>
		        <br/>
		        Current User: <b>{ this.getUsername() }</b>
	            </div>

				{/*Page Content*/}
				<div class="left">
					<div class="ui action input">
						<div>
							<Form class="postForm">
								<div class="field" value={this.state.postTitle} onChange={this.handleChangeTitle}>
									<label>Post Title</label>
									<input placeholder=""></input>
								</div>
								<div class="field" value={this.state.postInput} onChange={this.handleChangePost}>
									<label>Post Content</label>
									<TextArea rows="15" placeholder="Write your post..." style={{ minHeight: 300 }, {width: 300}} />
								</div>
								<button class="ui button" onClick={this.handleSubmit}>Post</button>
  							</Form>
						</div>
                	</div>
				</div>
				<div class="bottomLeft">
					<Form class="deleteLabel" class="ui form">
								<div padding-top="25px"  class="field" value={this.state.deleteNum} onChange={this.handleChangeDel}>
									<label>Post # To Delete</label>
									<input placeholder="Write a number here"></input>
								</div>
						<button class="ui button" onClick={this.handleSubmitDel}>Delete</button>
					</Form>
				</div>
				<div class="right">
					<div>
                    	{ this.preparePosts(this.getUsername()) }
                	</div>
				</div>
				
            </div>
            
        ); 
    }
}

export default Blog;
import React from "react";
import axios from "axios";
import { getCookie } from "./cookie.js";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import { Form, TextArea, Container, Header, Icon, Button } from 'semantic-ui-react';
import querystring from 'querystring';
import './green4lyfe.css';
import Logo from './LOGO-Black-Scrumbags.png';
import './Blog.css';
import { resolve } from "path";
import { rejects } from "assert";


class Blog extends React.Component{

    //Constructor for post input value (value) and function initializiation (handling Change for input bar and Submit button)
    //Props stuff necessary for stability
    constructor(props) {
        super(props);
        this.state = {
			postInput: '',
			postTitle: '',
			renderUpdateBox: 0,
			deleteNum: 0,
            displayedPosts: [],
			lastPostID: 0,
			requestedPostContent: '',
			requestedPostTitle: '',
			postViewLabel: 'See my Posts'
        };
    
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleSubmitDel = this.handleSubmitDel.bind(this);
		this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
		this.handleClickUpdate = this.handleClickUpdate.bind(this);
		this.handleChangePost = this.handleChangePost.bind(this);
		this.handleChangeTitle = this.handleChangeTitle.bind(this);
		this.handleChangeNum = this.handleChangeNum.bind(this);
		this.handleChangeUpdateBox = this.handleChangeUpdateBox.bind(this);
		this.handleChangeUpdateTitleBox = this.handleChangeUpdateTitleBox.bind(this);
		this.handleSwitchView = this.handleSwitchView.bind(this);
		this.preparePosts = this.preparePosts.bind(this);
		this.adjustPostID = this.adjustPostID.bind(this);
    }
      
    //Triggered by submit buttons
    handleSubmit(event) {
        event.preventDefault();
		this.post();
	}
	handleSubmitDel(event) {
        event.preventDefault();
		this.deletePost(event.target.value);
		this.setState({deleteNum: 0});
	}
	handleClickUpdate(event){
		event.preventDefault();
		this.setState({renderUpdateBox: 1});

		setTimeout(() => {
			this.getPost();
		}, 500);
		
	}
	handleSubmitUpdate(event) {
		event.preventDefault();
		this.updatePost();
		this.setState({deleteNum: 0, renderUpdateBox: 0, requestedPostContent: '', requestedPostTitle: ''});
	}
	handleSwitchView(event) {
		event.preventDefault();
		if (this.state.postViewLabel === 'See my Posts'){
			this.setState({postViewLabel: 'View all Posts'});
			this.getPosts();
		}
		else {
			this.setState({postViewLabel: 'See my Posts'});
			this.getAllPosts();
		}
	}

    //Save the data in the search bar into a variable
    handleChangePost(event) {
		this.setState({postInput: event.target.value});	
	}
	handleChangeTitle(event) {
		this.setState({postTitle: event.target.value});
	}
	handleChangeNum(event) {
		this.setState({deleteNum: event.target.value});
	}
	handleChangeUpdateBox(event){
		this.setState({requestedPostContent: event.target.value});
	}
	handleChangeUpdateTitleBox(event){
		this.setState({requestedPostTitle: event.target.value});
	}

    //Initialization of the blog page
    componentDidMount(){
		var promise = new Promise((resolve, reject) => {
			this.adjustPostID()
		});			  
	}
	
	adjustPostID(){
		this.getAllPosts();
		
		setTimeout(() => {
			const calc = this.state.displayedPosts.length - 1;
			//this.setState({lastPostID: displayedPosts.length - 1});
			console.log(calc);
			var printPosts = this.state.displayedPosts.map((entry) => entry.postID
			)
			this.setState({lastPostID: Number(printPosts[calc])});
			console.log(this.state.lastPostID);
		}, 400);
		//Obtain current postID for initialization
		
		
		
	}
    
    //Function to call all posts for the current user
    async getPosts(){
        await axios.get("https://green4lyfe.herokuapp.com/api/posts/" + this.getUsername())
        .then((response) => {
			//Test if the response is array (non-error with posts in it)
			if (Array.isArray(response.data)){
				console.log(response)
				this.setState({displayedPosts: response.data})
			}
			else {
				console.log("User had no posts to view")
			}
          })
         .catch((error)=>{
            console.log(error);
         });
	}

	async getAllPosts(){
        await axios.get("https://green4lyfe.herokuapp.com/api/posts/")
        .then((response) => {
			//Test if the response is array (non-error with posts in it)
			if (Array.isArray(response.data)){
				console.log(response)
				this.setState({displayedPosts: response.data})
			}
			else {
				console.log("No one posted yet! Can you believe that?")
			}
          })
         .catch((error)=>{
            console.log(error);
         });
	}
	
	async getPost(){
        await axios.get("https://green4lyfe.herokuapp.com/api/posts/" + this.getUsername() + "/" + this.state.deleteNum)
        .then((response) => {
			this.setState({requestedPostContent: response.data.content})
			this.setState({requestedPostTitle: response.data.title})
          })
         .catch((error)=>{
			this.setState({renderUpdateBox: 0});
            console.log(error);
         });
	}

    //Function to post
    async post(){
		console.log(this.state.lastPostID);
        const data = querystring.stringify({
            content: this.state.postInput,
            username: this.getUsername(),
			title: this.state.postTitle,
            postID: this.state.lastPostID + 1
		});
		//Increment local count so the user can continue to post
		this.setState({lastPostID: this.state.lastPostID + 1});
		console.log(this.state.lastPostID);

        await axios.post("https://green4lyfe.herokuapp.com/api/posts", data)
          .then(function (response) {
			console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.checkPostCollection();
    }

    //Function to call the cookie for the username
    getUsername() {
        var username = getCookie("username");
        if (username == null)
            return <Link to="/login">Click to log in</Link>
        return username;
	}

	checkPostCollection(){
		if (this.state.postViewLabel === "See my Posts"){
			this.getAllPosts();
		}
		else {this.getPosts();}
	}

	//Deleting post call
	async deletePost(){
        await axios.delete("https://green4lyfe.herokuapp.com/api/posts/" + this.getUsername() + "/" + this.state.deleteNum)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

		this.adjustPostID();
        this.checkPostCollection();
	}
	
	async updatePost(){
		const data = querystring.stringify({
			title: this.state.requestedPostTitle,
			content: this.state.requestedPostContent,
        });
        await axios.put("https://green4lyfe.herokuapp.com/api/posts/" + this.getUsername() + "/" + this.state.deleteNum, data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

        this.checkPostCollection();
    }

    //Function create post list entries and save into array displayPosts
    preparePosts() { 
		//Return var to render posts
		if (this.state.lastPostID === 0){
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
				<div class="switch"><Button color='green' onClick={this.handleSwitchView}>{this.state.postViewLabel}</Button></div>
				<div class="post">
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
								<Button color="green" class="ui button" onClick={this.handleSubmit}>Post</Button>
  							</Form>
						</div>
                	</div>
				</div>
				<div class="deleteAndUpdate">
					<Form class="ui form">
								<div padding-top="25px"  class="field" value={this.state.deleteNum} onChange={this.handleChangeNum}>
									<label>Post # To Delete or Update</label>
									<input placeholder="Write a number here"></input>
								</div>
						<Button color="green" class="ui button" onClick={this.handleSubmitDel}>Delete</Button> <Button color="green" class="ui button" onClick={this.handleClickUpdate}>Update</Button>
						{this.state.renderUpdateBox === 1 && <div class="updateBox">
								<label>Update Your Post Here:</label>
								<input onChange={this.handleChangeUpdateTitleBox} placeholder="" value={this.state.requestedPostTitle}></input>
								<input onChange={this.handleChangeUpdateBox} placeholder="" value={this.state.requestedPostContent}></input>
								<Button color="green" class="ui button" onClick={this.handleSubmitUpdate}>Update Post</Button>
							</div>}
					</Form>
				</div>
				<div class="right">
					<div>
                    	{ this.preparePosts() }
                	</div>
				</div>
				
            </div>
            
        ); 
    }
}

export default Blog;
import React from "react";
import axios from "axios";
import { getCookie } from "./cookie.js";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import querystring from 'querystring';


class PostList extends React.Component{
    
    //Try using this? A little more lightweight
    state = {
        posts : []
    }

    //Constructor for post input value (value) and function initializiation (handling Change for input bar and Submit button)
    //Props stuff necessary for stability
    constructor(props) {
        super(props);
        this.state = {
            postInput: '',
            displayedPosts: [],
            currUserPostCount: 0
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
      
    //Triggered by submit button
    handleSubmit(event) {
        event.preventDefault();
        this.post();
    }

    //Savve the data in the search bar into a variable
    handleChange(event) {
        this.setState({postInput: event.target.value});
    }

    //Initialization of the blog page
    componentDidMount(){
        this.getPosts();
    }
    
    //Function to call all posts for the current user
    async getPosts(){
        await axios.get("http://localhost:5000/api/posts/" + this.getUsername())
        .then((response) => {
            console.log(response)
            this.setState({displayedPosts: response.data})
            this.setState({currUserPostCount: response.data.length})
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
            title: "Silly Post",
            postID: this.state.currUserPostCount + 30
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

    //Function create post list entries and save into array displayPosts
    preparePosts() { 
        var printPosts = this.state.displayedPosts.map(function(entry){
            return <li>Name: {entry.username}, Title: {entry.title}, Content: {entry.content}, PostID: {entry.postID}</li>;
        })
        return  <ul>{ printPosts }</ul>
    }
    
    //Render things to the screen (probably base blog background later on)
    render(){
        return(
            <div>
                <div className="ui segment" style={{position: "absolute", top: "5%", right: "5%"}}>
		        <br/>
		        Current User: <b>{ this.getUsername() }</b>
	            </div>
                <div class="ui fluid action input" value={this.state.value} onChange={this.handleChange}>
                    <input type="text" placeholder="Write your post..."></input>
                    <div class="ui button" onClick={this.handleSubmit}>Post</div>
                </div>
                <div>
                    <b>{ this.preparePosts() }</b>
                </div>
            </div>
            
        ); 
    }
}

export default PostList;
import React from "react";
import axios from "axios";
import { getCookie } from "./cookie.js";
import { Link } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import querystring from 'querystring';


class PostList extends React.Component{
    state = {
        posts : []
    }

    //Constructor for post bar value and function initializiation
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            displayedPosts: [
                {
                    user: "haha"
                },
                {
                    user: "haeehe"
                }
            ],
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
        this.setState({value: event.target.value});
      }

    //Initialization of the app
    componentDidMount(){
        this.getPosts();
    }
    
    //Function to call all posts for the current user
    async getPosts(){
        const res = await axios.get("http://localhost:5000/api/posts/" + this.getUsername())
        .then((response) => {
            console.log(response)
            this.setState({displayedPosts: response.data})
            //this.setState({currUserPostCount: response.data.length}); 
            console.log(this.state.currUserPostCount)
          })
         .catch((error)=>{
            console.log(error);
         });
        
          //this.setState({
            //displayedPosts: [this.state.displayedPosts]
          //})
    }

    //Function to post
    async post(){
        const data = querystring.stringify({
            content: this.state.value,
            username: this.getUsername(),
            title: "Silly Post",
            postID: 22
        });

        const res = await axios.post("http://localhost:5000/api/posts", data)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          console.log(this.state.value)

        this.getPosts();
    }

    //Function to call the cookie for the username
    getUsername() {
        var username = getCookie("username");
        if (username == null)
            return <Link to="/login">Click to log in</Link>
        return username;
    }

    //Function to print posts
    renderList(){
        return this.state.posts.map(post => {
            return <div key={post.id}>
                <h3>{post.title}</h3>
            </div>
        })
    }

    //Function create post list entries and save into array displayPosts
    IdiomaticReactList() { 
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
                    <li>{/*this.state.displayedPosts*/}</li>
                    <b>{ this.IdiomaticReactList() }</b>
                </div>
            </div>
            
        ); 
    }
}

export default PostList;
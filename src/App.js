import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import NewPost from './newPost';
import FeedContainer from './FeedContainer';
// import Home from './Home';
import MainMenu from './MainMenu';
import PostContainer from './PostContainer';
import Socket from './socket.js';
// import Feed from './Feed.js'


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFeed: null,
      feeds: [],
      posts: [],
      connected: false,
      loggedin: false
    };
  }
  componentDidMount(){
    let socket = this.socket = new Socket();
    console.log("I'm componentDidMount")
    console.log("State:", this.state)
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this));
    socket.on('user created, logged in', this.postSubscribe.bind(this));
    socket.on('login successful', this.postSubscribe.bind(this));
    socket.on('post add', this.onAddPost.bind(this));
  }
  onConnect() {
    console.log("I'm onConnect")
    console.log("State:", this.state)
    this.setState({connected: true});
    console.log("State:", this.state)
    // this.socket.emit('feed subscribe');
  }
  onDisconnect() {
    console.log("I'm disconnect")
    console.log("State:", this.state)
    this.setState({
      posts: [],
      activeFeed: null,
      feeds: [],
      connected: false,
      loggedin: false});
  }
  onAddFeed(feed) {
    console.log("I'm onAddFeed")
    console.log("State:", this.state)
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }
  onAddPost(post) {
    console.log("I'm onAddFeed")
    console.log("State:", this.state)
    console.log("post argument: ", post)
    let{posts} = this.state;
    posts.push(post);
    this.setState({posts});
  }
  addFeed(address) {
    console.log("I'm addFeed")
    console.log("State:", this.state)
    this.setState({activeFeed: address});
    console.log("After setstate State:", this.state)
    this.socket.emit('feed add', {address});
  }

  postSubscribe(feed) {
    console.log("I'm postSubscribe")
    console.log("State:", this.state)
    console.log("feed argument in postSubscribe: ", feed)
    const feedId = feed.defaultFeed;
    this.setState({activeFeed: feed.defaultFeed});
    this.setState({loggedin:true});
    console.log("After setstate State:", this.state)
    this.socket.emit('post subscribe', {feedId} );
  }

  userSignUp(user) {
    console.log("I'm userSignUp")
    console.log("State:", this.state)
    this.socket.emit('user signup', user);
    this.setState({loggedin:true})
  }
  userLogin(userCredentials) {
    console.log("I'm userLogin")
    console.log("State:", this.state)
    this.socket.emit('user login', userCredentials);
  }
  addPost(postContents) {
    console.log("I'm addPost")
    console.log("State:", this.state)
    console.log("Post contents in addPost: ", postContents);
    this.socket.emit('post add', postContents);
  }

  render() {
    return (
      <div className="App">
        <Router>
              <div>
                <MainMenu isConnected={this.state.loggedin}/>
                {this.state.loggedin ? <a href="/" onClick={()=>{this.onDisconnect()}}>Log Off</a> :<hr /> }


                <Route path='/login' render={(props) => (
                        <Login {...props} key="login" isConnected={this.state.loggedin} userLogin={this.userLogin.bind(this)} />
                      )}/>

                <Route path="/signup" render={(props) => (
                        <Signup {...props} key="signup" isConnected={this.state.loggedin} userSignUp={this.userSignUp.bind(this)} />
                      )}/>

                <Route path="/feeds" render={(props) => (
                        <div>
                        <FeedContainer {...props} key="feedContainer" isConnected={this.state.loggedin} feeds={this.state.feeds} activeFeed={this.state.activeFeed} />
                        <PostContainer {...props} key="postContainer" posts={this.state.posts}/>
                        <NewPost {...props} key="newPost" activeFeed={this.state.activeFeed} addPost={this.addPost.bind(this)}/>
                        </div>
                      )}/>
              </div>
            </Router>
      </div>
    );
  }




};

export default App;

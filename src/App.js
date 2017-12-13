import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import NewPost from './newPost';
import FeedContainer from './FeedContainer';
import MainMenu from './MainMenu';
import PostContainer from './PostContainer';
import Socket from './socket.js';
import FeedForm from './FeedForm';


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
    this.socket = new Socket();
  }
  componentDidMount(){
    let socket = this.socket
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this));
    socket.on('user created, logged in', this.onLogin.bind(this));
    socket.on('login successful', this.onLogin.bind(this));
    socket.on('post add', this.onAddPost.bind(this));
  }
  onConnect() {
    this.setState({connected: true});
  }

  onLogin(user){
    this.setState({ 
      activeFeed: user.defaultFeed,
      loggedin:true
        });
    this.socket.emit('feed subscribe');
    this.postSubscribe();
  }
  onDisconnect() {
    this.setState({
      posts: [],
      activeFeed: null,
      feeds: [],
      connected: false,
      loggedin: false});
  }
  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});

  }
  onAddPost(post) {
    let{posts} = this.state;
    posts.push(post);
    this.setState({posts});
  }
  addFeed(name) {
    this.socket.emit('feed add', name);
  }

  postSubscribe() {
    let feedId = this.state.activeFeed    
    this.socket.emit('post subscribe', {feedId} );  
  }

  userSignUp(user) {
    this.socket.emit('user signup', user);
    this.setState({loggedin:true})
  }
  userLogin(userCredentials) {
    this.socket.emit('user login', userCredentials);
  }
  addPost(postContents) {
    this.socket.emit('post add', postContents);
  }

  render() {
    return (
      <div className="App">
        <Router>
              <div>
                <MainMenu isConnected={this.state.loggedin}/>

                <Route path='/login' render={(props) => (
                        <Login {...props} key="login" isConnected={this.state.loggedin} userLogin={this.userLogin.bind(this)} />
                      )}/>

                <Route path="/signup" render={(props) => (
                        <Signup {...props} key="signup" isConnected={this.state.loggedin} userSignUp={this.userSignUp.bind(this)} />
                      )}/>

                <Route path="/feeds" render={(props) => (
                        <div>
                        <FeedForm {...props} key="feedForm" isConnected={this.state.loggedin} addFeed={this.addFeed.bind(this)} />
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

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
      feedAddresses: [],
      connected: false,
      loggedin: false
    };
  }
  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this));
    socket.on('user created, logged in', this.postSubscribe.bind(this));
    socket.on('login successful', this.postSubscribe.bind(this));
  }
  onConnect() {
    this.setState({connected: true});
    this.socket.emit('feed subscribe');
  }
  onDisconnect() {
    this.setState({
      posts: [],
      activeFeed: null,
      feeds: [],
      feedAddresses: [],
      connected: false,
      loggedin: false});
  }

  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }

  onAddFeedAddress(feedAddress){
    let{feedAddresses} = this.state;
    feedAddresses.push(feedAddress);
    this.setState({feedAddresses});
  }

  addFeed(address) {
    this.setState({activeFeed: address});
    this.socket.emit('feed add', {address});
  }

  postSubscribe(feed) {
    const feedId = feed.defaultFeed;
    this.setState({activeFeed: feed.defaultFeed});
    this.setState({loggedin:true})
    this.socket.emit('post subscribe', {feedId} );
  }

  postSwitch(feedId) {
    this.socket.emit('post unsubscribe')
    this.socket.emit('post subscribe', {feedId})
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

  addFeedAddress(feedAddress){
    this.socket.emit('feedAddress add', {feedAddress});
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
                        <FeedContainer {...props} key="feedContainer" isConnected={this.state.loggedin} feeds={this.state.feeds} postSwitch={this.postSwitch.bind(this)} activeFeed={this.state.activeFeed} />
                        <PostContainer {...props} key="postContainer" posts={this.state.posts}/>
                        <NewPost {...props} key="newPost" activeFeed={this.state.activeFeed} addPost={this.addPost.bind(this)}/>
                        <FeedAddress {...props} key="feedAddress" feedAddresses={this.state.feedAddresses} addFeedAddress={this.addFeedAddress.bind(this)} />
                        </div>
                      )}/>
              </div>
            </Router>
      </div>
    );
  }




};

export default App;

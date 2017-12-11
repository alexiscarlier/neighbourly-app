import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import FeedContainer from './FeedContainer';
import PostContainer from './PostContainer';
import Socket from './socket.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFeed: null,
      feeds: [],
      posts: [],
      connected: false,
    };
  }
  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this));
    socket.on('user created, logged in', this.postSubscribe.bind(this));
  }
  onConnect() {
    this.setState({connected: true});
    this.socket.emit('feed subscribe');
  }
  onDisconnect() {
    this.setState({
      activeFeed: null,
      connected: false});
  }
  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }
  addFeed(address) {
    this.setState({activeFeed: address});
    this.socket.emit('feed add', {address});
  }
  postSubscribe(feed) {
    const feedId = feed.defaultFeed;
    this.setState({activeFeed: feed.defaultFeed});
    this.socket.emit('post subscribe', {feedId} );
  }
  userSignUp(user) {
    this.socket.emit('user signup', user);
  }
  userLogin(userCredentials) {
    this.socket.emit('user login', userCredentials);
  }
  render() {
    return (
      <div className="App">
        <Signup key="signup" userSignUp={this.userSignUp.bind(this)} />
        <Login userLogin={this.userLogin.bind(this)} />
        <FeedContainer key="feedContainer" feeds={this.state.feeds} activeFeed={this.state.activeFeed}/>
        <PostContainer key="postContainer" posts={this.state.posts}/>      </div>
    );
  }
};

export default App;

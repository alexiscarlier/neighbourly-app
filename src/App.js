import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import FeedContainer from './FeedContainer';
import MainMenu from './MainMenu';
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
      connected: false
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
      activeFeed: null,
      feeds: [],
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
    //redirect to feed
  }

  userSignUp(user) {
    this.socket.emit('user signup', user);
  }
  userLogin(userCredentials) {
    this.socket.emit('user login', userCredentials);
  }

  render() {
    
    // if (redirect) {
    //   return <Redirect to='/feeds'/>;
    // }
    return (
      <div className="App">
        <Router>
              <div>
                <MainMenu />
                <hr/>
                
                <Route path='/login' render={(props) => (
                        <Login {...props} redirect={this.state.connected} userLogin={this.userLogin.bind(this)} />
                      )}/>
                
                <Route path="/signup" render={(props) => (
                        <Signup {...props} redirect={this.state.connected} userSignUp={this.userSignUp.bind(this)} />
                      )}/>

                  <Route path="/feeds" render={(props) => (
                        <FeedContainer {...props} redirect={this.state.connected} feeds={this.state.feeds} activeFeed={this.state.activeFeed} />
                      )}/>
              </div>
            </Router>
      </div>
    );
  }




};

export default App;

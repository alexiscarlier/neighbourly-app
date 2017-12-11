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
      connected: false,
      loggedin:false
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
    console.log("on connect", this.state);
  }
  onDisconnect() {
    
    this.setState({
      activeFeed: null,
      feeds: [],
      connected: false});
      this.setState({loggedin:false});

      console.log("on disconect", this.state);
      
  }
  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }
  addFeed(address) {
    this.setState({activeFeed: address});
    this.socket.emit('feed add', {address});
    console.log("on addfeed", this.state);
  }
  postSubscribe(feed) {
    const feedId = feed.defaultFeed;
    this.setState({activeFeed: feed.defaultFeed});
    this.setState({loggedin:true})
    this.socket.emit('post subscribe', {feedId} );
    console.log("on postsubscribe", this.state);
    //redirect to feed
  }

  userSignUp(user) {
    this.socket.emit('user signup', user);
    this.setState({loggedin:true})
    
    console.log("on user signup", this.state);
  }
  userLogin(userCredentials) {
    this.socket.emit('user login', userCredentials);
    console.log("on user login", this.state);
  }

  render() {
    return (
      <div className="App">
        <Router>
              <div>
                <MainMenu isConnected={this.state.loggedin}/>
                {this.state.loggedin ? <a href="/" onClick={()=>{this.onDisconnect()}}>Log Off</a> :<hr /> }
                
                <Route path='/login' render={(props) => (
                        <Login {...props} isConnected={this.state.loggedin} userLogin={this.userLogin.bind(this)} />
                      )}/>
                
                <Route path="/signup" render={(props) => (
                        <Signup {...props} isConnected={this.state.loggedin} userSignUp={this.userSignUp.bind(this)} />
                      )}/>

                <Route path="/feeds" render={(props) => (
                        <FeedContainer {...props} isConnected={this.state.loggedin} feeds={this.state.feeds} activeFeed={this.state.activeFeed} />
                      )}/>
              </div>
            </Router>
      </div>
    );
  }




};

export default App;

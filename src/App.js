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
import FeedAddressContainer from './feedAddressContainer';

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
    socket.on('feedAddress add', this.onAddFeedAddress.bind(this));
  }

  onConnect() {
    this.setState({connected: true});
  }

  onLogin(user) {
    let feedId = user.defaultFeed
    this.setState({ 
      activeFeed: feedId,
      loggedin:true
        });
    this.socket.emit('feed subscribe');
    this.postSubscribe(feedId);
  }

  onDisconnect() {
    this.setState({
      posts: [],
      activeFeed: null,
      feeds: [],
      feedAddresses: [],
      connected: false,
      loggedin: false
    });
  }

  onAddFeed(feed) {
    let{feeds} = this.state;
    feeds.push(feed);
    this.setState({feeds});
  }

  onAddFeedAddress(feedAddress){
    let{feedAddresses} = this.state;
    feedAddresses.push(feedAddress);
    this.setState({ feedAddresses });
    console.log(this.state)
  }

  onAddPost(post) {
    let{posts} = this.state;
    posts.push(post);
    this.setState({posts});
  }

  addFeed(name) {
    this.setState({
      feeds: [],      
    })
    this.socket.emit('feed add', name);
    this.socket.emit('feed subscribe');    
  }

  postSubscribe(feedId) {
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

  getActiveFeed() {
    return this.state.activeFeed
  }

  setActiveFeed(feedId) {
    this.socket.emit('post unsubscribe');
    this.socket.emit('feedAddress unsubscribe');
    this.setState({
      posts: [],
      feedAddresses: [],
      activeFeed: feedId,
    })
    this.postSubscribe(feedId)
    this.socket.emit('feedAddress subscribe', { feedId });
  }
  
  addFeedAddress(feedAddress) {
    this.socket.emit('feedAddress unsubscribe');    
    this.setState({
      feedAddresses: [],
    })
    let feedId = this.getActiveFeed()
    this.socket.emit('feedAddress add', feedAddress);
    this.socket.emit('feedAddress subscribe', { feedId });    
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
            <div >
              <header>
              </header>
            </div>
            <Route path="/feeds" render={(props) => (
              <div >
                <main>
                  <div >
                    <ul className="side-nav fixed" >
                      <div className="container">
                        <div className="row">
                          <li>
                            <FeedContainer {...props}
                              key="feedContainer"
                              isConnected={this.state.loggedin}
                              feeds={this.state.feeds}
                              setActiveFeed={this.setActiveFeed.bind(this)} 
                            // getActiveFeed={this.state.getActiveFeed.bind(this)} 
                            />
                            <FeedForm {...props} key="feedForm" isConnected={this.state.loggedin} addFeed={this.addFeed.bind(this)} />                            
                          </li>
                        </div>
                        <div className="row">
                          <li>
                          <FeedAddressContainer {...props}
                            key="feedAddress"
                            getActiveFeed={this.getActiveFeed.bind(this)}                  
                            feedAddresses={this.state.feedAddresses}
                            addFeedAddress={this.addFeedAddress.bind(this)} />
                          </li>
                        </div>
                      </div>
                    </ul>
                    <div className="container ">
                      <div className="row">
                        <div className="col s12 m9 l9 push-m3 push-l3">
                          <div className="card ">
                              <PostContainer {...props} key="postContainer" posts={this.state.posts}/>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
                </main>
                <footer className="footer">
                  <div className="container">
                    <div className="row">
                      <div className="col s12 m9 l9 push-m3 push-l3">
                          <div className="card post-form">
                            <NewPost {...props} key="newPost" getActiveFeed={this.getActiveFeed.bind(this)} addPost={this.addPost.bind(this)}/>
                          </div> 
                          <div className="footer-copyright">
                          </div>
                      </div> 
                    </div>
                  </div>
                </footer>
              </div>
            )}/>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;

import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import FeedContainer from './FeedContainer';
import Socket from './socket.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeFeed: null,
      feeds: [],
      connected: false,
    };
  }

  componentDidMount(){
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('feed add', this.onAddFeed.bind(this))
  }

  onConnect() {
    this.setState({connected: true});
    this.socket.emit('feed subscribe')
  }
  onDisconnect() {
    this.setState({
      activeFeed: null,
      feeds: [],
      connected: false})
  }

  onAddFeed(feed) {
    let{feeds} = this.state;
    if (feed.address === this.state.activeFeed) {
      feeds[0] = feed;
    }
    this.setState({feeds});
  }

  addFeed(address) {
    this.setState({activeFeed: address});
    this.socket.emit('feed add', {address});
  }

  render() {
    return (
      <div className="App">
        <Signup addFeed={this.addFeed.bind(this)} />
        <FeedContainer feeds={this.state.feeds} />
      </div>
    );
  }
}

export default App;

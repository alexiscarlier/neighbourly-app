import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import FeedContainer from './FeedContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds:
      []
    };
  }
  addFeed(userName) {
    let {feeds} = this.state;
    feeds.push({name: userName});
    this.setState({
      feeds: feeds
    })
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

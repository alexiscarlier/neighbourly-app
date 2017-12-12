import React, { Component } from 'react';
import Login from './Login';
import FeedContainer from './FeedContainer';

class Home extends Component {

  render() {
    return (
      <div>
      {this.props.isConnected ? 
        <FeedContainer  isConnected={this.props.isConnected} feeds={this.props.feeds} activeFeed={this.props.activeFeed} />
        : 
        <Login  isConnected={this.props.isConnected} userLogin={this.props.userLogin} />}
      </div>
      )
  }

}

export default Home;
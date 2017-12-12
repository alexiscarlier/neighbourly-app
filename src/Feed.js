import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <div>Welcome to the feed for: {this.props.feed.name}</div>
    );
  }
};

export default Feed;

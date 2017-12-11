import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <div>Welcome to the feed for: {this.props.route.postcode}</div>
    );
  }
};

export default Feed;

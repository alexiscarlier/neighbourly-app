import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <div>Welcome, {this.props.address}! Your feed...</div>
    );
  }
}

export default Feed;

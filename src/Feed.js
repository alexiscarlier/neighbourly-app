import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <div>Welcome, {this.props.name}! Your feed...</div>
    );
  }
}

export default Feed;

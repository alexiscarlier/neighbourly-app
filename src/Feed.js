import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <h2>Welcome, {this.props.name}! Your feed...</h2>
    );
  }
}

export default Feed;

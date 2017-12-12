import React, { Component } from 'react';

class Feed extends Component {
  render () {
    return (
      <div>{this.props.feed.name}</div>
    );
  }


};

export default Feed;

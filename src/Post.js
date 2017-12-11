import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div>Post title: {this.props.title} Post: {this.props.text}</div>
    );
  }
};

export default Post;

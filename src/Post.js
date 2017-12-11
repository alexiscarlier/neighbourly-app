import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div><div id="#post-title">Post title: {this.props.title}</div><div>Post: {this.props.text}</div></div>
    );
  }
};

export default Post;

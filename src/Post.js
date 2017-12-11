import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div>
        <div>Post title: {this.props.title} Post date: {new Date(this.props.createdAt).toDateString()}</div>
        <div>Post: {this.props.text}</div>
      </div>
    );
  }
};

export default Post;

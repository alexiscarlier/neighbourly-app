import React, { Component } from 'react';

class Post extends Component {
  render () {
    return (
      <div>
        <div>Post title: {this.props.title} Post date: {this.dateFormat(this.props.createdAt)}</div>
        <div>Post: {this.props.text}</div>
      </div>
    );
  }
  dateFormat(date) {
    return new Date(date).toDateString();
  }
};

export default Post;

import React, { Component } from 'react';
import Post from './Post';

class PostContainer extends Component {
  render () {
    return (
      <div>
        {this.renderPosts(this.props.posts)}
      </div>
    )
  }

  renderPosts(post){
    return post;
  }
};

export default PostContainer;

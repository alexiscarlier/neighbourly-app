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

  renderPosts(posts){
    return posts.map((post) => {
      return <Post title={post.name} text={post.text} createdAt={post.createdAt} />
    });
  }
};

export default PostContainer;

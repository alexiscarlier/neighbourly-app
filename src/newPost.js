import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      feed: {
        id: props.activeFeed
      }
    };
  }

  onSubmit(e) {
    this.setState({
      contents: ""
    });
    const postContents = this.state;
    e.preventDefault();
    this.props.addPost(postContents);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return(
      <div>
        <form id="new-post" onSubmit={this.onSubmit.bind(this)}>
          <h1>Create Post</h1>
          <input type="text" id="title" name="title" onChange={this.onChange.bind(this)} value={this.state.contents} required placeholder="Enter a title"/>
          <textarea form="new-post" id="text" name="text" onChange={this.onChange.bind(this)} value={this.state.contents} required placeholder="Enter your message"></textarea>
          <input type="submit" value="Create Post" />
        </form>
      </div>
    )
  }
};

export default NewPost;

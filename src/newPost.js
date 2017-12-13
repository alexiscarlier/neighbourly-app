import React, { Component } from 'react';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      text: "",
      feed: {
        id: ""
      }
    };
  }

  onSubmit(e) {

    const postContents = this.state;
    e.preventDefault();
    this.props.addPost(postContents);
    this.setState({
        name: "",
        text: "",
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      feed: {
        id: this.props.activeFeed
      }
    });
  }

  render() {
    return(
      <div>
        <form id="new-post" onSubmit={this.onSubmit.bind(this)}>
          <h1>Create Post</h1>
          <input type="hidden" id="feedId" name="feedId" value={this.state.feed.id} />
          <input type="text" id="title" name="name" onChange={this.onChange.bind(this)} value={this.state.name} required placeholder="Enter a title"/>
          <textarea form="new-post" id="text" name="text" onChange={this.onChange.bind(this)} value={this.state.text} required placeholder="Enter your message"></textarea>
          <input type="submit" value="Create Post" />
        </form>
      </div>
    )
  }
};

export default NewPost;

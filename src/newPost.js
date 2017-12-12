import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
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
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1>Create Post</h1>
          <input type="text" id="contents" name="contents" onChange={this.onChange.bind(this)} value={this.state.contents} required placeholder="Contents"/>
          <input type="submit" value="Create Post" />
        </form>
      </div>
    )
  }
};

export default NewPost;

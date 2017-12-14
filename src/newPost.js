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
    this.props.addPost(postContents);
    this.setState({
      name: "",
      text: "",
    });
    e.preventDefault();
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      feed: {
        id: this.props.getActiveFeed()
      }
    });
  }

  render() {
    return(
      <form id="new-post" onSubmit={this.onSubmit.bind(this)}>
        <div className="row">
          <div className="col s12">
              <input type="hidden" id="feedId" name="feedId" value={this.state.feed.id} />
              <input type="text" id="title" name="name" onChange={this.onChange.bind(this)} value={this.state.name} required placeholder="Enter a title"/>
              <textarea form="new-post" id="text" name="text" onChange={this.onChange.bind(this)} value={this.state.text} required placeholder="Enter your message"></textarea>
          </div>
        </div>
        <input className="btn waves-effect waves-light red lighten-2" type="submit" value="Create Post"/>
      </form>    
    )
  }
};

export default NewPost;

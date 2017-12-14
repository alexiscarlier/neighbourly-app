import React, { Component } from 'react';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      feedId: this.props.feed.id
    };
  }

  onClick() {
    console.log(this.state)
    console.log(this.props.feed.name)
    this.props.setActiveFeed(this.state.feedId)
  }


  render () {
    return (
      <button type="button" onClick={this.onClick.bind(this)}
      >{this.props.feed.name}</button>
    );
  }


};

export default Feed;

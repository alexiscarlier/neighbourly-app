import React, { Component } from 'react';

class Feed extends Component {
  handleClick() {
    console.log("This is a serious project david")
  }

  render () {
    return (
      <div onClick={this.handleClick}>
      {this.props.feed.name}
      </div>
    );
  }


};

export default Feed;

import React, { Component } from 'react';

class Feed extends Component {

  render () {
    return (
      <div onClick={ () => this.props.postSwitch(this.props.feed.id)}>
      {this.props.feed.name}
      </div>
    );
  }


};

export default Feed;

import React, { Component } from 'react';

class FeedAddress extends Component {

  render () {
    return (
      <li>{this.props.feedAddress.address}</li>
    );
  }


};

export default FeedAddress;

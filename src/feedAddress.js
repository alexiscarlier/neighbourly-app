import React, { Component } from 'react';

class FeedAddress extends Component {

  render () {
    return (

      <button className="feed-btn truncate">
        {this.props.feedAddress.address.join(' ')}
      </button>
    );
  }


};

export default FeedAddress;

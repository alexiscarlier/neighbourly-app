import React, { Component } from 'react';

class FeedAddress extends Component {

  render () {
    return (

      <button className="feed-btn btn waves-effect waves-light teal lighten-2 truncate">
        {this.props.feedAddress.address.join(' ')}
      </button>
    );
  }


};

export default FeedAddress;

import React, { Component } from 'react';
import Feed from './Feed';

class FeedContainer extends Component {
  render () {
    return (
      <div>
        {this.props.feeds.map(function(feed) {
        return <Feed name={feed.name} />
        })
        }
      </div>
    )
  }
}

export default FeedContainer;

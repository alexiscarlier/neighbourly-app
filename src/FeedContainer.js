import React, { Component } from 'react';
import Feed from './Feed';

class FeedContainer extends Component {
  render () {
    return (
      <div>
        { (() => {
          if (this.props.feeds.length !== 0) {
          return <Feed name={this.props.feeds[0].name } />
        }
      })()
      }
      </div>
    )
  }
}

export default FeedContainer;

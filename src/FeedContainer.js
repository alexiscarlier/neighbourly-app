import React, { Component } from 'react';
import Feed from './Feed';

class FeedContainer extends Component {
  render () {
    return (
      <div>
        { (() => {
          if (this.props.feeds.length !== 0) {
            console.log(this.props.feeds)
          return <Feed name={this.props.feeds[this.props.feeds.length -1].name } />
        }
      })()
      }
      </div>
    )
  }
}

export default FeedContainer;

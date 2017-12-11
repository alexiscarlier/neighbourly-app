import React, { Component } from 'react';
import Feed from './Feed';

class FeedContainer extends Component {
  render () {
    return (
      <div>
        { (() => {
         
          var activeFeed = this.props.activeFeed
          var feeds = this.props.feeds
          var feedList = []
          feedList.push(feeds.filter ((el ) => {
            return el["id"] === activeFeed
          }))
            var feed = feedList[0]
            if (feed.length !== 0) {
              var postcode = feed[0].address
              return <Feed postcode={postcode} />
            }
        })()
      }
      </div>
    )
  }
};

export default FeedContainer;

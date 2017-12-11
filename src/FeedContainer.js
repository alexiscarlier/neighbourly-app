import React, { Component } from 'react';
import Feed from './Feed';
// import { Redirect } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';
import { Redirect } from 'react-router-dom';
class FeedContainer extends Component {
  render () {
    return (
      <div>
        
        {this.props.redirect ?  (() => {
         
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
       : <Redirect to='/login' />}
      </div>
    )
  }
};

export default FeedContainer;

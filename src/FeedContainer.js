import React, { Component } from 'react';
import Feed from './Feed';

// import { Redirect } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';
import { Redirect } from 'react-router-dom';
class FeedContainer extends Component {

  render () {
    return (
      <div>
        
         {this.props.isConnected ? (() => {

        var feeds = this.props.feeds
        var feedList = feeds.map((feed, index) => {
           return <Feed feed={feed} key={index} postSwitch={this.props.postSwitch}/>
        })

        return feedList

        })()
       : <Redirect to='/login' />}
       
      </div>
    )
  }
};

export default FeedContainer;

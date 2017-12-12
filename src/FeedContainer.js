import React, { Component } from 'react';
import Feed from './Feed';
import FeedForm from './feedForm';
// import { Redirect } from '../../../Library/Caches/typescript/2.6/node_modules/@types/react-router';
import { Redirect } from 'react-router-dom';
class FeedContainer extends Component {
  handleClick =(feedid) => {
    console.log("Hello", feedid)
  }

  render () {
    return (
      <div>
        <p>this is the feed</p>
        {this.props.isConnected ?  (() => {

        var feeds = this.props.feeds
        var feedList = feeds.map((feed, index) => {
           return <Feed feed={feed} key={index} handleClick={this.handleClick.bind(this)}/>
        })

        return feedList

        })()
       : <Redirect to='/login' />}
       <FeedForm />
      </div>
    )
  }
};

export default FeedContainer;

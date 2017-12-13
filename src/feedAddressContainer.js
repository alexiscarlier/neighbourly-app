import React, { Component } from 'react';
import FeedAddress from '../src/FeedAddress';
import AddAddressForm from '../src/addAddressForm'


class FeedAddressContainer extends Component {
  render () {
    return (
      <div>
        <p>Here are the addresses that can see the active feed</p>
        {(() => {

        var feedAddresses = this.props.feedAddresses

        var feedAddressesList = feedAddresses.map((feedAddress, index) => {
          return <FeedAddress
          feedAddress={feedAddress}
          key={index} />
        })

          return (
            <ul>{ feedAddressesList }</ul>
          )
            

        })()}
       
        <AddAddressForm
          getActiveFeed={this.props.getActiveFeed.bind(this)}                          
          addFeedAddress={this.props.addFeedAddress.bind(this)} />
      </div>
    )
  }
};
 
export default FeedAddressContainer;

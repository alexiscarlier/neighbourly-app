import React, { Component } from 'react';

class FeedAddress extends Component {
  render () {
    return (
      <div>
        <p>Here are the addresses that can see the active feed</p>
        {(() => {

        var feedAddresses = this.props.feedAddresses

        var feedAddresses = addresses.map((feedAddress) => {
           return feedAddress
        })

        return feedAddresses

        })()}
       
       <AddAddressForm />
      </div>
    )
  }
};
 
export default FeedAddress;

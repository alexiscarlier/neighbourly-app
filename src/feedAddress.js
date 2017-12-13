import React, { Component } from 'react';
import AddAddressForm from '../src/addAddressForm'


class FeedAddress extends Component {
  render () {
    return (
      <div>
        <p>Here are the addresses that can see the active feed</p>
        {(() => {

        var feedAddresses = this.props.feedAddresses

        var feedAddressesList = feedAddresses.map((feedAddress) => {
           return feedAddress
        })

        return feedAddressesList

        })()}
       
       <AddAddressForm />
      </div>
    )
  }
};
 
export default FeedAddress;

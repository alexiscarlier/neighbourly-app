import React, { Component } from 'react';
import FeedAddress from '../src/feedAddress';
import AddAddressForm from '../src/addAddressForm'


class FeedAddressContainer extends Component {
  render () {
    return (
      <div>
        {(() => {

        var feedAddresses = this.props.feedAddresses

        var feedAddressesList = feedAddresses.map((feedAddress, index) => {
          return <FeedAddress
          feedAddress={feedAddress}
          key={index} />
        })

          return (
            <div className="container">{ feedAddressesList }</div>
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

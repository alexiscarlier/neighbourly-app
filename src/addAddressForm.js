import React, { Component } from 'react';

class AddAddressForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: {},
      feed: {
        id: this.props.getActiveFeed()
      }
    };
  }
  onSubmit(e) {
    const feedAddress = this.state;
    feedAddress.address = {
      streetNumber: document.getElementById("street_number").value,
      streetName: document.getElementById("route").value,
      postcode: document.getElementById("postal_code").value
    }
    this.props.addFeedAddress(feedAddress);
    this.setState({
      streetNumber: "",
      streetName: "",
      postcode: ""
    });
    e.preventDefault();
  }
  onChange(e) {
    this.setState({
      [e.target.address]: e.target.value,
    });
  }
  render() {
    return (
      <div>
        <form id="address-form" onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
          <h1>Add Address</h1>

          <input
            onFocus={window.initAutocomplete}
              id="autocomplete"
              name="address"
              type="text"
              placeholder="Enter your address"
            />
            <input
              id="street_number"
              name="streetNumber"
              placeholder="Number"
              disabled="true"
            />
            <input
              id="route"
              name="streetName"
              placeholder="Street"
              disabled="true"
            />
            <input
              id="postal_code"
              name="postcode"
              placeholder="Postcode"
              disabled="true"
            />
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
};

export default AddAddressForm;

import React, { Component } from 'react';

class AddAddressForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: {},
      feed: {}
    };
  }
  onSubmit(e) {
    let feedAddress = this.state
    feedAddress.feed = {
      id: this.props.getActiveFeed()
    }
    feedAddress.address = {
      streetNumber: document.getElementById("street_number").value,
      streetName: document.getElementById("route").value,
      postcode: document.getElementById("postal_code").value
    }
    document.getElementById("autocomplete").value = ''
    this.props.addFeedAddress(feedAddress);
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
          <input
            onFocus={window.initAutocomplete}
            id="autocomplete"
            name="address"
            type="text"
            placeholder="Enter an address"
          />
          <input
            type="hidden"            
            id="street_number"
            name="streetNumber"
            placeholder="Number"
            disabled="true"
          />
          <input
            type="hidden"            
            id="route"
            name="streetName"
            placeholder="Street"
            disabled="true"
          />
          <input
            type="hidden"            
            id="postal_code"
            name="postcode"
            placeholder="Postcode"
            disabled="true"
          />
        <button className="btn waves-effect waves-light red lighten-2" type="submit" value="Submit">Submit<i className="material-icons right">send</i></button>

        </form>
      </div>
    )
  }
};

export default AddAddressForm;

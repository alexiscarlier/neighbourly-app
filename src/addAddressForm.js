import React, { Component } from 'react';

class AddAddressForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      feedAddress: {

      }
    };
  }
  onSubmit(e){
    const feedAddress = this.state;
    this.props.addFeedAddress(feedAddress);
    this.setState({
      feedAddress: ""
    });
    e.preventDefault();
  }
  onChange(e) {
    this.setState({
      [e.target.address]: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form id="address-form" onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
          <h1>Add Address</h1>

            <input
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

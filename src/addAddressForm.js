import React, { Component } from 'react';

class AddAddressForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      address: ""
    };
  }
  onSubmit(e){
    const address = this.state;
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
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="feedAddress" onChange={this.onChange.bind(this)} value={this.state.address}/>
        </form>
      </div>
    )
  }
};

export default AddAddressForm;

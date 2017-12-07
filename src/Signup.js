import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  onSubmit(e){
    let {address} = this.state;
    this.setState({
      address: ""
    });
    this.props.addFeed(address);
    e.preventDefault();
  }
  onChange(e) {
      this.setState({
        address: e.target.value
      });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        Please enter your address:
        <input type="text" onChange={this.onChange.bind(this)} value={this.state.address}>
        </input>
        <input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
}

export default Signup;

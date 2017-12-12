import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      streetNumber: "",
      streetName: "",
      postcode: "",
      username: "",
      email: "",
      password: ""
    };
  }
  onSubmit(e){
    const user = this.state;
    this.props.userSignUp(user);
    
    this.setState({
      streetNumber: "",
      streetName: "",
      postcode: "",
      username: "",
      email: "",
      password: ""
    });
    e.preventDefault();
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      streetNumber: document.getElementById("street_number").value,
      streetName: document.getElementById("route").value,
      postcode: document.getElementById("postal_code").value
    });
  }
  render() {
    return (
      <div>
{ this.props.isConnected ? <Redirect to='/feeds' /> :
      <form id="signup-form" onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
        <h1>Sign-Up</h1>
       
          <input
            id="autocomplete"
            name="address"
            onFocus={window.geolocate()}
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
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            placeholder="Username"
            required
          />
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.email}
            required
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            required
          />
          <input type="submit" value="Submit" />
    </form> }
      </div>
    );
  }
};

export default Signup;

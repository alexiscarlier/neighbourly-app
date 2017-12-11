import React, { Component } from 'react';

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
    this.setState({
      streetNumber: "",
      streetName: "",
      postcode: "",
      username: "",
      email: "",
      password: ""
    });
    const user = this.state;
    console.log(user)
    e.preventDefault();
    this.props.userSignUp(user);
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
            disabled="true"
          />
          <input
            id="route"
            name="streetName"
            disabled="true"
          />
          <input
            id="postal_code"
            name="postcode"
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
        </form>
      </div>
    );
  }
};

export default Signup;

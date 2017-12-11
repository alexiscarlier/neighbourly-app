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
    e.preventDefault();
    this.props.userSignUp(user);
  }
  onChange(e) {
    //somehow get other form paramenters
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Sign-Up</h1>
       
          <input id="autocomplete" name="address" onFocus={window.geolocate()} type="text" placeholder="Enter your address"></input>  

          <input id="street_number" name="streetNumber" onChange={this.onChange.bind(this)} value={this.state.streetNumber}></input>
          <input id="route" name="streetName" onChange={this.onChange.bind(this)} value={this.state.streetName}></input>
          <input id="postal_code" name="postcode" onChange={this.onChange.bind(this)} value={this.state.postcode}></input>

        <input type="text" id="username" name="username" onChange={this.onChange.bind(this)} value={this.state.username} required placeholder="Username"/>
        <input type="text" id="email" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
        <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
        <input type="submit" value="Submit">
        </input>
        </form>
      </div>
    );
  }
};

  /* <input type="text" id="postcode" name="postcode" onChange={this.onChange.bind(this)} value={this.state.postcode} required placeholder="Post Code" /> */

export default Signup;

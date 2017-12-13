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
      <div className ="container">
          { this.props.isConnected ? <Redirect to='/feeds' /> :
        <div className="row">
          <div className="col s12 m6 push-m3 card-panel hoverable login-box">
            <form id="signup-form" onSubmit={this.onSubmit.bind(this)} onChange={this.onChange.bind(this)}>
            <div className="row">
              <div className="col s12">
                <div className="input-field">
                  <input
                    id="autocomplete"
                    name="address"
                    
                    type="text"
                    placeholder="Enter your address"
                  /> 
                  </div>
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
              </div>
              </div>
              <button className="btn waves-effect waves-light" type="submit" value="Log In">Sign Up<i className="material-icons right">send</i></button>
            </form>
            <p>or <a href="/login">log in</a> if you have an account</p>
          </div>
        </div>}
      </div>
    );
  }
};

export default Signup;

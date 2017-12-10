import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  onSubmit(e){
    let {address} = this.state;
    this.setState({
      address: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.addFeed(address);
    e.preventDefault();
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        Please enter your address:
        <input type="text" name="address" onChange={this.onChange.bind(this)} value={this.state.address} required placeholder="Post Code"/>
        <input type="text" name="username" onChange={this.onChange.bind(this)} value={this.state.username}required placeholder="Username"/>
        <input type="text" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
        <input type="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
        <input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
}

export default Signup;

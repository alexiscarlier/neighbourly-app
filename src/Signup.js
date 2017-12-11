import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {
      postcode: "",
      username: "",
      email: "",
      password: ""
    };
  }
  onSubmit(e){
    this.setState({
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
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        <h1>Sign-Up</h1>
        <input type="text" id="postcode" name="postcode" onChange={this.onChange.bind(this)} value={this.state.postcode} required placeholder="Post Code"/>
        <input type="text" id="username" name="username" onChange={this.onChange.bind(this)} value={this.state.username}required placeholder="Username"/>
        <input type="text" id="email" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
        <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
        <br></br><input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
};

export default Signup;

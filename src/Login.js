import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    this.setState({
      email: "",
      password: ""
    });
    const userCredentials = this.state;
    e.preventDefault();
    this.props.userLogin(userCredentials);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div>
        { this.props.isConnected ? <Redirect to='/feeds' /> :
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1>Log in</h1>
          <input type="text" id="email" name="email" onChange={this.onChange.bind(this)} value={this.state.email} required placeholder="Email"/>
          <input type="password" id="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password}required placeholder="Password"/>
          <input type="submit" value="Submit" />
        </form>}
      </div>
    )
  }
}

export default Login;

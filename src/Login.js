import React, { Component } from 'react';

class Login extends Component {
  onSubmit(e) {

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <h1>Log in</h1>
        </form>
      </div>
    )
  }
}

export default Login;

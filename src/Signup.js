import React, { Component } from 'react';

class Signup extends Component {
  onSubmit(){
    console.log('I was clicked')
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        Please enter your name:
        <input type="text">
        </input>
        <input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
}

export default Signup;

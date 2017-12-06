import React, { Component } from 'react';

class Signup extends Component {
  onClick(){
    console.log('I was clicked')
  }

  render() {
    return (
      <div>
      <form>
        Please enter your name:
        <input type="text">
        </input>
      </form>
      <h2 onClick={this.onClick.bind(this)}>Submit</h2>
      </div>
    );
  }
}

export default Signup;

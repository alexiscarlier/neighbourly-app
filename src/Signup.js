import React, { Component } from 'react';

class Signup extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  onSubmit(e){
    let {userName} = this.state;
    console.log(userName);
    this.setState({
      userName: ""
    });
    e.preventDefault();
  }
  onChange(e) {
      this.setState({
        userName: e.target.value
      });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.onSubmit.bind(this)}>
        Please enter your name:
        <input type="text" onChange={this.onChange.bind(this)} value={this.state.userName}>
        </input>
        <input type="submit" value="Submit">
        </input>
      </form>
      </div>
    );
  }
}

export default Signup;

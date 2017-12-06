import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Feed from './Feed';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed:
      {name: 'userName'}
    };
  }
  render() {
    return (
      <div className="App">
        <Signup />
        <Feed name="David Halewood" />
      </div>
    );
  }
}



export default App;

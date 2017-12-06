import React, { Component } from 'react';
import './App.css';
import Signup from './Signup';
import Feed from './Feed';

class App extends Component {
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

import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <ul>
      <li><a href="/login">Login</a></li>
      <li><a href="/signup">Signup</a></li>
      <li><a href="/feeds">Feeds</a></li>
    </ul>
    );
  }
};

export default MainMenu;


               
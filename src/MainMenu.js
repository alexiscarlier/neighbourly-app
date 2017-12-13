import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <nav className="teal">
        <div>
          <ul>
              
              { !this.props.isConnected ?
              <div>
                <li><a href="/feeds">Feeds</a></li>
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </div>: 
              <div>
                <li><a href="/login">Log Off</a></li>
              </div>
              }
          </ul> 
        </div>
      </nav>
    );
  }
};

export default MainMenu;


               
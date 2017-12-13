import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <nav className="teal">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            Neighbour.ly
          </a>
          <ul className="right">
            <li><a href="/feeds">Feeds</a></li>
              
              { !this.props.isConnected ?
              <ul className="right">
                <li><a href="/login">Log In</a></li>
                <li><a href="/signup">Sign Up</a></li>
              </ul>: 
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


               
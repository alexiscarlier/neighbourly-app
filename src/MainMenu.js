import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      // Dropdown Structure
      <nav className="teal">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo left">
            Neighbour.ly
          </a>
          { !this.props.isConnected ?
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/feeds">Feeds</a></li>
            <li><a href="/login">Log In</a></li>
            <li><a href="/signup">Sign Up</a></li>
          </ul> 
          :
          <ul id="dropdown1" className="dropdown-content">
            <li><a href="/feeds">Feeds</a></li>
            <li><a href="/login">Log Off</a></li>
          </ul>
          }
          <div class="right">
            <a class="dropdown-button" href="#!" data-activates="dropdown1">
              <i class="material-icons right">
                menu
              </i>
            </a>
          </div>
        </div>
      </nav>
    );
  }
};

export default MainMenu;


               
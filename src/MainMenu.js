import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <div>
      <ul>
          <li><a href="/feeds">Feeds</a></li>
            
              { !this.props.isConnected ?
              <div>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
              </div>: 
              <p>Welcome to your feed!</p>
              }
            
        
      </ul> 
      </div>
    );
  }
};

export default MainMenu;


               
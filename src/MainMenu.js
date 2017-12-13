import React, { Component } from 'react';

class MainMenu extends Component {
  render () {
    return (
      <div>
      <ul>
          
            
              { !this.props.isConnected ?
              <div>
                <li><a href="/feeds">Feeds</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Signup</a></li>
              </div>: 
              <li><a href="/logoff">log out</a></li>
              }
            
        
      </ul> 
      </div>
    );
  }
};

export default MainMenu;


               
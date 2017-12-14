import React, { Component } from 'react';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      feedId: this.props.feed.id
    };
  }

  onClick() {
    console.log(this.state)
    this.props.setActiveFeed(this.state.feedId)
  }


  render () {
    return (
      <button className="btn waves-effect waves-light teal lighten-2 truncate" 
            style={{"width": "120%"}}
              type="button" onClick={this.onClick.bind(this)}
      >{this.props.feed.name}</button>
    );
  }


};

export default Feed;

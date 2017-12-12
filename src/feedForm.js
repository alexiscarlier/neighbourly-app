import React, { Component } from 'react';

class FeedForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      feedName: ""
    };
  }
  onSubmit(e){
    const feed = this.state;
    // this.props.userSignUp(user);
    this.setState({
      feedName: ""
    });
    e.preventDefault();
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render () {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="feedName" />
          <input type="submit" name="submit" />
        </form>
      </div>  
    );
  }
};

export default FeedForm;

import React, { Component } from 'react';

class FeedForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: ""
    };
  }
  onSubmit(e){
    const feed = this.state;
    this.props.addFeed(feed);
    this.setState({
      name: ""
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
          <input type="text" name="name" onChange={this.onChange.bind(this)} value={this.state.name}/>
          <button className="btn waves-effect waves-light red lighten-2" type="submit" value="Submit">Submit<i className="material-icons right">send</i></button>
        </form>
      </div>  
    );
  }
};

export default FeedForm;

import React, { Component } from 'react';

class FeedForm extends Component {
  render () {
    return (
      <div>
        <form >
          <input type="text" name="feedName" />
          <input type="submit" name="feedName" />
        </form>
      </div>  
    );
  }
};

export default FeedForm;

import React, { Component } from 'react';

class Message extends Component {
  constructor() {
    super();

    //state
    this.state = {
      message: 'Welcome visitor',
    };
  }

  //setState
  changeMessage = () => {
    this.setState({
      message: 'Thanks For Visiting',
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>subscribe</button>
      </div>
    );
  }
}

export default Message;

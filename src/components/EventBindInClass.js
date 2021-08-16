import React, { Component } from 'react';

class EventBindInClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
      message1: 'Hy',
      message2: 'welcome',
    };

    this.clickButtonAgain = this.clickButtonAgain.bind(this);
  }

  clickHandler() {
    this.setState({
      message: 'Clicked',
    });
  }

  clickButton = () => {
    this.setState({
      message1: 'GoodBye!',
    });
  };

  clickButtonAgain() {
    this.setState({
      message2: 'Thanks for visiting',
    });
  }

  render() {
    return (
      <div>
        <h4>Event Binding In Class Component</h4>

        <h5>1st method</h5>
        {this.state.message}
        <br />
        <button onClick={this.clickHandler.bind(this)}>click</button>
        <br />
        <h5>2nd method </h5>
        {this.state.message1}
        <br />
        <button onClick={this.clickButton}>click</button>
        <br />
        <h5>3rd method </h5>
        {this.state.message2}
        <br />
        <button onClick={this.clickButtonAgain}>click</button>
      </div>
    );
  }
}

export default EventBindInClass;

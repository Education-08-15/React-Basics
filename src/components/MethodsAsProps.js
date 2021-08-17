import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class MethodsAsProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      greet: 'Hello',
    };
  }
  greet = () => {
    alert(`${this.state.greet} Parent from child`);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greet} />
      </div>
    );
  }
}

export default MethodsAsProps;

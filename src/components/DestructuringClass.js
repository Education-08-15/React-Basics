import React, { Component } from 'react';

export class DestructuringClass extends Component {
  render() {
    const { Pet, name } = this.props;
    return (
      <div>
        <h4> Destructuring using props in Class Component</h4> Your Pet is :{' '}
        {Pet}
        <br />
        Your pet's name is : {name}
      </div>
    );
  }
}

// destructuring method for state in class
export class DestructuringClass1 extends Component {
  render() {
    const { state1, state2 } = this.state;
    return <div></div>;
  }
}

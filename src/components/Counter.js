import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
  Increment = () => {
    // this.setStae takes 2 parameters 1st one state object & 2nd one cb func
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log('Callback', this.state.count);
    //   },
    // );
    // console.log(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  };

  incrementFive = () => {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  };
  render() {
    return (
      <div>
        <h4> Count : {this.state.count}</h4>
        <button onClick={this.Increment}>Increment</button>

        <button onClick={this.incrementFive}>Increment 5</button>
      </div>
    );
  }
}

export default Counter;

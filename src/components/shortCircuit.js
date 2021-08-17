import React, { Component } from 'react';

export class ShortCircuit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // either something is rendered or nothing
    return this.state.isLoggedIn && <div>Welcome Shikshya</div>;
  }
}

export default ShortCircuit;

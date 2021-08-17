import React, { Component } from 'react';

class Ternary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Shikshya</div>
    ) : (
      <div>Welcome Guest</div>
    );
  }
}

export default Ternary;

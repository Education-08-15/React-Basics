import React, { Component } from 'react';

class ElementVariable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggenIn: true,
    };
  }

  render() {
    let message;
    if (this.state.isLoggenIn) {
      message = <div> Welcome Shikshya</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>;
  }
}

export default ElementVariable;

import React, { Component } from 'react';

export class Props1 extends Component {
  render() {
    return (
      <div>
        Name = {this.props.name}
        <br />
        profession = {this.props.profession}
        <hr></hr>
      </div>
    );
  }
}

export default Props1;

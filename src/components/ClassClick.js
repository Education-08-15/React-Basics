import React, { Component } from 'react';

class ClassClick extends Component {
  clickMe() {
    return (document.getElementById('click').innerText = 'Clicked');
  }
  render() {
    return (
      <div>
        <h4>Event Handling in Class Component</h4>
        <button id='click' onClick={this.clickMe}>
          Click
        </button>
      </div>
    );
  }
}

export default ClassClick;

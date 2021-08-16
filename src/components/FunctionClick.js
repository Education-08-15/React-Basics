import React from 'react';

function FunctionClick() {
  const clickHandler = () => {
    return (document.getElementById('hello').innerText = 'Clicked');
  };
  return (
    <div>
      <h4>Event Handling In Functional Component</h4>
      <button id='hello' onClick={clickHandler}>
        Click
      </button>
    </div>
  );
}

export default FunctionClick;

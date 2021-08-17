import React from 'react';
import ReactDOM from 'react-dom';
import ElementVariable from './components/elementVariable';

import UserGreeting from './components/ifElse';
import ShortCircuit from './components/shortCircuit';

import Ternary from './components/ternary';

const App = () => {
  return (
    <div>
      <h4>
        React Basics Course : Conditional Rendering
        <hr />
        <UserGreeting />
        <ElementVariable />
        <Ternary />
        <ShortCircuit />
      </h4>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';

import UserGreeting from './components/ifElse';

const App = () => {
  return (
    <div>
      <h4>
        React Basics Course : Conditional Rendering
        <hr />
        <UserGreeting />
      </h4>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

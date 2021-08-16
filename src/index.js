import React from 'react';
import ReactDOM from 'react-dom';
import { DestructuringClass } from './components/DestructuringClass';

import {
  DestructuringProps,
  DestructuringProps1,
} from './components/DestructuringFunction';

const App = () => {
  return (
    <div>
      React Basics : Destructuring using Props and state
      <hr />
      <DestructuringProps name='Shikshya' profession='Programming' />
      <DestructuringProps1 name='Nanu' profession='Coding' />
      <DestructuringClass name='Snowie' Pet='Dog' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

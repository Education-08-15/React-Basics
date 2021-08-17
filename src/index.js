import React from 'react';
import ReactDOM from 'react-dom';
import MethodsAsProps from './components/MethodsAsProps';
import Props from './components/Props';
import Props1 from './components/props1';

const App = () => {
  return (
    <div>
      React Basics : Props in Functional Component
      <hr />
      <Props name='Shikshya' profession='Coder'>
        This is a children prop.
        <button>click</button>
      </Props>
      <Props name='Nanu' profession='Programmer' />
      <h1>Props in Class Component</h1>
      <Props1 name='Shikshya' profession='Coder' />
      <Props1 name='Nanu' profession='Programmer' />
      <MethodsAsProps />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

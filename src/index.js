import React from 'react';
import ReactDOM from 'react-dom';
import WithJSX from './components/withJSX';
import WithoutJSX from './components/withoutJSX';

const App = () => {
  return (
    <div>
      <WithJSX />
      <WithoutJSX />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

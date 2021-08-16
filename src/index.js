import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Message from './components/Message';

const App = () => {
  return (
    <div>
      <Message />
      <hr />
      <Counter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

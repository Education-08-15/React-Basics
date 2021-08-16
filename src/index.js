import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import Message from './components/Message';

const App = () => {
  return (
    <div>
      <h4>
        Welcome to React Basics Course
        <br />
        Visit branch to know more
      </h4>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

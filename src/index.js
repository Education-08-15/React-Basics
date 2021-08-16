import React from 'react';
import ReactDOM from 'react-dom';
import ClassClick from './components/ClassClick';
import EventBindInClass from './components/EventBindInClass';
import FunctionClick from './components/FunctionClick';

const App = () => {
  return (
    <div>
      React Basics : Event Handling
      <hr />
      <FunctionClick />
      <ClassClick />
      <EventBindInClass />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

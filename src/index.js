import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './component/ClassComponent';

const App = () => {
  return (
    <div>
      Hello
      <ClassComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

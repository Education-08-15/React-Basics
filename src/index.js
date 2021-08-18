import React from 'react';
import ReactDOM from 'react-dom';
import ListRendering from './components/ListRendering';

const App = () => {
  return (
    <div>
      <h4>React Basics Course : List Rendering</h4>
      <hr />
      <ListRendering />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

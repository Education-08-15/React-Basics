import React from 'react';
import ReactDOM from 'react-dom';
import FunctionComponent from './components/FunctionalComponent';

const App = () => {
  return (
    <div>
      Hello
      <FunctionComponent name='Shikshya'>
        <h1>Hello</h1>
      </FunctionComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

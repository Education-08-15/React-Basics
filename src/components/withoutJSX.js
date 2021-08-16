import React from 'react';

const WithoutJSX = () => {
  return React.createElement(
    'div',
    { className: 'Jsx' },
    React.createElement('h1', null, 'Component without JSX '),
    React.createElement(
      'h4',
      { id: 'h4' },
      'Can have nested React.createElement ',
    ),
  );
};

export default WithoutJSX;

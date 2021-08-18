import React from 'react';

function Person({ item }) {
  return (
    <div>
      <h4>
        {item.id}
        <br />
        {item.name}
        <br />
        {item.age}
      </h4>
    </div>
  );
}

export default Person;

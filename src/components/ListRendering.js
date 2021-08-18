import React from 'react';
import Person from './Person';

function ListRendering() {
  const names = ['Bruce', 'Clark', 'Diana', 'Clark'];
  const persons = [
    {
      id: 1,
      name: 'Andy',
      age: 30,
    },
    {
      id: 2,
      name: 'Bndy',
      age: 20,
    },
    {
      id: 3,
      name: 'Cndy',
      age: 33,
    },
    {
      id: 4,
      name: 'Dndy',
      age: 25,
    },
  ];

  const nameMapping = names.map((name, index) => {
    return (
      <h2 key={index}>
        {' '}
        {index} - {name}
      </h2>
    );
  });

  const personListMapping = persons.map((item) => {
    return <Person key={item.id} item={item} />;
  });
  return (
    <div>
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {nameMapping}
      {personListMapping}
    </div>
  );
}

export default ListRendering;

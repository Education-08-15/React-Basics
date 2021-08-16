import React from 'react';

export function DestructuringProps({ name, profession }) {
  return (
    <div>
      <h4>Destructuring Props using Functional Components : 1st method</h4>
      Your name is :{name}
      <br />
      Your profession is : {profession}
    </div>
  );
}

export function DestructuringProps1(props) {
  const { name, profession } = props;
  return (
    <div>
      <h4>Destructuring Props using Functional Components : 2nd method</h4>
      Your name is :{name}
      <br />
      Your profession is : {profession}
    </div>
  );
}

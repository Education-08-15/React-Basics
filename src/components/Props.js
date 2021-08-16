import React from 'react';

const Props = (props) => {
  // console.log(props);
  return (
    <div>
      <h4>
        Hello {props.name} and profession is {props.profession}
      </h4>

      {props.children}
    </div>
  );
};

export default Props;

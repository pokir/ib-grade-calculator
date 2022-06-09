import React from 'react';

const NumberInput = props => {
  // TODO: make it so having a default value still allows the user to scroll
  // the numbers
  return (
    <>
      <h6>{props.label}</h6>
      <input type='number' min={props.min} max={props.max} placeholder={props.min}
        style={{width: '55px'}}
        onChange={el => props.onValueChange(Number.parseInt(el.target.value))}
      ></input>
    </>
  );
};

export default NumberInput;

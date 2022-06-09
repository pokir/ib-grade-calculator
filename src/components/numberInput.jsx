import React from 'react';

const NumberInput = props => {
  return (
    <>
      <h6>{props.label}</h6>
      <input type='number' min={props.min} max={props.max}
        style={{width: '55px'}}
        onChange={el => props.onValueChange(Number.parseInt(el.target.value))}
      ></input>
    </>
  );
};

export default NumberInput;

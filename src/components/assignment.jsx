import React, { useState } from 'react';

const Assignment = () => {
  const [ weight, setWeight ] = useState(1);
  const [ numberOfMarks, setNumberOfMarks ] = useState(1);
  const [ marksAwarded, setMarksAwarded ] = useState(0);

  return (
    <div
      style={{
        backgroundColor: 'beige',
      }}
    >
      <h1 contentEditable="true">Paper 1</h1>

    // TODO: Make a number input component with min, max, default, and label

      <p>Weight (out of 100)</p>
      <input type='number' min='1' max='100'
        onChange={
          el => {
            setWeight(Number.parseInt(el.target.value));
          }
        }
      ></input>

      <p>Number of marks</p>
      <input type='number' min='1' max='999'
        onChange={
          el => {
            setNumberOfMarks(Number.parseInt(el.target.value));
          }
        }
      ></input>

      <p>Marks awarded (out of {numberOfMarks})</p>
      <input type='number' min='0' max={numberOfMarks}
        onChange={
          el => {
            setMarksAwarded(Number.parseInt(el.target.value));
          }
        }
      ></input>

      <p></p>

    </div>
  );
};

export default Assignment;

import React, { useState, useEffect } from 'react';
import NumberInput from './numberInput';
import DeleteButton from './deleteButton';

const Assignment = props => {
  // TODO: make assignments grow vertically when shrinked horizontally in the
  // flexbox

  const [ weight, setWeight ] = useState(1);
  const [ numberOfMarks, setNumberOfMarks ] = useState(1);
  const [ marksAwarded, setMarksAwarded ] = useState(0);

  const { onWeightedPercentChange, onWeightChange } = props;

  useEffect(() => {
    onWeightedPercentChange((marksAwarded / numberOfMarks) * weight);
  }, [onWeightedPercentChange, weight, numberOfMarks, marksAwarded]);

  useEffect(() => {
    onWeightChange(weight);
  }, [onWeightChange, weight]);

  return (
    <div
      style={{
        backgroundColor: 'beige',
        width: '250px',
        height: '250px',
        margin: '10px',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly safe',
        alignItems: 'center',
      }}
    >
      <h4 contentEditable="true">Paper {props.index + 1}</h4>

      <NumberInput min='1' max='100'
        label='Weight (out of 100)'
        onValueChange={setWeight}
      />
      
      <NumberInput min='1' max='999'
        label='Number of marks'
        onValueChange={setNumberOfMarks}
      />
      
      <NumberInput min='0' max={numberOfMarks}
        label={`Marks awarded (out of ${numberOfMarks})`}
        onValueChange={setMarksAwarded}
      />

      <DeleteButton
        onDelete={
          () => {
            props.onDelete(props.index);
          }
        }
      />

    </div>
  );
};

export default Assignment;

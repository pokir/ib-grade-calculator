import React, { useState, useEffect } from 'react';
import NumberInput from './numberInput.jsx';
import DeleteButton from './deleteButton.jsx';

const Assignment = props => {
  const [ weight, setWeight ] = useState(1);
  const [ numberOfMarks, setNumberOfMarks ] = useState(1);
  const [ marksAwarded, setMarksAwarded ] = useState(0);

  const { onWeightedPercentChange } = props;

  useEffect(() => {
    onWeightedPercentChange((marksAwarded / numberOfMarks) * weight);
  }, [onWeightedPercentChange, weight, numberOfMarks, marksAwarded]);

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
      <h4 contentEditable="true">Paper 1</h4>

      <NumberInput min='1' max='100' label='Weight (out of 100)'
        onValueChange={setWeight}
      />
      
      <NumberInput min='1' max='999' label='Number of marks'
        onValueChange={setNumberOfMarks}
      />
      
      <NumberInput min='0' max={numberOfMarks} label={`Marks awarded (out of ${numberOfMarks})`}
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

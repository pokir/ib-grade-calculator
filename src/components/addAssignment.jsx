import React from 'react';

const AddAssignment = props => {
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
      <h1>Add assignment</h1>
      <button onClick={props.createAssignment}>+</button>
    </div>
  );
};

export default AddAssignment;

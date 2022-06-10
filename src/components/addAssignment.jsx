import React from 'react';

const AddAssignment = props => {
  return (
    <div
      style={{
        backgroundColor: 'beige',
        width: '250px',
        height: '250px',
        margin: '10px',
        textAlign: 'center',
        borderRadius: '10%',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly safe',
        alignItems: 'center',
      }}
    >
      <button style={{margin: 'auto'}} onClick={props.createAssignment}>
        Add an assignment
      </button>
    </div>
  );
};

export default AddAssignment;

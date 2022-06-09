import React from 'react';

const DeleteButton = props => {
  return (
    <button
      style={{
        backgroundColor: 'red',
        width: '20px',
        height: '20px',
        border: 'none',
        fontSize: '9px',
        textAlign: 'center',
        margin: '10px',
      }}
      onClick={
        () => {
          props.onDelete()
        }
      }
    >X</button>
  );
};

export default DeleteButton;

import React from 'react';

const AddCourse = props => {
  return (
    <div
      style={{
        backgroundColor: '#1183aa',
        width: '100%',
        height: '150px',
        marginBottom: '10px',
        textAlign: 'center',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly safe',
        alignItems: 'center',
      }}
    >
      <button style={{margin: 'auto'}} onClick={props.createCourse}>
        Add a course
      </button>
    </div>
  );
};

export default AddCourse;

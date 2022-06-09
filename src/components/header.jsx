import React from 'react';

const Header = () => {
  return (
    <div
      style={{
        backgroundColor: '#1183bb',
        padding: '10px',
        marginBottom: '10px',
      }}
    >
      <h1 style={{textAlign: 'center', width: '100%'}}>IB Grade Calculator</h1>
      <p style={{textAlign: 'center', width: '100%'}}>Easily calculate the final grade for your IB courses, which you can then use with the IB's grade boundaries.</p>
      <p style={{textAlign: 'center', width: '100%'}}>Just add and rename a course and assignments, and fill out the numbers!</p>
    </div>
  );
};

export default Header;

import React from 'react';

const Footer = props => {
  return (
    <div
      style={{
        position: 'relative',
        bottom: '0',
        width: '100%',
        padding: '10px',
        textAlign: 'left',
        backgroundColor: 'lightgray',
        color: '#444',
        //borderTop: '1px solid black',
        fontSize: '0.8em',
      }}
    >
      <p>{props.appName} v{props.appVersion}</p>
      <p>Find the source code at <a target='_blank' rel='noopener noreferrer' href={props.appSourceCodeUrl}>{props.appSourceCodeUrl}</a>.</p>
    </div>
  );
};

export default Footer;

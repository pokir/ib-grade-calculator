import React from 'react';

const CourseSummary = props => {
  // the sumOfWeights prop should be null when there are no assignments yet

  return (
    <div
      style={{
        padding: '10px',
      }}
    >
      <p style={{color: 'red'}}>
        {
          [100, null].includes(props.sumOfWeights) ? '' :
          `Your weights add up to ${props.sumOfWeights}, not 100!`
        }
      </p>
      <p>Final grade (out of 100): {Math.round(props.weightedPercentage)}</p>
    </div>
  );
};

export default CourseSummary;

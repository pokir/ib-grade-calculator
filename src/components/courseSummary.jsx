import React from 'react';

const CourseSummary = props => {
  return (
    <div>
      <p style={{color: 'red'}}>
        {props.sumOfWeights === 100 ? '' : 'The weights do not add to 100!'}
      </p>
      <p>Final grade (out of 100): {Math.round(props.weightedPercentage)}</p>
    </div>
  );
};

export default CourseSummary;

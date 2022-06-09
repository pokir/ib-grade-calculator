import React from 'react';

const CourseSummary = props => {
  return (
    <div>
      <p>Final grade (out of 100): {Math.round(props.weightedPercentage)}</p>
    </div>
  );
};

export default CourseSummary;

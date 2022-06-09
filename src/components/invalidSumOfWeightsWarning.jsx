import React from 'react';

const InvalidSumOfWeightsWarning = props => {
  return (
    <div>
      <p style={{color: 'red'}}>{props.sumOfWeights === 100 ? '' : 'The weights do not add up to 100!'}</p>
    </div>
  );
};

export default InvalidSumOfWeightsWarning;

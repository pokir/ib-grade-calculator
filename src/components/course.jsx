import React, { useState, useCallback } from 'react';
import Assignment from './assignment.jsx';
import AddAssignment from './addAssignment.jsx';

const Course = props => {
  // the sum of the values in weightedPercentages gives the final grade
  const [ weightedPercentages, setWeightedPercentages ] = useState({});
  const [ assignments, setAssignments ] = useState({});
  // the index for the next assignment if it is created
  const [ nextIndex, setNextIndex ] = useState(0);

  const updateWeightedPercent = useCallback((percent, index) => {
    // change the weighted percent for one assignment
    const weightedPercentagesCopy = {...weightedPercentages};

    weightedPercentagesCopy[index] = percent;

    setWeightedPercentages(weightedPercentagesCopy);
  }, [weightedPercentages]);

  const deleteAssignment = useCallback(index => {
    // TODO: Fix the bug where it deletes all the items after index instead of
    // just at index. Apparently it is keeping a copy of the state at
    // the time this function was passed as a prop to the assignment instead of
    // the current state.
    //
    const assignmentsCopy = {...assignments};
    const weightedPercentagesCopy = {...weightedPercentages};

    //delete assignmentsCopy[index];
    //delete weightedPercentagesCopy[index];

    setAssignments(assignmentsCopy);
    setWeightedPercentages(weightedPercentagesCopy);
  }, [assignments, weightedPercentages]);

  const createAssignment = useCallback(() => {
    const assignmentsCopy = {...assignments};

    const index = nextIndex;
    setNextIndex(nextIndex + 1);

    // a new assignment component
    assignmentsCopy[index] = (
      <Assignment key={index} index={index}
        onWeightedPercentChange={
          percent => {
            updateWeightedPercent(percent, index);
          }
        }

        onDelete={deleteAssignment}
      />
    );

    setAssignments(assignmentsCopy);
  }, [assignments, nextIndex, deleteAssignment, updateWeightedPercent]);

  return (
    <div
      style={{
        backgroundColor: '#1183aa',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start safe',
        flexWrap: 'wrap',
      }}
    >
      {Object.values(assignments)}

      <AddAssignment createAssignment={createAssignment} />
    </div>
  );
};

export default Course;

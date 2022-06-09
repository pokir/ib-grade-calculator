import React, { useCallback, useEffect, useState } from 'react';
import Assignment from './assignment';
import AddAssignment from './addAssignment';
import CourseSummary from './courseSummary';
import DeleteButton from './deleteButton';

const Course = props => {
  const [ assignments, setAssignments ] = useState({});

  // the weights of the assignments
  const [ weights, setWeights ] = useState({});
  // change the variables below to change a weighted percent
  const [ weightToUpdateIndex, setWeightToUpdateIndex ]
    = useState(null);
  const [ weightToUpdate, setWeightToUpdate ]
    = useState(null);

  // the sum of the values in weightedPercentages gives the final grade
  const [ weightedPercentages, setWeightedPercentages ] = useState({});
  // change the variables below to change a weighted percent
  const [ weightedPercentToUpdateIndex, setWeightedPercentToUpdateIndex ]
    = useState(null);
  const [ weightedPercentToUpdate, setWeightedPercentToUpdate ]
    = useState(null);

  // the index for the next assignment if it is created
  const [ nextIndex, setNextIndex ] = useState(0);

  // change the variable below to delete an assignment
  const [ assignmentIndexToDelete, setAssignmentIndexToDelete ]
    = useState(null);


  useEffect(() => {
    // TODO: change the code so the dependency array can have all the
    // dependencies (check warning message when run)

    // deletes an assignment whenever the assignmentIndexToDelete variable is
    // changed
    const assignmentsCopy = {...assignments};
    const weightsCopy = {...weights};
    const weightedPercentagesCopy = {...weightedPercentages};

    delete assignmentsCopy[assignmentIndexToDelete];
    delete weightsCopy[assignmentIndexToDelete];
    delete weightedPercentagesCopy[assignmentIndexToDelete];

    setAssignments(assignmentsCopy);
    setWeights(weightsCopy);
    setWeightedPercentages(weightedPercentagesCopy);
  }, [assignmentIndexToDelete]);

  useEffect(() => {
    // TODO: change the code so the dependency array can have all the
    // dependencies (check warning message when run)

    // change the weighted percent for one assignment when the
    // weightedPercentToUpdate and/or weightedPercentToUpdateIndex variable is changed

    if (weightedPercentToUpdateIndex === null) return;

    const weightedPercentagesCopy = {...weightedPercentages};

    weightedPercentagesCopy[weightedPercentToUpdateIndex] = weightedPercentToUpdate;

    setWeightedPercentages(weightedPercentagesCopy);
  }, [weightedPercentToUpdateIndex, weightedPercentToUpdate]);

  useEffect(() => {
    // TODO: change the code so the dependency array can have all the
    // dependencies (check warning message when run)

    // change the weigh for one assignment when the
    // weightToUpdate and/or weightToUpdateIndex variable is changed

    if (weightToUpdateIndex === null) return;

    const weightsCopy = {...weights};

    weightsCopy[weightToUpdateIndex] = weightToUpdate;

    setWeights(weightsCopy);
  }, [weightToUpdateIndex, weightToUpdate]);

  const createAssignment = useCallback(() => {
    const assignmentsCopy = {...assignments};

    const index = nextIndex;

    // a new assignment component
    assignmentsCopy[index] = (
      <Assignment key={index} index={index}
        onWeightedPercentChange={
          percent => {
            setWeightedPercentToUpdateIndex(index);
            setWeightedPercentToUpdate(percent);
          }
        }

        onWeightChange={
          weight => {
            setWeightToUpdateIndex(index);
            setWeightToUpdate(weight);
          }
        }

        onDelete={setAssignmentIndexToDelete}
      />
    );

    setAssignments(assignmentsCopy);

    setNextIndex(nextIndex + 1);
  }, [assignments, nextIndex]);

  return (
    <div
      style={{
        backgroundColor: '#1183aa',
        marginBottom: '10px',
      }}
    >
      <DeleteButton
        onDelete={
          () => {
            props.onDelete(props.index);
          }
        }
      />

      <h2 contentEditable='true' style={{textAlign: 'center'}}>
        {
          [
            'Chemistry SL', 'Physics HL',
            'Math AA SL', 'Spanish B HL'
          ][props.index % 4]
        }
      </h2>
      
      <CourseSummary
        weightedPercentage={
          Object.values(weightedPercentages).length === 0 ? 0 :
          Object.values(weightedPercentages).reduce((a, b) => a + b)
        }
        sumOfWeights={
          Object.values(weights).length === 0 ? null :
          Object.values(weights).reduce((a, b) => a + b)
        }
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start safe',
          flexWrap: 'wrap',
        }}
      >
        {Object.values(assignments)}

        <AddAssignment createAssignment={createAssignment} />
      </div>
    </div>
  );
};

export default Course;

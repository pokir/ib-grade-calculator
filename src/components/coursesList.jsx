import React, { useCallback, useEffect, useState } from 'react';
import AddCourse from './addCourse.jsx';
import Course from './course.jsx';

const CoursesList = props => {
  // The container for all the courses.

  const [ courses, setCourses ] = useState({});

  // update this variable to delete a course
  const [ courseIndexToDelete, setCourseIndexToDelete ] = useState(null);

  // the index of the next course to be created
  const [ nextIndex, setNextIndex ] = useState(0);

  useEffect(() => {
    if (courseIndexToDelete === null) return;

    const coursesCopy = {...courses};

    delete coursesCopy[courseIndexToDelete];

    setCourses(coursesCopy);
  }, [courseIndexToDelete]);

  const createCourse = useCallback(() => {
    const coursesCopy = {...courses};

    coursesCopy[nextIndex] = <Course key={nextIndex} index={nextIndex}
      onDelete={setCourseIndexToDelete}
    />

    setCourses(coursesCopy);

    setNextIndex(nextIndex + 1);
  }, [courses, nextIndex]);

  return (
    <div>
      {Object.values(courses)}

      <AddCourse createCourse={createCourse} />
    </div>
  );
};

export default CoursesList;

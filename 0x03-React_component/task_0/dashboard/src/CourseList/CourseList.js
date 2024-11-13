import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import './CourseList.css';

export default function CourseList({ listCourses = [] }) {
  return (
    <table>
      {listCourses.length > 0 ? (
        <>
          <thead>
            <CourseListRow textFirstCell='Available courses' isHeader={true} />
            <CourseListRow
              textFirstCell='Course name'
              textSecondCell='Credit'
              isHeader={true}
            />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                isHeader={false}
              />
            ))}
          </tbody>
        </>
      ) : (
        <tr>
          <td>No course available yet</td>
        </tr>
      )}
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

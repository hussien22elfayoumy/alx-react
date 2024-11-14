import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({ listCourses = [] }) {
  return (
    <table className={css(styles.table)}>
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
          <td className={css(styles.thtd)}>No course available yet</td>
        </tr>
      )}
    </table>
  );
}

const styles = StyleSheet.create({
  table: {
    marginTop: '2em',
    width: '100%',
    fontSize: '1.2rem',
    marginBottom: '15em',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  thtd: {
    width: '50%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '5px',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

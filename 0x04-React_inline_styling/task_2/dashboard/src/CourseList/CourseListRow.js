import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.thtd)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.thtd)}>{textFirstCell}</th>
            <th className={css(styles.thtd)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={css(styles.thtd)}>{textFirstCell}</td>
          <td className={css(styles.thtd)}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  thtd: {
    width: '50%',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '5px',
  },
  header: {
    backgroundColor: '#deb5b545',
  },

  normal: {
    backgroundColor: '#f5f5f5ab',
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

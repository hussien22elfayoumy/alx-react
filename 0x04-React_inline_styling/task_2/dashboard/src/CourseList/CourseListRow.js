import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const rowStyle = {
  backgroundColor: '#f5f5f5ab',
};
const headerStyle = {
  backgroundColor: '#deb5b545',
};

export default function CourseListRow({
  isHeader = false,
  textFirstCell,
  textSecondCell = null,
}) {
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th className={css(styles.thtd)} colSpan={2} style={headerStyle}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.thtd)} style={headerStyle}>
              {textFirstCell}
            </th>
            <th className={css(styles.thtd)} style={headerStyle}>
              {textSecondCell}
            </th>
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
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

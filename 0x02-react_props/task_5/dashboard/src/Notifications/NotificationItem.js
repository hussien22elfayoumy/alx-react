import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type = 'default', html, value }) {
  return (
    <>
      {value ? (
        <li data-priority={type}>{value}</li>
      ) : (
        <li
          data-priority={type}
          dangerouslySetInnerHTML={{ __html: html }}
        ></li>
      )}
    </>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
};

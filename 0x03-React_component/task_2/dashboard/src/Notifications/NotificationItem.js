import React, { Component } from 'react';
import PropTypes from 'prop-types';

//prettier-ignore
class NotificationItem extends Component {
  render() {
		const { type, value, html, markAsRead, id } = this.props;
    return (
      <React.Fragment>
        {value ? (
          <li onClick={() => markAsRead(id)} data-priority={type}>{value}</li>
        ) : (
          <li
					onClick={() => markAsRead(id)}
            data-priority={type}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        )}
      </React.Fragment>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {
    console.log('empty func');
  },
  id: 0,
};

export default NotificationItem;

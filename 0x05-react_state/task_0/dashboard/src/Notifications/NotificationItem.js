import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

//prettier-ignore
class NotificationItem extends React.PureComponent {
  render() {
		const { type, value, html, markAsRead, id } = this.props;
    return (
      <React.Fragment>
        {value ? (
          <li className={css(styles[type])} onClick={() => markAsRead(id)} data-priority={type}>{value}</li>
        ) : (
          <li
					className={css(styles[type])}
					onClick={() => markAsRead(id)}
            data-priority={type}
            dangerouslySetInnerHTML={{ __html: html }}
          ></li>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
  urgent: {
    color: 'red',
    '@media (max-width: 900px)': {
      borderBottom: '1px solid black',
      listStyle: 'none',
      fontSize: '20px',
      padding: '10px 8px',
    },
  },
});

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

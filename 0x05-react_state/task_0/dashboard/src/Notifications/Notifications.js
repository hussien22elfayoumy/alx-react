import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { css, StyleSheet } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);

    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div
            className={css(styles.Notifications)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              {this.props.listNotifications.length > 0 ? (
                <React.Fragment>
                  <p>Here is the list of notifications</p>
                  <ul>
                    {this.props.listNotifications.map((notification) => (
                      <NotificationItem
                        key={notification.id}
                        type={notification.type}
                        value={notification.value}
                        html={notification.html}
                        markAsRead={this.markAsRead}
                        id={notification.id}
                      />
                    ))}
                  </ul>
                </React.Fragment>
              ) : (
                <ul>
                  <NotificationItem value='No new notification for now' />
                </ul>
              )}
            </div>
            <button
              style={{
                color: '#3a3a3a',
                fontWeight: 'bold',
                background: 'none',
                border: 'none',
                fontSize: '10px',
                position: 'absolute',
                right: '2px',
                top: '2px',
                cursor: 'pointer',
              }}
              aria-label='Close'
              onClick={() => console.log('Close button has been clicked')}
            >
              <img src={closeIcon} alt='closeIcon' width='20px' />
            </button>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

const opacityAnimation = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounceAnimation = {
  '0%': { transform: 'translateY(0px)' },
  '33%': { transform: 'translateY(-5px)' },
  '66%': { transform: 'translateY(5px)' },
  '100%': { transform: 'translateY(0px)' },
};

const styles = StyleSheet.create({
  Notifications: {
    backgroundColor: 'white',

    border: '3px dashed rgb(242, 54, 85)',
    padding: '10px',
    position: 'absolute',
    right: '1rem',
    top: '2.5rem',
    left: '60%',
    fontSize: '18px',
    padding: '20px',
    '@media (max-width: 900px)': {
      display: 'block',
      top: '0',
      right: '0',
      left: '0',
      bottom: '0',
      border: 'none',
      fontSize: '20px',
    },
  },
  "[data-priority='default']": {
    color: 'blue',
  },
  "[data-priority='urgent']": {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
    ':hover': {
      cursor: 'pointer',
      animationName: [opacityAnimation, bounceAnimation],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: true,
  listNotifications: [],
};

export default Notifications;

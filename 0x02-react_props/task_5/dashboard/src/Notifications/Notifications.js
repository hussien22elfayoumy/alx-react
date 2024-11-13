import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({
  displayDrawer = true,
  listNotifications = [],
}) {
  return (
    <>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div
          className='Notifications'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            {listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul>
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                    />
                  ))}

                  {/* <NotificationItem
                    type='default'
                    value='New course available'
                  />
                  <NotificationItem
                    type='urgent'
                    value='New resume available'
                  />
                  <NotificationItem
                    type='urgent'
                    html={getLatestNotification()}
                  /> */}
                </ul>
              </>
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
            onClick={console.log('Close button has been clicked')}
          >
            <img src={closeIcon} alt='closeIcon' width='20px' />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

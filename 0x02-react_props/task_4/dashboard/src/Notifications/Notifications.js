import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

export default function Notifications({ displayDrawer = false }) {
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
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type='default' value='New course available' />
              <NotificationItem type='urgent' value='New resume available' />
              <NotificationItem type='urgent' html={getLatestNotification()} />
            </ul>
          </div>
          <button aria-label='close' style={{ alignSelf: 'start' }}>
            <img src={closeIcon} alt='cloe icon' />
          </button>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

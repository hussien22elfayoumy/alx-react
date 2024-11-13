import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications() {
  return (
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
  );
}

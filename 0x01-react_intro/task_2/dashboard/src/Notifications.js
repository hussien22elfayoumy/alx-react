import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';

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
          <li data->New course available</li>
          <li>New resume available</li>
          <li>{getLatestNotification()}</li>
        </ul>
      </div>
      <button aria-label='close'>x</button>
    </div>
  );
}

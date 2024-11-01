import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';

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
          <li data-priority='default'>New course available</li>
          <li data-priority='urgent'>New resume available</li>
          <li
            data-priority='urgent'
            dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          ></li>
        </ul>
      </div>
      <button aria-label='close' style={{ alignSelf: 'start' }}>
        <img src={closeIcon} alt='cloe icon' />
      </button>
    </div>
  );
}

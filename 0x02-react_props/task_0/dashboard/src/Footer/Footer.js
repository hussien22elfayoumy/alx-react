import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </div>
  );
}

import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';

export default function Footer() {
  return (
    <div>
      Copyright {getFullYear()} - {getFooterCopy(true)}
    </div>
  );
}
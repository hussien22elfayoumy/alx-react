import React from 'react';
import image from '../assets/logo.jpg';

import './Header.css';
export default function Header() {
  return (
    <div className='header'>
      <img src={image} alt='logo' />
      <h1>School dashboard</h1>
    </div>
  );
}

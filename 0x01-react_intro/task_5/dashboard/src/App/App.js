import React from 'react';
import image from '../assets/logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={image} alt='logo' />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>email: </label>
          <input type='email' id='email' />

          <label htmlFor='password'>password: </label>
          <input type='password' id='password' />

          <button>OK</button>
        </form>
      </div>

      <div className='App-footer'>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;

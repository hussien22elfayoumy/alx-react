import React from 'react';
import './Login.css';
export default function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor='email'>email: </label>
        <input type='email' id='email' />

        <label htmlFor='password'>password: </label>
        <input type='password' id='password' />

        <button>OK</button>
      </form>
    </div>
  );
}

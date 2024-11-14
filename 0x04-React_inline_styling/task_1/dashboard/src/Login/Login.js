import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor='email'>email: </label>
        <input className={css(styles.input)} type='email' id='email' />

        <label htmlFor='password'>password: </label>
        <input className={css(styles.input)} type='password' id='password' />

        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: '10px',
  },
});

import React from 'react';
import { css, StyleSheet } from 'aphrodite';

export default function Login() {
  return (
    <div>
      <p>Login to access the full dashboard</p>
      <form className={css(styles.form)}>
        <div>
          <label htmlFor='email'>email: </label>
          <input className={css(styles.input)} type='email' id='email' />
        </div>

        <div>
          <label htmlFor='password'>password: </label>
          <input className={css(styles.input)} type='password' id='password' />
        </div>

        <button>OK</button>
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  input: {
    margin: '10px',
  },
});

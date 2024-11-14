import React from 'react';
import image from '../assets/logo.jpg';
import { css, StyleSheet } from 'aphrodite';

export default function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={image} alt='logo' className={css(styles.img)} />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottom: '2px solid rgb(242, 54, 85)',
    display: 'flex',
    alignItems: 'center',
  },
  h1: {
    color: 'rgb(242, 54, 85)',
  },
  img: {
    width: '200px',
  },
});

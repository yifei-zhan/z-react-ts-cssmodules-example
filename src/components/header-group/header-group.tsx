import React from 'react';
import styles from './header-group.module.less'

export default function Header() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['title']}>Welcome to the world of CSSModules</div>
      <div className="logo">CHECK24</div>
    </div>
  )
}
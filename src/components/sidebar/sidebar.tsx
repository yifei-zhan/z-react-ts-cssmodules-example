import React from 'react';
import styles from './sidebar.module.less';

export default function SideBar() {
  const date = new Date();

  return (
    <div className={styles['wrapper']}>
      <header className={styles['header']}>Sidebar Title</header>
      <div className={`${styles['logo-group']} logo`}>CHECK24</div>
      <ul>
        <li>Item A</li>
        <li>Item B</li>
        <li>Item C</li>
      </ul>
      <div className={styles['footer']}>
        <div>@CHECK24</div>
        <div className={styles['timer']}>
          {date.getFullYear()}-{date.getMonth()}
        </div>
      </div>
    </div>
  )
}
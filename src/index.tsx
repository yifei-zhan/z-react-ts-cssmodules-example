import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './global.less';
import SideBar from './components/sidebar/sidebar';
import styles from './index.module.less';
import Header from './components/header-group/header-group';
import { Blog } from './components/blog/blog';

ReactDOM.render(
  <main>
    <header className={styles['header']}>
      <Header/>
    </header>
    <main className={styles['main']}>
      <div className={styles['main__siderbar']}>
        <SideBar />
      </div>
      <div className={styles['main__content']}>
        <Blog />
      </div>
    </main>
  </main>
  ,
  document.getElementById('root')
);
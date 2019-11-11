import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './theme.less';
import { InsuranceList } from './components/insurance-list/insurance-list';
import SideBar from './components/sidebar/sidebar';
import styles from './index.module.less';
import Header from './components/header-group/header-group';

ReactDOM.render(
  <main>
    <header className={styles['header']}>
      <Header/>
    </header>
    <main className={styles['content']}>
      <SideBar />
      <InsuranceList />
    </main>
  </main>
  ,
  document.getElementById('root')
);
import React from 'react';

import { AppBar, Toolbar, CssBaseline, Typography, List, ListItem, Drawer } from '@material-ui/core';
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar className={styles.navbar} >
      <CssBaseline />
        <Toolbar className={styles.navTool}>
          <img className={styles.navIcon} src="/assets/search-big.svg" alt="" />
          <img className={styles.navIcon} src="/assets/notification.svg" alt="" />
          <img className={styles.navIcon} src="/assets/logout-2.svg" alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

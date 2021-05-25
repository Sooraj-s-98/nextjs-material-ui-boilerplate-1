import React from 'react';

import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';
import LogOut from '@/assets/logout.svg';

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar style={{ width: 'calc(100% - 50px)', backgroundColor: 'white' }}>
        <Toolbar style={{ marginLeft: 'auto' }}>
          <img src={LogOut} alt="Search" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

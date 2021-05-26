import React from 'react';

import { AppBar, Toolbar, CssBaseline } from '@material-ui/core';

function Navbar() {
  return (
    <div>
      <CssBaseline />
      <AppBar style={{ width: 'calc(100% - 50px)', backgroundColor: 'red' }}>
        <Toolbar style={{ marginLeft: 'auto', backgroundColor: 'red' }}>
          <img className="icon-color" src="/assets/logout-1.svg" alt="" />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;

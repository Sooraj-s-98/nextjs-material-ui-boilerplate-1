import React from 'react'
import { Drawer, ListItem, List, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    nav: {
      background: "black",
      width: "4%"
    },
    inbox: {
      background: '#F4F7FE',
      width: "21%",
      marginLeft: "4%"
    }
  });

function Sidebar() {
    const classes = useStyles();
    return (
        <div>
            <CssBaseline />
            <Drawer classes={{ paper: classes.nav }} variant="permanent" anchor="left">
                    <List>
                        <ListItem style={{marginTop: '10%', marginBottom: '100%', paddingBottom: '100%'}}>
                            <img  src="/assets/Logo.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{marginBottom: '10%', paddingBottom: '30%'}}>
                            <img style={{ maxWidth: "150%", position: 'relative', left: '-23px' }} src="/assets/house.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{marginBottom: '10%', paddingBottom: '30%'}}>
                            <img style={{maxWidth: "60%"}} src="/assets/folder.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{marginBottom: '10%', paddingBottom: '30%'}}>
                            <img style={{maxWidth: "60%"}} src="/assets/pie-chart.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{marginBottom: '10%', paddingBottom: '30%'}}>
                            <img style={{maxWidth: "60%"}} src="/assets/settings-1.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{marginBottom: '10%', paddingBottom: '30%'}}>
                            <img style={{maxWidth: "60%"}} src="/assets/settings.svg" alt="Logo" />
                        </ListItem>
                        <ListItem style={{top: '60%'}}>
                            <img style={{maxWidth: "60%"}} src="/assets/Group-25.svg" alt="Logo" />
                        </ListItem>
                    </List>
            </Drawer>
            <Drawer classes={{ paper: classes.inbox }} variant="permanent">
                <List>
                    <ListItem>
                        <img style={{width: 'auto', marginLeft: 'auto', marginRight: 'auto'}} src="/assets/EzRY.svg" alt="" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    )
}

export default Sidebar

import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import './performer-apply.css';
import { Link } from 'react-router-dom';
import { apiArtistApply } from '../remote/artist-apply';
import {store} from '../../Store';
import { apiGetArtist } from '../remote/get-artist';



const drawerWidth = 240;



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            backgroundColor: '#A61C3C',

        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#F68E5F'
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            // backgroundColor: '#000',
            padding: theme.spacing(3),
        },
    }),
);

export default function PerformerApplyComponent(props: any) {
    const classes = useStyles();
    let [details, setDetails] = useState("");
    const appState = store.getState();
    let currentUser = appState.userState.currentUser;
    let applied = false;

   

  useEffect(() => {
    if(currentUser === null){
      props.history.push("/")
  } 
  })
    

    const submitApplication = async () => {
        let data = await apiGetArtist();
        let artists:any = data;
        console.log(artists);
        for (let index = 0; index < artists.length; index++) {
            if(artists[index]["user"]["id"] === currentUser["id"]){
                console.log("can't apply again");
                applied = true;
                break;
            }
            
        }
        if(applied === false){
            await apiArtistApply(currentUser, details);
            props.history.push("performer");

        }
        if(applied === true){
            console.log("Already");
        }

    }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Performer Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    {/* <Link to='/performer'>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link> */}

                    {/* <Link to="/per-inbox">
                        <ListItem button key={'Inbox'}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Inbox'} />
                        </ListItem>
                    </Link> */}

                    <Link to="/per-status">
                        <ListItem button key={'Performer Applications'}>
                            <ListItemIcon><ContactMailIcon /></ListItemIcon>
                            <ListItemText primary={'Performer Application Status'} />
                        </ListItem>
                    </Link>

                    <Link to="/per-apply">
                        <ListItem button key={'Performer Applications'}>
                            <ListItemIcon><LibraryAddCheckIcon/></ListItemIcon>
                            <ListItemText primary={'Apply'} />
                        </ListItem>
                    </Link>

                </List>
                <Divider />
                <ListItem button key={'Logout'}>
                    <ListItemIcon><ExitToAppIcon /></ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
                {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
            </Drawer>
            <main className={classes.content}>
            <div id="body">
                <div className="signup">
                    <div>
                        <h1>Performer Application</h1>
                        Details:
                        <textarea 
                        className="txtb"
                        onChange={(e) => setDetails(e.target.value)}
                        ></textarea>
                        <input 
                        type="submit" 
                        value="Apply" 
                        className="signup-btn"
                        onClick={submitApplication}
                         />
                    </div>
                </div>
            </div>
            </main>
        </div>
    );
}
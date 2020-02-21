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
import MailIcon from '@material-ui/icons/Mail';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '@material-ui/icons/Email'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import './manager-inbox.css';
import { apiGetMessages } from "../remote/get-messages";

import {store} from '../../Store';



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

export default function ManagerInboxComponent(props:any) {
  const classes = useStyles();
  let data: any = "";
  let sortedMessages = [];
  let [messages, setMessages] = useState([]);
  let count = 0;
  const appState = store.getState();
  let currentUser = appState.userState.currentUser;

  // let formData:any = ""
  const getMessages = async () => {
    if (messages.length === 0) {
      data = await apiGetMessages();
      setMessages(data)
    }
    // formData = messages[0]["message"]
    console.log(messages);
    return messages;

  }

  useEffect(() => {
    if(currentUser === null){
      props.history.push("/")
  } else if(currentUser["role"] !== "MANAGER"){
    props.history.push("/")

  }
    getMessages();
  })

  const logout = () => {
    props.history.push("/")
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Manager Inbox
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
          {/* <Link to='/manager'>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link> */}

          <Link to="/man-inbox">
            <ListItem button key={'Inbox'}>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary={'Inbox'} />
            </ListItem>
          </Link>

          <Link to="/man-vendor">
            <ListItem button key={'Vendor Applications'}>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary={'Vendor Applications'} />
            </ListItem>
          </Link>

          <Link to="/man-performer">
            <ListItem button key={'Performer Applications'}>
              <ListItemIcon><ContactMailIcon /></ListItemIcon>
              <ListItemText primary={'Performer Applications'} />
            </ListItem>
          </Link>

        </List>
        <Divider />
        <ListItem 
        onClick={logout}
        button key={'Logout'}>
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
      <main id="main" className={classes.content}>
        <div className={classes.toolbar} />
        {(messages.length !== 0) ?
          <div>
            <h1>Total Messages: {messages.length}</h1>
            {
            // messages.sorted(reverse=true)
            messages.map((m: any) => {
              return <Card className='card cardInfo' key={count++}>
                <CardContent>
                  <EmailIcon />
                  <Typography component="h5" variant="h5">
                    From: {m["sender"]["firstName"] + " " + m["sender"]["lastName"] }
                 </Typography>
                  <Typography component="h5" variant="h5">
                    Message: {m["message"]}
                 </Typography>
                 <Typography variant="subtitle1">
                    Sent: {String(new Date(m["sentTime"]))}
                 </Typography>
                </CardContent>
              </Card>
            })}

          </div>
          : <h1>You have no Messages</h1>}
      </main>
    </div>
  );
}
import React from 'react';
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
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import HomeIcon from '@material-ui/icons/Home';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EmailIcon from '@material-ui/icons/Email'
import FolderOpenIcon from '@material-ui/icons/FolderOpen';
import { Link } from 'react-router-dom';


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

export default function PerformerInboxComponent() {
    const classes = useStyles();

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
                    <Link to='/performer'>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>

                    <Link to="/per-inbox">
                        <ListItem button key={'Inbox'}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Inbox'} />
                        </ListItem>
                    </Link>

                    <Link to="/per-status">
                        <ListItem button key={'Vendor Applications'}>
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
                <div className={classes.toolbar} />
                <h1>Unread Messages: 2</h1>
       <Card className='card'>
       <CardContent>
          <EmailIcon/>
          <Typography component="h5" variant="h5">
            Subject: Ticket Price
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            From: James Smith
          </Typography>
        </CardContent>
       </Card>
       <Divider/>
       <Card className='card'>
       <CardContent>
          <FolderOpenIcon/>
          <Typography component="h5" variant="h5">
            Subject: Venue
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            From: Harold Wilson
          </Typography>
        </CardContent>
       </Card>
       <Card className='card'>
       <CardContent>
          <FolderOpenIcon/>
          <Typography component="h5" variant="h5">
            Subject: Merchandise
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            From: Jenny Taft
          </Typography>
        </CardContent>
       </Card>
       <Card className='card'>
       <CardContent>
          <EmailIcon/>
          <Typography component="h5" variant="h5">
            Subject: Performers
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            From: Sally Wilson
          </Typography>
        </CardContent>
       </Card>
       <Card className='card'>
       <CardContent>
          <FolderOpenIcon/>
          <Typography component="h5" variant="h5">
            Subject: Food & Beverages
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            From: Danny Brown
          </Typography>
        </CardContent>
       </Card>
            </main>
        </div>
    );
}
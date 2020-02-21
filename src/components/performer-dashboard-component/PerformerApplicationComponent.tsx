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
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import "./performer-apply.css";
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

export default function PerformerApplicationComponent(props:any) {
    const classes = useStyles();
    const appState = store.getState();
    let currentUser = appState.userState.currentUser;
    let artist:any
    let data:any;
    let count = 0;
    let [artists, setArtists] = useState([]);
    

    const getArtists = async () => {
        if (artists.length === 0) {
          data = await apiGetArtist();
          setArtists(data)
        }
        // formData = messages[0]["message"]
        console.log(artists);
        return artists;
      }

    useEffect(() => {
          if(currentUser === null){
              props.history.push("/")
          }
          getArtists();
    });

    const logout = () => {
        props.history.push("/")
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
                <h1>Performer Application</h1>
                {(artists.length !== 0) ? 
                
                    artists.map((arr) => {
                        if(arr["user"]["id"] === currentUser["id"]){
                            return  <Card className="card" key={count++}>
                            <CardContent>
                                <Typography className="ticket-info" color="textSecondary" gutterBottom>
                                    Artist Name: {arr["user"]["username"]}
                                </Typography>
                                <Typography className="quantity" variant="h5" component="h2">
                                    Stage: {arr["stage"]}
                                </Typography>
                                <Typography className="quantity" variant="h5" component="h2">
                                    Set Time: {arr["time"]}
                                </Typography>
                                <Typography className="shipping" color="textSecondary">
                                    Performer Status: {arr["status"]}
                                </Typography>
                                {/* <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                </Typography> */}
                            </CardContent>
                        </Card>
                        }
                    })
                : <h1>You have not applied yet!</h1>}
               
            </main>
        </div>
    );
}
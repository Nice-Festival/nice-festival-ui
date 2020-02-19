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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailable from '@material-ui/icons/EventAvailable';
import AddBoxIcon from '@material-ui/icons/AddBox';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { Container } from '@material-ui/core';
import "./customer.css";
import FabComponent from '../fab/FabComponent';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



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



export default function CustomerDashboardComponent() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Customer Dashboard
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
                    <Link to='/customer'>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link>

                    <Link to="/cust-inbox">
                        <ListItem button key={'Inbox'}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Inbox'} />
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
                <FabComponent />
                <Container id="mainContent" maxWidth="md">
                    <Card className="cardContent">
                        <CardContent>
                            <Typography className="ticket-info" color="textSecondary" gutterBottom>
                                Customer Ticket Info
                            </Typography>
                            <Typography className="quantity" variant="h5" component="h2">
                                Quantity: 0
                            </Typography>
                            <Typography className="shipping" color="textSecondary">
                                Shipping Status: No Ticket Purchased
                            </Typography>
                            {/* <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                            </Typography> */}
                        </CardContent>
                    </Card>
                    <Divider/>
                    <p id="locationTitle">Festival Location</p>
                    <Divider/>
                    <p>Venue Name: City Park</p>
                    <p>Address: 1 Palm Dr, New Orleans, LA 70124</p>
                    <LoadScript id="script-loader" googleMapsApiKey={process.env.REACT_APP_API_KEY}>
                        <GoogleMap id='example-map'
                            mapContainerStyle={{
                                height: "400px",
                                width: "800px"
                            }}
                            zoom={17}
                            center={{
                                lat: 29.9933929,
                                lng: -90.1003796
                            }}
                        >
                        </GoogleMap>
                    </LoadScript>
                </Container>
            </main>
        </div>
    );
}
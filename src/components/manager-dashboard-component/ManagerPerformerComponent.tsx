import React, { useState, useEffect } from 'react';
import { createStyles, Theme, makeStyles, useTheme, ThemeProvider } from '@material-ui/core/styles';
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
import { createMuiTheme } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import { Card, CardContent, FormControl, InputLabel, Select, MenuItem, FormHelperText, ButtonGroup, Button, Grid } from '@material-ui/core';
import { apiGetArtist } from '../remote/get-artist';
import { apiManageArtist } from '../remote/manage-artist';
import {store} from '../../Store';



const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1CC676'
    },
    secondary: {
      main: '#A61C3C',
    },
  },
});

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
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

export default function ManagerPerformerListComponent(props:any) {
  const classes = useStyles();
  let data: any = "";
  let [artists, setArtists] = useState([]);
  let [stage, setStage] = useState("");
  let [time, setTime] = useState("");
  let [day, setDay] = useState("");
  let [status, setStatus] = useState("");
  let count = 0;

  const manageArtist = async () => {
    await apiManageArtist(artists, stage, time, day, status)
  }

  const submitApprove = (artist:any) => {
    setStatus("APPROVED");
    console.log(artist);
    console.log(stage);
    console.log(time);
    console.log(day);
    console.log(status);

    
    apiManageArtist(artist, stage, time, day, "APPROVED")
    getArtists();
  }

  const submitDeny = (artist:any) => {
    console.log(artist)
    setStatus("DENIED");
    manageArtist();
    getArtists();
  }

  const getArtists = async () => {
    if (artists.length === 0) {
      data = await apiGetArtist();
      setArtists(data);
      console.log(data);
    }
  }

  useEffect(() => {
    getArtists();
  })
  const appState = store.getState();
  let currentUser = appState.userState.currentUser;

  useEffect(() => {
    if(currentUser === null){
      props.history.push("/")
  } else if(currentUser["role"] !== "MANAGER"){
    props.history.push("/")

  }
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
            Manager Performer
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
        <ListItemIcon><ExitToAppIcon/></ListItemIcon>
        <ListItemText primary="Logout"/>
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
        {(artists.length !== 0) ?
          <div>
            <h1>Performer stuff</h1>
            {artists.map((m: any) => {
              return <Card className="card" key={count++}>
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item xs>
                      <Typography>
                        Name: {m["user"]["firstName"] + " " + m["user"]["lastName"]}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <Typography>
                        Details: {m["details"]}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <FormControl required variant="filled" className={classes.formControl}>
                        <InputLabel id="stage-name">Stage</InputLabel>
                        <Select
                          labelId="stage-name"
                          id="stage-name-required"
                          onChange={(e:any) => setStage(e.target.value)}
                        >
                          <MenuItem value={'AWAITING'}>Awaiting</MenuItem>
                          <MenuItem value={'SONORA'}>Sonora</MenuItem>
                          <MenuItem value={'YUMA'}>Yuma</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs>
                      <FormControl required variant="filled" className={classes.formControl}>
                        <InputLabel id="set-time">Set Time</InputLabel>
                        <Select
                          labelId="set-time"
                          id="set-time-required"
                          onChange={(e:any) => setTime(e.target.value)}
                        >
                          <MenuItem value={'NULL'}>Denied</MenuItem>
                          <MenuItem value={'TWO'}>2:00</MenuItem>
                          <MenuItem value={'TWO_THIRTY'}>2:30</MenuItem>
                          <MenuItem value={'THREE'}>3:00</MenuItem>
                          <MenuItem value={'THREE_THIRTY'}>3:30</MenuItem>
                          <MenuItem value={'FOUR'}>4:00</MenuItem>
                          <MenuItem value={'FOUR_THIRTY'}>4:30</MenuItem>
                          <MenuItem value={'FIVE'}>5:00</MenuItem>
                          <MenuItem value={'FIVE_THIRTY'}>5:30</MenuItem>
                          <MenuItem value={'SIX'}>6:00</MenuItem>
                          <MenuItem value={'SIX_THIRTY'}>6:30</MenuItem>
                          <MenuItem value={'SEVEN'}>7:00</MenuItem>
                          <MenuItem value={'SEVEN_THIRTY'}>7:30</MenuItem>
                          <MenuItem value={'EIGHT'}>8:00</MenuItem>
                          <MenuItem value={'EIGHT_THIRTY'}>8:30</MenuItem>
                          <MenuItem value={'NINE'}>9:00</MenuItem>
                          <MenuItem value={'NINE_THIRTY'}>9:30</MenuItem>
                          <MenuItem value={'TEN'}>10:00</MenuItem>
                          <MenuItem value={'TEN_THIRTY'}>10:30</MenuItem>
                          <MenuItem value={'ELEVEN'}>11:00</MenuItem>
                          <MenuItem value={'ELEVEN_THIRTY'}>11:30</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs>
                      <FormControl required variant="filled" className={classes.formControl}>
                        <InputLabel id="set-day">Set Day</InputLabel>
                        <Select
                          labelId="set-day"
                          id="set-day-required"
                        onChange={(e:any) => setDay(e.target.value)}
                        >
                          <MenuItem value={'NULL'}>Denied</MenuItem>
                          <MenuItem value={'FRIDAY'}>Friday</MenuItem>
                          <MenuItem value={'SATURDAY'}>Saturday</MenuItem>
                          <MenuItem value={'SUNDAY'}>Sunday</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs>
                      <ThemeProvider theme={theme}>
                        <ButtonGroup variant="contained" aria-label="outlined primary button group">
                          <Button 
                          id='approve' 
                          color="primary" 
                          onClick={() => submitApprove(m)}
                          >Approve</Button>
                          <Button 
                          id='deny' 
                          color="secondary"
                          onClick={() => submitDeny(m)}
                          >Deny</Button>
                        </ButtonGroup>
                      </ThemeProvider>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            })}
          </div>
          : <h1>No Artist Applications</h1>}
      </main>
    </div>
  );
}
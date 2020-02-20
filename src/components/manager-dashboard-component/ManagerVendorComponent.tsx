import React from 'react';
import { createStyles, Theme, makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, FormControl, InputLabel, Select, MenuItem, FormHelperText, ButtonGroup } from '@material-ui/core';


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

export default function ManagerVendorComponent() {
  const classes = useStyles();

  // const handleChange = () => {
  //   setVendorTent(event.target.value);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Manager Vendor List
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
        <h1>Vendor stuff</h1>
        <Card className="card">
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs>
                <Typography>
                  Company Name goes here
            </Typography>
              </Grid>
              <Grid item xs>
                <Typography>
                  Vendor Type goes here
            </Typography>
              </Grid>
              <Grid item xs>
                <Typography>
                  Details go here
            </Typography>
              </Grid>
              <Grid item xs>
                <FormControl required variant="filled" className={classes.formControl}>
                  <InputLabel id="tent-name">Tent</InputLabel>
                  <Select
                    labelId="tent-name"
                    id="tent-name-required"
                  /*value={age}
                  onChange={handleChange}
                  className={classes.selectEmpty}*/
                  >
                    <MenuItem value={'AWAITING'}>Awaiting</MenuItem>
                    <MenuItem value={'MOHAVE_TENT'}>Mohave</MenuItem>
                    <MenuItem value={'SAHARA_TENT'}>Sahara</MenuItem>
                    <MenuItem value={'OOGA_BOOGA_TENT'}>Ooga Booga</MenuItem>
                  </Select>
                  <FormHelperText>Required</FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs>
                <ThemeProvider theme={theme}>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button id='approve' color="primary">Approve</Button>
                    <Button id='deny' color="secondary">Deny</Button>
                  </ButtonGroup>
                </ThemeProvider>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
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
import "./vendor-apply.css";
import { Link } from 'react-router-dom';
import { apiVendorApply } from '../remote/vendor-apply';
import { apiGetVendor } from '../remote/get-vendors';
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

export default function VendorApplyComponent(props:any) {
    const classes = useStyles();
    let [details, setDetails] = useState("");
    let [type, setType] = useState("");
    let [name, setName] = useState("");
    const appState = store.getState();
    let currentUser = appState.userState.currentUser;
    let applied = false;

    useEffect(() => {
          if(type.length < 1){
            setType("FOOD");
          }
          if(currentUser === null){
              props.history.push("/")
          }
    });
    const submitApplication = async () => {
        let data = await apiGetVendor();
        let vendor:any = data;
        console.log(type);
        console.log(type);
        console.log(vendor);
        for (let index = 0; index < vendor.length; index++) {
            if(vendor[index]["user"]["id"] === currentUser["id"]){
                console.log("can't apply again");
                applied = true;
                break;
            }
            
        }
        if(applied === false){
            await apiVendorApply(currentUser, name, details, type)
            props.history.push("/vendor")
            applied = true;
        }
        else if(applied === true){
            console.log(applied);
            // props.history.push("/vendor")
            console.log("Already applied!");
        }
    }

    const logout = () => {
        props.history.push("/")
      }
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Vendor Dashboard
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
                {/* <Link to='/vendor'>
                        <ListItem button key={'Home'}>
                            <ListItemIcon><HomeIcon /></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </Link> */}
{/* 
                    <Link to="/ven-inbox">
                        <ListItem button key={'Inbox'}>
                            <ListItemIcon><InboxIcon /></ListItemIcon>
                            <ListItemText primary={'Inbox'} />
                        </ListItem>
                    </Link> */}

                    <Link to="/ven-status">
                        <ListItem button key={'Vendor Applications'}>
                            <ListItemIcon><ContactMailIcon /></ListItemIcon>
                            <ListItemText primary={'Vendor Application Status'} />
                        </ListItem>
                    </Link>

                    <Link to="/ven-apply">
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div id="body">
                <div className="signup">
                    <div>
                        <h1>Vendor Application</h1>
                        Company Name:
                        <input 
                        type="text" 
                        placeholder="Crazy Chicken" 
                        className="txtb" 
                        onChange={(e) => setName(e.target.value)}
                        />
                        Company Product:
                        <select 
                        className="txtb"
                        onChange={(e) => setType(e.target.value)}
                        >
                            <option value="FOOD">Food</option>
                            <option value="BEVERAGES">Beverages</option>
                            <option value="MERCHANDISE">Merchandise</option>
                        </select>
                        More Details:
                        <textarea 
                        className="txtb"
                        onChange={(e) => setDetails(e.target.value)}
                        ></textarea>
                        <input 
                        type="button" 
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
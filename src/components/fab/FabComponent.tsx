import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EmailRounded from '@material-ui/icons/EmailRounded';
import Fab from '@material-ui/core/Fab';
import "./fab.css";
import {store} from '../../Store';
import {apiSendMessage} from "../remote/send-message";
require('dotenv').config({ path: '../../../process.env' })



export default function FabComponent(props:any) {
  const [open, setOpen] = React.useState(false);
  const appState = store.getState();
  let currentUser = appState.userState.currentUser;
  let [message, setMessage] = useState("");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendMessage = async () => {
      await apiSendMessage(currentUser, message)
      handleClose();
  }

  return (
    <div>
      <Fab id="fab" aria-label="add" onClick={handleClickOpen}>
                    <EmailRounded id="icon" />
    </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Send A Message to the Manager</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
           Subject
          </DialogContentText> */}
      
           <TextField
            margin="dense"
            id="message"
            label="Message"
            type="text"
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendMessage} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
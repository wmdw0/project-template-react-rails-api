import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Messages.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import { Reviews } from '../Reviews/Reviews';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
// import db from "./firebase";
// import FlipMove from "react-flip-move";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 3.5,
  borderRadius: '20px'
};

function Messages({ user, setUser, onAddTweet }) {
  const [open, setOpen] = React.useState(false);
  const [tweets, setTweets] = useState([]);
  const [users, setUsers] = useState(['']);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      fetch("/users")
      .then((r) => r.json())
      .then(setUsers);
    }, []);



  return (
    <div className="feed" style={{maxWidth: '45%',
    minWidth: '45%'}}>
      <div className="feed__header">
        <div style={{display: 'flex'}}>
        <h2>Messages</h2>
        <Button style={{marginLeft: '57.5%'}}><SettingsOutlinedIcon style={{color: 'black'}} /></Button>
        <Button onClick={setOpen}><EmailOutlinedIcon style={{color: 'black'}}/></Button>
        </div>
      </div>
      {/* <div className="feed__header">
        
        <h2>Messages</h2>
      </div> */}

    <div style={{minWidth: '100%', display: 'flex'}}>
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      <h2 style={{marginLeft: '15%', marginTop: '10%', textAlign: 'center'}}>
        Send a message, get <br/> a message
        </h2>
      
      <p style={{marginLeft: '15%', marginBottom: '10%', textAlign: 'center'}}>
        Direct Messages are private conversations <br/> between you and other people on Twitter.  <br/> Share Tweets, media, and more!
      </p>
      <Button onClick={setOpen} style={{ backgroundColor: '#50b7f5', color: 'white', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '33%'}}>Start a conversation</Button>
      
    </Box>
    <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                 >
                    <Fade in={open}>
                    <Box sx={style}>
                    <div style={{display: 'flex', textAlign: 'center', }}>
          <Typography style={{marginLeft: '40%', textAlign: 'center', marginBottom: '0px'}} id="modal-modal-title" variant="h6" component="h2">
            Messages
          </Typography>
          <Button style={{marginLeft: '27.5%', marginBottom: '5%', marginTop: '0%', color: 'black', height: '5%', width: '5%'}} onClick={handleClose}><CloseIcon/></Button>
          </div>
                    
                    {/* <Button onClick={handleClose} sx={{ width: '5%', marginTop: '-2%', marginLeft: '90%', mr: 1, backgroundColor:'#ffffff', color: '#1976d2' }} variant="extended">
                
                            <CloseIcon sx={{ mr: 1, marginLeft: '10px' }} />
                                
                        </Button> */}
                        <div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', paddingTop: '0px', borderRadius: '20px',}}>
                        <Paper
      component="form"
      sx={{ p: '2px 0px', display: 'flex', alignItems: 'center', width: '100%', marginTop: '0px', borderRadius: '50px', marginBottom: '5%', }}
    >
     
      <InputBase
        sx={{ ml: 3, flex: 1 }}
        placeholder="Search for a user"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      
    </Paper>

    
    {users.map((user) => (
        <div
        style={{marginLeft: '5%',  }} 
        key={user.id}
            user={user}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                <div style={{maxWidth: '50px'}}>
                <img style={{height: '50px', width: '50px', borderRadius: '100px', objectFit: 'cover'}} src={user.avatar}/>
                </div>
                <div style={{ maxWidth: '70%', marginLeft: '15%', marginTop: '-8%'}}>
                <p style={{ color: 'black', fontSize: '16px',
    fontWeight: '500', marginTop: '-10px'}}>{user.displayName}</p>
            <p style={{fontSize: '12px', marginTop: '-10px', marginBottom: '50px'}}>@{user.username}</p>
            </div>
            <div style={{ maxWidth: '10%', marginLeft: '70%', marginTop: '-27.5%', marginBottom: '15%', maxWidth: '70%', marginTop: '-25.5%'}}>
            <Button style={{marginTop: '30%', borderRadius: '10px', fontSize: '12px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', padding: '10px', paddingLeft: '40px', paddingRight: '40px'}}>Chat</Button>
            </div>
           
            </div>
            </div>
        ))}
        
        </div>
  
                    </Box>
                    </Fade>
                </Modal>
        
      </div>

     
    </div>
  );
}

export default Messages;
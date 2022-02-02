import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Profile.css";
import Trending from "./Trending";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import GroupIcon from '@mui/icons-material/Group';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 480,
  height: 580,
  borderRadius: '20px',
  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)',
  bgcolor: 'background.paper',
  

  boxShadow: 32,
  p: 5,
};

function Profile({user, setUser}) {
  const [value, setValue] = React.useState(0);
  const [users, setUsers] = useState(['']);
  const [tweets, setTweets] = useState([]);
  const [trendings, setTrendings] = useState(['']);
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([1]);
  const [alignment, setAlignment] = useState('web');

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("/trendings")
    .then((r) => r.json())
    .then(setTrendings);
  }, []);

  useEffect(() => {
    fetch("/tweets")
    .then((r) => r.json())
    .then(setTweets);
  }, []);

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(setUsers);
  }, []);


const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <div className="feed">
     <div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', height: '350px', border: '1px'}}>
     
      <img style={{minWidth: '100%', minHeight: '50%', borderRadius: '0px', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1548217395-6c6095abb49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
      <div style={{marginTop: '-7%'}}>
      <img onClick={handleOpen} style={{minWidth: '14%', minHeight: '12%', borderRadius: '40px', objectFit: 'cover', color: 'white', marginLeft: '20%', border: '2px solid white' }} src={user?.avatar}></img>
      <div style={{display: 'flex', flexDirection: 'row', marginTop: '-40px'}}>
      <Typography style={{fontSize: '20px',color: 'black', marginLeft: '35%', marginTop: '0px',}}>{user?.displayName}</Typography>
      <Typography style={{color: 'grey', marginLeft: '5px', marginTop: '8px', fontSize: '12px'}}>@{user?.username}</Typography>
      <Button style={{marginLeft: '120px', marginTop: '5px', fontSize: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 5%)', color: 'black'}}><Typography style={{fontSize: '10px'}}>Edit Profile</Typography></Button>
      </div>
      <div style={{display: 'flex', width: '50%', marginLeft: '25%', padding: '10px'}}>
      
      <Typography style={{color: 'black', marginLeft: '17%', marginTop: '-5px', fontSize: '14px', paddingBottom: '20px'}}>{user?.text}</Typography>
      </div>
      
      <Box sx={{ '& > :not(style)': { m: 1 }, marginTop: '-30px', marginLeft: '20%'  }}>
      <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{display: 'flex', textAlign: 'center', }}>
          <Typography style={{marginLeft: '40%', textAlign: 'center', marginBottom: '20px'}} id="modal-modal-title" variant="h6" component="h2">
            Followers
          </Typography>
          <Button style={{marginLeft: '27.5%', marginBottom: '10%', marginTop: '-5%', color: 'black', height: '5%', width: '5%'}} onClick={handleClose}><CloseIcon/></Button>
          </div>
        <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      style={{width: '100%', paddingBottom: '0px', marginBottom: '0px'}}
    >

      <ToggleButton style={{width: '50%', height: '40px', border: '0px transparent', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 10%)'}} value="web"><Typography style={{fontSize: '14px'}}>Followers</Typography></ToggleButton>
      <ToggleButton style={{width: '50%', height: '40px', border: '0px transparent', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}value="alt"><Typography style={{fontSize: '14px'}}>Following</Typography></ToggleButton>
      
    </ToggleButtonGroup>
    <div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', paddingTop: '20px'}}>
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
            <Button style={{marginTop: '12%', borderRadius: '10px', fontSize: '12px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', padding: '10px', paddingLeft: '20px', paddingRight: '20px'}}>Following</Button>
            </div>
           
            </div>
            </div>
        ))}
        
        </div>
          
        </Box>
      </Modal>
      
    </div>
      <Button onClick={handleOpen} style={{width: '140px', height: '30px', backgroundColor: 'white', fontSize: '12px', marginLeft: '25px', paddingBottom: '10px'}} variant="extended" size="small" color="white" aria-label="add">
        
        19 Followers
      </Button>
      <Button onClick={handleOpen} style={{width: '140px', height: '30px', backgroundColor: 'white', fontSize: '12px', paddingBottom: '10px'}} variant="extended" size="small" color="white" aria-label="add">
       
        19 Following
      </Button>
    </Box>
    
      </div>
    </div> 
    
    <Box style={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '-50px', }}>
      <Tabs value={value} onChange={handleChange} centered>
         <Tab style={{fontSize: '12px'}} label="Tweets" />
         <Tab style={{fontSize: '12px'}} label="Tweets & Replies" />
         <Tab style={{fontSize: '12px'}} label="Media" />
      </Tabs>
    </Box> 
    <div style={{ maxWidth: '500px', marginLeft: '30px', padding: '10px', borderRadius: '20px', marginTop: '-10px'}}>
        <div style={{minWidth: '600px',marginLeft: '-55px', padding: '10px',  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 1%)', borderRadius: '10px',}}>
        {tweets?.map((tweet) => (
            <div style={{marginLeft: '0px', paddingLeft: '20px', width: '550px',  marginBottom: '10px', borderRadius: '10px',}}>
          <Post
            key={tweet.id}
            tweet={tweet}
            username={tweet.username}
          />
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
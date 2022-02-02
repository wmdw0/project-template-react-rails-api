import React, { useEffect, useState } from "react";
import "./Notifications.css";
import Notification from "./Notification";
import SearchIcon from "@mui/icons-material/Search";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Notifications.css";
import TwitterIcon from "@mui/icons-material/Twitter";
// import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function Notifications({searchTerm, onSearchChange}) {
  const [notifications, setNotifications] = useState(['']);
    const [value, setValue] = React.useState(0);

  useEffect(() => {
    fetch("/notifications")
    .then((r) => r.json())
    .then(setNotifications);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
//  <div className="feed">
 <div className="feed" style={{maxWidth: '45%',
      minWidth: '45%'}}>
<div className="feed__header">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Notifications</h2>
        <Button><SettingsOutlinedIcon style={{color: 'black'}} /></Button>
      </div>
     </div>
      <Box style={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab style={{marginRight: '10%'}} label="All" />
        <Tab style={{marginLeft: '10%'}} label="Mentions" />
        
      </Tabs>
     </Box>
 
 

      <div className="notifications__Container">
        
        <Notification
        />
        
        
      </div>
    </div>
    
  );
}

export default Notifications;















// import React, { useState, useEffect } from "react";
// import TweetBox from "./TweetBox";
// import Post from "./Post";
// import "./Notifications.css";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import { Avatar, Button, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import Box from '@mui/material/Box';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import SettingsIcon from '@mui/icons-material/Settings';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import NorthEastIcon from '@mui/icons-material/NorthEast';

// import db from "./firebase";
// import FlipMove from "react-flip-move";

// function Notifications({notification}) {
//   const [value, setValue] = React.useState(0);
//   const [notifications, setNotifications] = useState(['']);
//   // const { id, image, message, time} = notification;

//   useEffect(() => {
//     fetch("/notifications")
//     .then((r) => r.json())
//     .then(setNotifications);
//   }, []);





  // return (
  //   // <div className="feed">
  //   <div className="feed">
  //     <div className="feed__header">
  //       <div style={{display: 'flex', justifyContent: 'space-between'}}>
  //       <h2>Notifications</h2>
  //       <Button><SettingsOutlinedIcon style={{color: 'black'}} /></Button>
  //       </div>
  //     </div>
  //     <Box style={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)' }}>
  //     <Tabs value={value} onChange={handleChange} centered>
  //       <Tab style={{marginRight: '10%'}} label="All" />
  //       <Tab style={{marginLeft: '10%'}} label="Mentions" />
        {/* <Tab label="COVID-19" />
        <Tab label="News" />
        <Tab label="Sports" />
        <Tab label="Entertainment" /> */}
    //   </Tabs>
    // </Box>
    // {/* {notifications.map((notification) => ( */}
       
        
    // <div style={{minWidth: '50%', display: 'flex', padding: '10px',  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '5px'}}>
    //   <div style={{maxWidth: '10%'}}>
    //   <TwitterIcon style={{color:'#50b7f5', height: '50px', width: '50px', marginTop: '10px'}} className="sidebar__twitterIcon" />
    // {/* <img style={{maxWidth: '10%', padding: '0px', borderRadius: '10px'}} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1229%2Fr956085_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"></img> */}
    // </div>
    // {trendings.map((trending) => (
    //     <Trending
    //     key={trending.id}
    //         trending={trending}/>
    //     ))}
    // <div style={{display: "flex", flexDirection: 'row', marginLeft: '10%'}}>
    // <div style={{marginTop: '5%', maxWidth: '95%'}}>This is sample text that will be in place of a notification</div>
    // </div>
    // <div style={{marginTop: '0%', marginLeft: '20px', fontSize: '14px'}}>1m</div>
    // </div>
      
    //   <div style={{minWidth: '50%', display: 'flex', padding: '10px',  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '5px'}}>
    //   <div style={{maxWidth: '10%'}}>
    //   <TwitterIcon style={{color:'#50b7f5', height: '50px', width: '50px', marginTop: '10px'}} className="sidebar__twitterIcon" />
    // {/* <img style={{maxWidth: '10%', padding: '0px', borderRadius: '10px'}} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1229%2Fr956085_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"></img> */}
    // </div>
    // <div style={{display: "flex", flexDirection: 'row', marginLeft: '10%'}}>
    // <div style={{marginTop: '5%', maxWidth: '95%'}}>This is sample text that will be in place of a notification</div>
    // </div>
    // <div style={{marginTop: '0%', marginLeft: '20px', fontSize: '14px'}}>5m</div>
    // </div>
      
    //   <div style={{minWidth: '50%', display: 'flex', padding: '10px',  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '5px'}}>
    //   <div style={{maxWidth: '10%'}}>
    //   <TwitterIcon style={{color:'#50b7f5', height: '50px', width: '50px', marginTop: '10px'}} className="sidebar__twitterIcon" />
    // {/* <img style={{maxWidth: '10%', padding: '0px', borderRadius: '10px'}} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1229%2Fr956085_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg"></img> */}
    // </div>
//     <div style={{display: "flex", flexDirection: 'row', marginLeft: '10%'}}>
//     <div style={{marginTop: '5%', maxWidth: '95%'}}>This is sample text that will be in place of a notification</div>
//     </div>
//     <div style={{marginTop: '0%', marginLeft: '20px', fontSize: '14px'}}>9m</div>
//     </div>
//     </div>
    
//   );
// }

// export default Notifications;
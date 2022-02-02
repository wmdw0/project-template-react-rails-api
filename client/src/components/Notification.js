// import React from "react";
import React, { useEffect, useState } from "react";
import "./Notification.css";
import { Avatar, Button, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function Notification({notification}) {
    const [notifications, setNotifications] = useState(['']);
    // const {id, image, message, time} = notification;
    
  useEffect(() => {
    fetch("/notifications")
    .then((r) => r.json())
    .then(setNotifications);
  }, []);
  return (
    
    <div style={{maxWidth: '100%', maxHeight: '1000px', marginLeft: '-5%',  borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} className="notification">
        
        {/* <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <img style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '30px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} src="https://images.unsplash.com/photo-1642616761188-999cda84e89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginTop: '10px', marginLeft: '10px', marginBottom: '20px'}}>@user4 retweeted your tweet</Typography><div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', borderRadius: '10px', paddingBottom: '50px'}}><div style={{marginLeft: '0px',}}></div><div style={{marginLeft: '0px'}}><div style={{display: 'flex', marginLeft: '60px'}}><Typography style={{fontSize: '14px'}}>TestUser2</Typography><Typography style={{fontSize: '10px', marginLeft: '5px', color: 'grey', marginTop: '4px'}}>@testuser2</Typography><Button style={{marginLeft: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}><Typography style={{fontSize: '8px'}}>follow</Typography></Button></div></div></div></div>
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>1m ago</div>
        </div> */}
        <div style={{padding: '14px', marginBottom: '20px', paddingBottom: '0%'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginTop: '10px', marginLeft: '10px'}}>@user3 liked your tweet</Typography></div>
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>1m ago</div>
        </div>
        <Divider/>
        <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginBottom: '30px', marginTop: '-20px', marginLeft: '10px'}}><br/>@user2 followed you</Typography><div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', borderRadius: '10px', paddingBottom: '20px'}}><div style={{marginLeft: '0px',}}><img style={{minWidth: '400px', height: '70px', borderRadius: '10px'}} src="https://images.unsplash.com/photo-1642616761188-999cda84e89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/></div><div style={{marginLeft: '20px'}}><img style={{ marginTop: '-50px', marginLeft: '40px', minWidth: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', border: '2px solid white'}} src="https://images.unsplash.com/photo-1642616761188-999cda84e89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/><div style={{display: 'flex', marginLeft: '60px'}}><Typography style={{fontSize: '14px'}}>TestUser2</Typography><Typography style={{fontSize: '10px', marginLeft: '5px', color: 'grey', marginTop: '4px'}}>@testuser2</Typography><Button style={{marginLeft: '120px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}><Typography style={{fontSize: '8px'}}>follow</Typography></Button></div></div></div></div>
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>5m ago</div>
        </div>
        <Divider/>
        <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginTop: '10px', marginLeft: '10px'}}>@user4 liked your tweet</Typography></div>
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>15m ago</div>
        </div>
        {/* <Divider/> */}
        {/* <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginBottom: '30px', marginTop: '-20px', marginLeft: '10px'}}><br/>@user3 followed you</Typography><div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', borderRadius: '10px', paddingBottom: '20px'}}><div style={{marginLeft: '0px',}}><img style={{minWidth: '400px', height: '70px', borderRadius: '10px'}} src="https://images.unsplash.com/photo-1642616761188-999cda84e89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/></div><div style={{marginLeft: '20px'}}><img style={{ marginTop: '-50px', marginLeft: '40px', minWidth: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', border: '2px solid white'}} src="https://images.unsplash.com/photo-1642616761188-999cda84e89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/><div style={{display: 'flex', marginLeft: '60px'}}><Typography style={{fontSize: '14px'}}>TestUser3</Typography><Typography style={{fontSize: '10px', marginLeft: '5px', color: 'grey', marginTop: '4px'}}>@testuser3</Typography><Button style={{marginLeft: '120px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}><Typography style={{fontSize: '8px'}}>follow</Typography></Button></div></div></div></div>
        
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>25m ago</div>
        </div> */}
        <Divider/>
        <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginBottom: '30px', marginTop: '-20px', marginLeft: '10px'}}><br/><RepeatIcon style={{height: '20px', color: 'green'}} />@user3 retweeted your tweet</Typography></div>
        
        {/* ><div style={{display: 'flex', flexDirection: 'column', marginLeft: '45px', marginTop: '-40px'}}><Typography style={{fontSize: '14px'}}>TestUser3</Typography><Typography style={{fontSize: '10px', marginLeft: '2px', color: 'grey', marginTop: '0px'}}>@testuser3</Typography><div style={{borderRadius: '10px', marginLeft: '0px', marginTop: '5px', width: '250px', height: '40px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}><Typography style={{fontSize: '12px', marginLeft: '10px'}}>test tweet</Typography></div></div> */}
        {/* <div style={{marginLeft: '20px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', height: '100px', borderRadius: '10px'}}><div style={{marginLeft: '20px'}}><img style={{ marginTop: '10px', marginLeft: '0px', minWidth: '40px', height: '40px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} src="https://images.unsplash.com/photo-1642671413296-d8cbda727be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/></div> */}
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>35m ago</div>
        </div>
        <Divider/>
         <div style={{padding: '14px', marginBottom: '20px'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginBottom: '30px', marginTop: '-20px', marginLeft: '10px'}}><br/>@user3 followed you</Typography><div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', borderRadius: '10px', paddingBottom: '20px'}}><div style={{marginLeft: '0px',}}><img style={{minWidth: '400px', height: '70px', borderRadius: '10px'}} src="https://images.unsplash.com/photo-1642671413296-d8cbda727be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/></div><div style={{marginLeft: '20px'}}><img style={{ marginTop: '-50px', marginLeft: '40px', minWidth: '80px', height: '80px', objectFit: 'cover', borderRadius: '40px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', border: '2px solid white'}} src="https://images.unsplash.com/photo-1642671413296-d8cbda727be3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"/><div style={{display: 'flex', marginLeft: '60px'}}><Typography style={{fontSize: '14px'}}>TestUser3</Typography><Typography style={{fontSize: '10px', marginLeft: '5px', color: 'grey', marginTop: '4px'}}>@testuser3</Typography><Button style={{marginLeft: '120px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}}><Typography style={{fontSize: '8px'}}>follow</Typography></Button></div></div></div></div>
        
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>25m ago</div>
        </div>
        <Divider/>
        <div style={{padding: '14px', marginBottom: '20px', paddingBottom: '50%'}} className="contentRight">
        <div style={{ minWidth: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} ><img style={{height: '30px', width: '30px', marginTop: '15px', marginLeft: '7.5px'}} src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1"/></div>
        <div style={{minWidth: '400px', fontSize: '14px', paddingTop: '8px', marginLeft: '10%'}}><Typography style={{textAlign: 'left', marginTop: '10px', marginLeft: '10px'}}>@user3 liked your tweet</Typography></div>
        <div style={{marginLeft: '0%', marginTop: '8px', minWidth: '60px', fontSize: '12px'}}>45m ago</div>
        </div>
        <Divider/>
        </div>
        
  );
    }



export default Notification;
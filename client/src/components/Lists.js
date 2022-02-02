import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Notifications.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';


function Lists({ user, setUser}) {

  return (
 
    <div className="feed">
      <div className="feed__header">
        <h2>Lists</h2>
        <p>@{user?.username}</p>
      </div>

    <div style={{minWidth: '100%', display: 'flex'}}>
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <h2 style={{marginLeft: '10%', marginTop: '10%', textAlign: 'left'}}>
        Pinned Lists
        </h2>
      <p style={{marginLeft: '10%', marginBottom: '10%', textAlign: 'left', fontSize: '12px', color: 'grey'}}>
        Nothing to see here yet - pin your favorite Lists to access them quickly.
      </p>
    </Box>
    
   
      </div>

    <div style={{minWidth: '100%', display: 'flex'}}>
    <Box sx={{ width: '100%', maxWidth: '100%', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', }}>
      
      <h2 style={{marginLeft: '10%', marginTop: '10%', textAlign: 'left'}}>
        Discover new Lists
        </h2>
        <div style={{ display: 'flex', minHeight: '100px', justifyContent: 'left'}}>
          
          <IconButton style={{marginLeft: '10%', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '10px', height: '60px', width: '60px', borderRadius: '10px'}} aria-label="delete">
          <AssignmentOutlinedIcon style={{color: 'grey'}} />
          
      </IconButton>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{height: '20px', marginLeft: '10px', marginBottom: '20px'}}>
          <h4>Tech</h4>
          </div>
          <div style={{height: '30px', marginLeft: '10px'}}>
          <Stack direction="row" spacing={2}>
      
      <Avatar sx={{ height: '20px', width: '20px', marginTop: '5px', fontSize: '12px', bgcolor: deepOrange[500] }} src="https://randomuser.me/api/portraits/men/10.jpg"></Avatar><p style={{color: 'black', marginLeft: '5px', marginTop: '10px', fontSize: '12px'}}>John Doe</p><p style={{color: 'grey', fontSize: '10px', marginLeft: '5px', marginTop: '12px'}}>@johndoe123</p>
     
    </Stack>
    </div>
          
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: '100px', justifyContent: 'left'}}>
          
          <IconButton style={{marginLeft: '10%', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '10px', height: '60px', width: '60px', borderRadius: '10px'}} aria-label="delete">
          <AssignmentOutlinedIcon style={{color: 'grey'}} />
      </IconButton>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{height: '20px', marginLeft: '10px', marginBottom: '20px'}}>
          <h4>Marketing</h4>
          </div>
          <div style={{height: '30px', marginLeft: '10px'}}>
          <Stack direction="row" spacing={2}>
      
      <Avatar sx={{ height: '20px', width: '20px', marginTop: '5px', fontSize: '12px', bgcolor: deepOrange[500] }} src="https://randomuser.me/api/portraits/women/79.jpg"></Avatar><p style={{color: 'black', marginLeft: '5px', marginTop: '10px', fontSize: '12px'}}>Jane Doe</p><p style={{color: 'grey', fontSize: '10px', marginLeft: '5px', marginTop: '12px',}}>@janedoe1234</p>
     
    </Stack>
    </div>
          
        </div>
      </div>
      <div style={{ display: 'flex', minHeight: '100px', justifyContent: 'left'}}>
          
          <IconButton style={{marginLeft: '10%', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', marginTop: '10px', height: '60px', width: '60px', borderRadius: '10px'}} aria-label="delete">
          <AssignmentOutlinedIcon style={{color: 'grey'}} />
      </IconButton>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{height: '20px', marginLeft: '10px', marginBottom: '20px'}}>
          <h4>Business</h4>
          </div>
          <div style={{height: '30px', marginLeft: '10px'}}>
          <Stack direction="row" spacing={2}>
      
      <Avatar sx={{ height: '20px', width: '20px', marginTop: '5px', fontSize: '12px', bgcolor: deepOrange[500] }} src="https://randomuser.me/api/portraits/men/85.jpg"></Avatar><p style={{color: 'black', marginLeft: '5px', marginTop: '10px', fontSize: '12px'}}>John Smith</p><p style={{color: 'grey', fontSize: '10px', marginLeft: '5px', marginTop: '12px',}}>@samplehandle</p>
      
    </Stack>
    
    </div>
    <Button style={{ backgroundColor: 'transparent', color: '#50b7f5', fontSize: '14px', padding: '10px', minWidth: '200px', borderRadius: '20px', marginLeft: '-90%', marginTop: '10%', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen'
    }}>Show more</Button>
        </div>
      </div>
      
      
    </Box>
        
      </div>
      <div style={{minWidth: '100%', display: 'flex'}}>
    <Box sx={{ minWidth: '100%', maxWidth: 500 }}>
      
      <h2 style={{marginLeft: '10%', marginTop: '10%', textAlign: 'left'}}>
        Your Lists
        </h2>
      
      <p style={{marginLeft: '10%', marginBottom: '10%', textAlign: 'left', fontSize: '12px', color: 'grey'}}>
        You haven't created or followed any Lists. When you do, they'll show up here.
      </p>
     
      
    </Box>
    </div>
    </div>
  );
}

export default Lists;
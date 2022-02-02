import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Messages.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';


function Messages2() {



  return (

    <div className="feed" style={{maxWidth: '33%',
    minWidth: '33%'}}>


    <div style={{minWidth: '100%', display: 'flex'}}>
    
    <Box sx={{ width: '100%', marginTop: '60%', maxWidth: 500 }}>
      
      <h2 style={{marginLeft: '0%', textAlign: 'center'}}>
        You don't have a <br/> message selected
        </h2>
      
      <p style={{marginLeft: '0%', textAlign: 'center', marginBottom: '10%', fontSize: '12px'}}>
        Choose one from your existing messages, <br/> or start a new one.
      </p>
      <Link style={{textDecoration: 'none'}} to='/signup'><Button style={{ backgroundColor: '#50b7f5', color: 'white', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '20%'}}>New message</Button></Link>
      
    </Box>
        
      </div>

     
         
    </div>
  );
}

export default Messages2;
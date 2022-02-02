import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Home.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


function Home() {



  return (
    
    <div style={{minWidth: '100%', display: 'flex'}}>
        <div style={{maxWidth: '60%', marginLeft: '-5%'}}>
        <img className="homeImage" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"></img><TwitterIcon style={{color: 'white', marginTop: '-100%', marginBottom: '20%', marginLeft: '25%', height: '400px', width: '400px'}} className="sidebar__twitterIcon" />
        </div>
      <div style={{width: '50%', marginLeft: '50%'}} className="feed__header">
        
        <TwitterIcon style={{color:'#50b7f5', height: '50px', width: '50px'}} className="sidebar__twitterIcon" />
        <h2 style={{fontSize: '64px', textAlign: 'center'}}>Happening Now</h2>
        <h3 style={{fontSize: '31px',textAlign: 'center'}}>Join Twitter today.</h3>
        <Link style={{textDecoration: 'none'}} to='/signup'><Button style={{ boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%'}}>Sign Up</Button></Link>
        <h3 style={{fontSize: '17px', textAlign: 'center'}}>Already have an account?</h3>
        <Link style={{textDecoration: 'none'}} to='/login'><Button style={{boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%'}}>Sign In</Button></Link>
       
      </div>

     
    </div>
  );
}

export default Home;
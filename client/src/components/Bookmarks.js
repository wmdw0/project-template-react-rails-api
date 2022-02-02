import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Bookmarks.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';


function Bookmarks({user, setUser}) {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/tweets")
    .then((r) => r.json())
    .then(setTweets);
  }, []);


  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Bookmarks</h2>
        <p>@{user?.username}</p>
      </div>

    <div style={{minWidth: '100%', display: 'flex'}}>
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      
      <h2 style={{marginLeft: '20%', marginTop: '10%', textAlign: 'center'}}>
        You haven't added any Tweets to your Bookmarks yet
        </h2>
      
      <p style={{marginLeft: '20%', marginBottom: '10%', textAlign: 'center'}}>
        When you do, they'll show up here.
      </p>
    </Box>
      
      </div>
    </div>
  );
}

export default Bookmarks;
import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Explore.css";
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



function Explore() {
  const [value, setValue] = React.useState(0);
  const [trendings, setTrendings] = useState(['']);
  useEffect(() => {
    fetch("/trendings")
    .then((r) => r.json())
    .then(setTrendings);
  }, []);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    <div className="feed" style={{maxWidth: '45%',
      minWidth: '45%'}}>
      <div className="feed__header">
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <h2>Explore</h2>
        <Button><SettingsOutlinedIcon style={{color: 'black'}} /></Button>
        </div>
      </div>
      <Box style={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)' }}>
      <Tabs  value={value} onChange={handleChange} centered>
        <div>
        <Tab style={{fontSize: '12px'}} label="For you" />
        
        
        </div>
        <Tab style={{fontSize: '12px'}} label="Trending" />
        <Tab style={{fontSize: '12px'}} label="COVID-19" />
        <Tab style={{fontSize: '12px'}} label="News" />
        <Tab style={{fontSize: '12px'}} label="Sports" />
        <Tab style={{fontSize: '12px'}} label="Entertainment" />
      </Tabs>
    </Box>
     <div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', height: '300px'}}>
     
      <img style={{minWidth: '100%', minHeight: '100%', borderRadius: '0px', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1548217395-6c6095abb49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
      <div style={{marginTop: '-20%'}}>
      <Typography style={{color: 'white', marginLeft: '20px', fontSize: '32px'}}>#Sample</Typography>
      <Typography style={{color: 'white', marginLeft: '20px'}}>Sample Ad</Typography>
      <div style={{display: 'flex'}}>
      <NorthEastIcon style={{color: 'white', marginLeft: '20px', marginTop: '5px', borderRadius: '4px', border: '1px solid white', backgroundColor: 'transparent', height: '12px', width: '12px'}} /><Typography style={{color: 'white', marginLeft: '5px', marginTop: '2px', fontSize: '14px'}}>Promoted by Sample</Typography>
      </div>
      </div>
    </div> 

    <div style={{ maxWidth: '500px', marginLeft: '0px', paddingTop: '60px', paddingLeft: '60px', paddingRight: '40px', paddingBottom: '10px', borderRadius: '20px', marginTop: '0px', backgroundColor: '#f5f8fa', borderRadius: '20px'}}>
    <div>
        <h2 style={{marginTop: '-20px'}}>What's happening</h2>
    {trendings.map((trending) => (
        <Trending
        key={trending.id}
            trending={trending}/>
        ))}
        <Button style={{color: '#50b7f5', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%', marginTop: '10%', backgroundColor: '#ffffff'}}>View More</Button>
        </div>
        
      </div>

    </div>
  );
}

export default Explore;
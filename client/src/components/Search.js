import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Search.css";
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
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';



function Search({handleUpdateTweet, user, setUser}) {
  const [value, setValue] = React.useState(0);
  const [trendings, setTrendings] = useState(['']);
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/trendings")
    .then((r) => r.json())
    .then(setTrendings);
  }, []);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/tweets")
    .then((r) => r.json())
    .then((tweetsArray) => {
      setTweets(tweetsArray);
    });
  }, []);

  function handleDeleteTweet(deletedTweet) {
    setTweets((tweets) =>
      tweets.filter((tweet) => tweet.id !== deletedTweet.id)
    );
  }

//   const [tweets, setTweets] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetch("/tweets")
//     .then((r) => r.json())
//     .then(setTweets);
//   }, []);

//   function handleAddTweet(addedTweet) {
//     setTweets((tweets) => [...tweets, addedTweet]);
//   }

//   function handleUpdateTweet(updatedTweet) {
//     setTweets((tweets) =>
//       tweets.map((tweet) => {
//         return tweet.id === updatedTweet.id ? updatedTweet : tweet;
//       })
//     );
//   }

//   function handleDeleteTweet(deletedTweet) {
//     setTweets((tweets) =>
//       tweets.filter((tweet) => tweet.id !== deletedTweet.id)
//     );
//   }

//   const displayedTweets = tweets.filter((tweet) => {
//     return tweet.content.toLowerCase().includes(searchTerm.toLowerCase());
//   });
const handleChange = (event, newValue) => {
  setValue(newValue);
};

  return (
    // <div className="feed">
    <div className="feed" style={{maxWidth: '45%',
      minWidth: '45%', height: '100%', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)',}}>
      <div className="feed__header">
        <div style={{display: 'flex', justifyContent: 'space-between',}}>
        <h2>Search</h2>
        <Button><FilterListOutlinedIcon style={{color: 'black'}} /></Button>
        </div>
        {/* <div style={{boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)', height: '300px'}}> */}
     
     {/* <img style={{minWidth: '100%', minHeight: '100%', borderRadius: '0px', objectFit: 'cover'}} src="https://images.unsplash.com/photo-1548217395-6c6095abb49c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"/> */}
     <div style={{marginTop: '0%'}}>
     
     <div style={{border: '0px solid black', marginLeft: '-5%', width: '110%', height: '80px', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)',  }}>
     <Typography style={{color: 'black', marginLeft: '20px', fontSize: '18px', padding: '12px', paddingTop: '5%' }}>Displaying all results for "test"</Typography>
     
     </div>
     <div style={{display: 'flex', flexDirection: 'column', marginTop: '0%', marginLeft: '-5%'}}>
     {tweets?.map((tweet) => (
          <Post
            key={tweet?.id}
            tweet={tweet}
            onUpdateTweet={handleUpdateTweet}
            onDeleteTweet={handleDeleteTweet}
            username={tweet?.username}
            currentUser={user}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          />
        ))}
     {/* <NorthEastIcon style={{color: 'black', marginLeft: '20px', marginTop: '5px', borderRadius: '4px', border: '1px solid white', backgroundColor: 'transparent', height: '12px', width: '12px'}} /><Typography style={{color: 'white', marginLeft: '5px', marginTop: '2px', fontSize: '14px'}}>Promoted by Sample</Typography> */}
     </div>
     </div>
   </div> 
      {/* </div> */}
      {/* <Box style={{ width: '100%', bgcolor: 'background.paper', boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)' }}>
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
    </Box> */}
    
    {/* <Typography style={{color: 'black', marginLeft: '20px'}}>Sample Ad</Typography> */}
    <div style={{ maxWidth: '500px', marginLeft: '0px', paddingTop: '60px', paddingLeft: '60px', paddingRight: '40px', paddingBottom: '10px', borderRadius: '20px', marginTop: '0px', backgroundColor: '#f5f8fa', borderRadius: '20px'}}>
    {/* <div>
        <h2 style={{marginTop: '-20px'}}>What's happening</h2>
    {trendings.map((trending) => (
        <Trending
        key={trending.id}
            trending={trending}/>
        ))}
        <Button style={{color: '#50b7f5', boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%', marginTop: '10%', backgroundColor: '#ffffff'}}>View More</Button>
        </div> */}
        {/* <div style={{maxWidth: '60%', marginLeft: '-5%'}}>
        <img className="homeImage" src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"></img><TwitterIcon style={{color: 'white', marginTop: '-100%', marginBottom: '20%', marginLeft: '25%', height: '400px', width: '400px'}} className="sidebar__twitterIcon" />
        </div> */}
      {/* <div style={{width: '50%'}} className="feed__header"> */}
        {/* <h2>Home</h2> */}
        {/* <TwitterIcon style={{color:'#50b7f5', height: '50px', width: '50px'}} className="sidebar__twitterIcon" />
        <h2 style={{fontSize: '64px', textAlign: 'center'}}>Search Page</h2>
        <h3 style={{fontSize: '31px',textAlign: 'center'}}>Join twitter today.</h3>
        <Link style={{textDecoration: 'none'}} to='/signup'><Button style={{ boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%'}}>Sign Up</Button></Link>
        <h3 style={{fontSize: '17px', textAlign: 'center'}}>Already have an account?</h3>
        <Link style={{textDecoration: 'none'}} to='/login'><Button style={{boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 15%)', fontSize: '14px', padding: '10px', minWidth: '250px', borderRadius: '20px', marginLeft: '25%'}}>Sign In</Button></Link> */}
        {/* <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png"></img> */}
      </div>

      {/* <TweetBox onAddTweet={handleAddTweet} /> */}

      {/* <FlipMove> */}
        {/* {tweets.map((tweet) => (
          <Post
            key={tweet.id}
            tweet={tweet}
            onUpdateTweet={handleUpdateTweet}
            onDeleteTweet={handleDeleteTweet} */}
            {/* // username={tweet.username}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          />
        ))} */}
          {/* <Post
            // key={tweet.text}
            // displayName={tweet.displayName}
            // username={tweet.username}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          /> */}
          {/* <Post
            // key={tweet.text}
            // displayName={tweet.displayName}
            // username={tweet.username}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          /> */}
          {/* <Post
            // key={tweet.text}
            // displayName={tweet.displayName}
            // username={tweet.username}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          /> */}
          {/* <Post
            // key={tweet.text}
            // displayName={tweet.displayName}
            // username={tweet.username}
            // verified={tweet.verified}
            // text={tweet.text}
            // avatar={tweet.avatar}
            // image={tweet.image}
          /> */}
        {/* ))} */}
      {/* </FlipMove> */}
    </div>
  );
}

export default Search;
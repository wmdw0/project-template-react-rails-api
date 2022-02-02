import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Switch from '@mui/material/Switch';
// import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const initialState = {
  id: "",
  content: "",
  image: "",
  location: "Add Location"
};

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      />
    </Box>
  </Paper>
);

function TweetBox({ onAddTweet, user }) {
  const [formData, setFormData] = useState(initialState);
  // const [content, setContent] = useState('');
  // const [location, setLocation] = useState('');
  // const [image, setImage] = useState('');
  const [errors, setErrors] = useState('');
  const [users, setUsers] = useState(['']);
  const [checked, setChecked] = React.useState(false);
  const containerRef = React.useRef(null);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles = {
    position: 'absolute',
    top: -43,
    width: '300px',
    height: '25px',
    right: 0,
    left: 0,
    zIndex: 1,
    border: '0px',
    boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 20%)',
    borderRadius: '10px',
    p: 1,
    bgcolor: 'background.paper',
  };

  const handleClick2 = () => {
    setOpen2((prev) => !prev);
  };

  const handleClickAway2 = () => {
    setOpen2(false);
  };

  const styles2 = {
    position: 'absolute',
    top: -43,
    width: '300px',
    height: '25px',
    right: 0,
    left: -10,
    zIndex: 1,
    border: '0px',
    boxShadow: 'inset 0 0.055em 0.225em rgb(20 20 20 / 5%)',
    borderRadius: '10px',
    p: 1,
    bgcolor: 'background.paper',
  };

  // const handleChange2 = () => {
  //   setChecked((prev) => !prev);
  // };


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  function handleChange2(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/tweets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
  })
  .then((r) => r.json())
      .then((newTweet) => {
        setFormData(initialState);
        onAddTweet(newTweet);
        console.log(newTweet)
      });
    }


  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(setUsers);
  }, []);
  // .then((r) => r.json())
  // .then((newTweet) => onAddTweet(newTweet));
      // .then(res => {
      //   if(res.ok){
      //     res.json().then((newTweet) => onAddTweet(newTweet));
      //   } else {
      //     res.json().then( e => setErrors(Object.entries(e.error).flat()))
      //   }
      // })
      // }
  
  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar 
          
          src={user?.avatar} />
          {/* <input
            type="text"
            id="id"
            // name="content"
            placeholder="User id"
            value={formData.id}
           onChange={handleChange}
          /> */}
          
          <input
            type="text"
            id="content"
            // name="content"
            placeholder="What's happening?"
            value={formData.content}
           onChange={handleChange}
          />
        </div>
          {/* <input
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
           type="text"
        />   */}
        {/* <input
        type="text"
        id="location"
        value={formData.location}
        onChange={handleChange}
          // name="location"
          // value={location}
          // onChange={(e) => setLocation(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter location"
          // type="text"
        />  */}
<div className="bottom">


<div style={{marginLeft: '0%', marginTop: '0%', color: '#1976d2', opacity: '80%', }}>
      <Stack
      style={{marginLeft: '0%', marginTop: '20px', color: '#1976d2', opacity: '80%', }}
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 0 }}
      >
        <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
      <Button type="button" onClick={handleClick}>
          <InsertPhotoOutlinedIcon style={{height: '20px'}} />
        </Button>
        {open ? (
          <Box sx={styles}>
            <AddAPhotoIcon style={{height: '14px', marginTop: '0px', color: 'black', opacity: '100%'}}/>
            <input
            style={{height: '10px', backgroundColor: 'transparent'}}
          type="text"
          id="image"
          value={formData.image}
          onChange={handleChange}
          className="tweetBox__imageInput"
          placeholder="Enter Image URL"
          
        />
            
            
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
       {/* <Button variant="text">
          <InsertPhotoOutlinedIcon style={{height: '20px'}} />
        </Button> */}
        <Button variant="text">
        <GifBoxOutlinedIcon style={{height: '20px'}} />
        </Button>
        <Button variant="text">
        <BarChartOutlinedIcon style={{height: '20px', transform: 'rotate(90deg)'}}/>
        
        </Button>
        <Button variant="text">
        <SentimentSatisfiedAltOutlinedIcon style={{height: '20px'}}/>
        </Button>
        <Button variant="text">
        <InsertInvitationOutlinedIcon style={{height: '20px'}}/>
        </Button>
        <ClickAwayListener onClickAway2={handleClickAway2}>
      <Box sx={{ position: 'relative' }}>
        <Button type="button" onClick={handleClick2}>
        <FmdGoodOutlinedIcon style={{height: '20px'}}/>
        </Button>
        {open2 ? (
          <Box sx={styles2}>
            <FmdGoodOutlinedIcon style={{height: '14px', marginTop: '0px', color: 'black', opacity: '100%'}}/>
            <input
            style={{height: '10px', backgroundColor: 'transparent'}}
          type="text"
          id="image"
          value={formData.location}
          onChange={handleChange2}
          className="tweetBox__imageInput"
          placeholder="Optional: Add location"
          
        />
            
            
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
      </Stack>
    </div>
        <Button
        onClick={handleSubmit}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
        </div>
      </form>
    </div> 
  );
}

export default TweetBox;
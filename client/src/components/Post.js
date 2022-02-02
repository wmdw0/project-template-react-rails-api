
import React, { forwardRef, useEffect, useState } from "react";
import "./Post.css";
import { Avatar, Button, Typography } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import IosShareOutlinedIcon from '@mui/icons-material/IosShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Popover from '@mui/material/Popover';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import CloseIcon from '@mui/icons-material/Close';
import TweetBox from "./TweetBox";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
const style = {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 205,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 3.5,
  borderRadius: '20px'
};
function Post({ tweet, onUpdateTweet, onDeleteTweet, currentUser }) {
  const { id, image, content, location, likes, user} = tweet;
  console.log(tweet)
  const [users, setUsers] = useState(['']);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [opena, setOpena] = React.useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [formData, setFormData] = useState(tweet);
  const handleOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const [openModal, setOpen] = React.useState(false);
  var myTweet = false;
  console.log(currentUser?.id + "HITTING HERE");
  if (currentUser?.id === user?.id) {
    myTweet = true;
  }


  function handleToggleLikes(){
    setIsLiked((isLiked) => !isLiked);
  }
  function handleOpenModal() {
    setOpen(!openModal)
  }
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  const handleClick2 = () => {
    setOpena((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpena(false);
  };

  const styles = {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

  function handleUpdateTweet() {
    // const newContent = "";
    console.log("HITTING UPDATE")
    fetch(`/tweets/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then((res) => {
      if (res.ok) {
        console.log(res);
        onUpdateTweet(tweet);
        // onUpdateTweet(tweet);
      } else {
        res.json().then(console.log)
      }
    })
  }
    // .then((r) => r.json())
    //   .then(onUpdateTweet);
    //   }
   
  //   .then((r) => r.json())
  //   .then((updatedTweet) => {
  //     onUpdateTweet(tweet);
  //   });
  // }

  function handleDeleteTweet() {
    fetch(`/tweets/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        console.log(res);
        onDeleteTweet(tweet);
      } else {
        res.json().then(console.log)
      }
    })
  }

  // function handleEditTweet() {
  //   fetch(`/tweets/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ content }),
  //   })
  //     .then((r) => r.json())
  //     .then((updatedTweet) => {
  //       onUpdateTweet(updatedTweet);
  //     });
  // }

  // ({ displayName, username, verified, text, image, avatar }, ref) => {
    

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(setUsers);
  }, []);

    return (
      <div className="post">
        <div className="post__avatar">
          <Avatar style={{height: '50px', width: '50px'}} src={user?.avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              {user?.displayName}<VerifiedUserIcon className="post__badge" />
              
                <span className="post__headerSpecial">
                  
                  @{user?.username}
                  
                  
                </span>
                </h3>
                <Button style={{height: '20px', marginLeft: '30px', marginTop: '-30px'}} variant="text" onClick={handleClick}>
        <MoreHorizOutlinedIcon style={{height: '20px', width: '20px', marginLeft: '375px'}}/>
        </Button>
        <Popover
        
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
       
      <Stack style={{display: 'flex', flexDirecton: 'column', textAlign: 'center', justifyContent: 'space-evenly'}}>
        {myTweet ? (
          <Button onClick={handleDeleteTweet} style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><DeleteIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}} />Delete</Typography></Button>
        ) : null}
        {myTweet ? (
          <Button onClick={handleOpenModal} style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><PersonRemoveOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Edit</Typography></Button>
        ) : null}
        
        <Button style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><FeaturedPlayListOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Add/remove @{user?.username} from Lists</Typography></Button>
        <Button style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><VolumeOffOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Mute @{user?.username}</Typography></Button>
        <Button style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><BlockOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Block @{user?.username}</Typography></Button>
        <Button style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><CodeOffOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Embed Tweet</Typography></Button>
        <Button style={{color: 'black', justifyContent: 'left'}}><Typography sx={{ p: 2, padding: '10px', fontSize: '12px', fontStyle: 'normal' }}><FlagOutlinedIcon style={{marginRight: '10px', maxHeight: '20px', maxWidth: '20px'}}/>Report Tweet</Typography></Button>
        </Stack>
      </Popover>
              
              
            </div>
           
            
            <div className="post__headerDescription">
             <p>{content}</p> 
            </div>
            
          </div>
          <img style={{marginLeft: '-5%', minHeight: '10%', maxHeight: '300px', objectFit: 'cover'}} src={image} alt=""/>
          
          <div className="post__footer">
          
            {/* <Button onClick={handleEditTweet}>Edit</Button> */}
          <div style={{width: '100%', marginLeft: '0%', marginTop: '2%', color: '#1976d2', opacity: '80%', marginLeft: '-20%', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 15%)', borderRadius: '10px' }}>
          
            
      {/* <Checkbox style={{marginLeft: '100px', marginRight: '10px'}} {...label} icon={<FavoriteBorder style={{height: '20px'}} />} checkedIcon={<div style={{display: 'flex'}}><Favorite style={{height: '20px'}} /><Typography style={{fontSize: '12px', marginTop: '2px'}}>1{likes}</Typography></div>} /> */}
     <div style={{marginLeft: '17.5%'}}>
       {isLiked? (
         <Button onClick={handleToggleLikes}><FavoriteBorder style={{height: '20px', color: 'grey'}} /></Button> 
       ) : (
         <Button style={{color: 'red'}} onClick={handleToggleLikes}><Favorite style={{color: 'red', border: '1px solid white'}} />1</Button>
       )}
     
      <Checkbox style={{marginRight: '10px'}}
        {...label}
        icon={<RepeatIcon style={{height: '20px'}} />}
        checkedIcon={<div style={{display: 'flex', color: 'green'}}><RepeatIcon style={{height: '20px', color: 'green'}} /><Typography>1</Typography></div>}
      />
      {/* <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    > */}
      {/* <Box sx={{ position: 'relative' }}>
        <Button type="button" onClick={handleClick2}>
        <ChatBubbleOutlineOutlinedIcon style={{height: '20px'}} />
        </Button>
        {opena ? (
          <Box sx={styles}> */}
            {/* <div className="post__avatar">
          <Avatar style={{height: '50px', width: '50px'}} src={user?.avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
              {user?.displayName}<VerifiedUserIcon className="post__badge" />
              
                <span className="post__headerSpecial">
                  
                  @{user?.username}
                  
                  
                </span>
                </h3> 
                </div></div></div>
            {/* <img style={{height: '10px', width: '10px'}} src={user.avatar}/> */}
            {/* <span>{user.displayName}</span> */}
          {/* </Box>
        ) : null}
      </Box>
    </ClickAwayListener> */}
      <Checkbox style={{marginRight: '10px'}}
        {...label}
        icon={<ChatBubbleOutlineOutlinedIcon style={{height: '20px'}} />}
        checkedIcon={<div style={{display: 'flex'}}><ChatBubbleOutlineOutlinedIcon style={{height: '20px'}}/><Typography>1</Typography></div>}
      />
      <Checkbox style={{marginRight: '10px'}}
        {...label}
        icon={<IosShareOutlinedIcon style={{height: '20px'}}   />}
        checkedIcon={<div style={{display: 'flex'}}><IosShareOutlinedIcon style={{height: '20px'}} /><Typography>1</Typography></div>}
      />
      {myTweet ? (
        <Checkbox style={{marginRight: '10px'}}onClick={handleDeleteTweet}
        {...label}
        icon={<DeleteIcon onClick={handleDeleteTweet} style={{height: '20px'}}   />}
        checkedIcon={<DeleteIcon style={{height: '20px'}} />}
      />
      ) : null}
       
      </div>
    </div>
          
          </div>
        </div>
        <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={openModal}
                    onClose={handleModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                 >
                    <Fade in={openModal}>
                      
                    <Box sx={style} style={{height: '250px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', height: '60px', }}>
        <h3 style={{marginLeft: '20px'}} >Edit Tweet</h3>
        <Button onClick={handleModalClose} sx={{ width: '5%', marginTop: '0%', marginLeft: '0%', mr: 1, backgroundColor:'#ffffff', color: '#black' }} variant="extended">
                
                            <CloseIcon sx={{ mr: 1, marginLeft: '10px' }} />
                                
                        </Button>
                        
        </div>
                    
        
        <div  className="tweetBox">
      <form onSubmit={handleUpdateTweet}>
        <div className="tweetBox__input">
          <Avatar
          src={user?.avatar} />
          
          <input
            type="text"
            id="content"
            // name="content"
            placeholder="What's happening?"
            value={formData.content}
           onChange={handleChange}
          />
        </div>
        <Button
        onClick={handleUpdateTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Save
        </Button>
        </form>
        </div>

                    </Box>
                    </Fade>
                </Modal>
      </div>
    );
  }


export default Post;
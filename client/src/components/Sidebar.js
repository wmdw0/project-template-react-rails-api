import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
// import { Reviews } from '../Reviews/Reviews';
import Fab from '@mui/material/Fab';
import CloseIcon from '@mui/icons-material/Close';
import TweetBox from "./TweetBox";
import { Link } from 'react-router-dom';
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';

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

function Sidebar({ user, setUser, onAddTweet }) {
  const [open, setOpen] = React.useState(false);
  const [tweets, setTweets] = useState([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
        }
      });
    }

    useEffect(() => {
      fetch("/tweets")
      .then((r) => r.json())
      .then(setTweets);
    }, []);
  
    function handleAddTweet(addedTweet) {
      setTweets((tweets) => [...tweets, addedTweet]);
    }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <Link style={{textDecoration: 'none'}} to='/feed'><SidebarOption active Icon={HomeIcon} text="Home" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/explore'><SidebarOption Icon={TagRoundedIcon} text="Explore" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/notifications'><SidebarOption Icon={NotificationsNoneIcon} text="Notifications" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/messages'><SidebarOption Icon={MailOutlineIcon} text="Messages" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/bookmarks'><SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/lists'><SidebarOption Icon={ListAltIcon} text="Lists" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/profile'><SidebarOption Icon={PermIdentityIcon} text="Profile" /></Link>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/more'><SidebarOption Icon={MoreHorizIcon} text="More" /></Link>

      {/* Button -> Tweet */}
      <Button onClick={setOpen} variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
      {/* <Divider style={{marginTop: '20px', color: 'black', backgroundColor: 'black', opacity: '10%', height: '0.1px'}}></Divider> */}
      {/* <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button> */}
        {/* <Link style={{textDecoration: 'none', color: 'black'}} to='/more'><SidebarOption Icon={MoreHorizIcon} text="More" /></Link> */}
      {/* <Button as={Link} to="/new">
          New Post
        </Button> */}
        <div className="sidebar__tweet2" fullWidth style={{display: 'flex', paddingLeft: '10%'}}>
 <Avatar style={{marginBottom: '-15px', height: '65px', width: '65px', marginTop: '10px'}} src={user?.avatar}/>
 <div style={{display: "flex", flexDirection: "column", marginLeft: '15px', marginTop: '5px'}}>
 <p style={{marginBottom: '-12px', fontSize: '18px'}}>{user?.displayName}</p>
    <p style={{marginBottom: '-15px',  fontSize: '14px', color: 'grey'}}>@{user?.username}</p> 
    
    </div>
    <Button style={{marginLeft: '50px', marginTop: '30px', height: '30px',  boxShadow: '0 0.055em 0.225em rgb(20 20 20 / 15%)'}} variant="extended" onClick={handleLogoutClick}>
          Logout
        </Button>
    </div>
      <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                 >
                    <Fade in={open}>
                    <Box sx={style}>
                    
                    {/* <Button onClick={handleClose} sx={{ width: '5%', marginTop: '-2%', marginLeft: '90%', mr: 1, backgroundColor:'#ffffff', color: '#1976d2' }} variant="extended">
                
                            <CloseIcon sx={{ mr: 1, marginLeft: '10px' }} />
                                
                        </Button> */}
                        <div style={{display: 'flex', justifyContent: 'space-between', height: '60px', }}>
        <h3 style={{marginLeft: '20px'}} >Create Tweet</h3>
        <Button onClick={handleClose} sx={{ width: '5%', marginTop: '0%', marginLeft: '0%', mr: 1, backgroundColor:'#ffffff', color: '#black' }} variant="extended">
                
                            <CloseIcon sx={{ mr: 1, marginLeft: '10px' }} />
                                
                        </Button>
                        
        </div>
                        <TweetBox user={user} setUser={setUser} onAddTweet={handleAddTweet} />
                       
                        {/* <Fab sx={{ width: '50%', marginTop: '195px', marginLeft: '25%', mr: 1, backgroundColor:'#ffffff', color: '#1976d2' }} variant="extended">
                
                            <AddIcon sx={{ mr: 1 }} />
                                Write a Review
                        </Fab> */}
                    </Box>
                    </Fade>
                </Modal>
    </div>
  );
}

export default Sidebar;
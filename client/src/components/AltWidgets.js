import React, { useEffect, useState } from "react";
import "./AltWidgets.css";
import Trending from "./Trending";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function AltWidgets() {
  const [users, setUsers] = useState(['']);

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(setUsers);
  }, []);

  return (
    <div className="widgets">
      <div className="widgets__input">
      <Link to='/search'><SearchIcon className="widgets__searchIcon" /></Link>
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2 style={{marginBottom: '10%'}}>Who To Follow</h2>
        {users.map((user) => (
        <div
        key={user.id}
            user={user}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{maxWidth: '50px'}}>
                <img style={{height: '50px', width: '50px', borderRadius: '100px', objectFit: 'cover'}} src={user.avatar}/>
                </div>
                <div style={{ maxWidth: '70%', marginLeft: '25%', marginTop: '-10%'}}>
                <p style={{ color: 'black',
    fontWeight: '500', marginTop: '-15px'}}>{user.displayName}</p>
            <p style={{fontSize: '14px', marginTop: '-10px', marginBottom: '50px'}}>@{user.username}</p>
            </div>
            <div style={{ maxWidth: '10%', marginLeft: '70%', marginTop: '-27.5%', marginBottom: '15%'}}>
                <Button className="follow">Follow</Button>
            </div>
            
            </div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default AltWidgets;
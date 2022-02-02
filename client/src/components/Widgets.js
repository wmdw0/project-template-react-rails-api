import React, { useEffect, useState } from "react";
import "./Widgets.css";
import Trending from "./Trending";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';

function Widgets({searchTerm, onSearchChange}) {
  const [trendings, setTrendings] = useState(['']);

  useEffect(() => {
    fetch("/trendings")
    .then((r) => r.json())
    .then(setTrendings);
  }, []);

  return (
    <div className="widgets">
      <div className="widgets__input">
        <Link to='/search'><SearchIcon className="widgets__searchIcon" /></Link>
        <input placeholder="Search Twitter" type="text" value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)} />
      </div>

      <div className="widgets__widgetContainer">
        <h2 style={{fontSize: '18px', fontWeight: '700'}}>What's happening</h2>
        {trendings.map((trending) => (
        <Trending
        key={trending.id}
            trending={trending}/>
        ))}
      
        
      </div>
    </div>
  );
}

export default Widgets;
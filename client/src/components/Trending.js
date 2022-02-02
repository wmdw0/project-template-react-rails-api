// import React from "react";
import React, { useEffect, useState } from "react";
import "./Trending.css";

function Trending({trending}) {
    const [trendings, setTrendings] = useState(['']);
    const { id, topic, status, title, description, image_url} = trending;
    
  useEffect(() => {
    fetch("/trendings")
    .then((r) => r.json())
    .then(setTrendings);
  }, []);
  return (
    
    <div className="trending">
        <div className="topBar">
        <div className="topic">{topic}</div>•
        <div className="status">{status}</div>
        </div>
        <div className="content">
        <div className="contentLeft">
        <div className="title">{title}</div>
        <div className="desc">{description}</div>
        </div>
        <div className="contentRight">
        <img className="image" src={image_url}/>
        </div>
        </div>
       
    </div>
  );
    }



export default Trending;
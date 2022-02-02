// // import React from "react";
// import React, { useEffect, useState } from "react";
// import "./ExploreFeed.css";

// function ExploreFeed({explore}) {
//     const [explore, setExplore] = useState(['']);
//     const { id, image, heading, subheading, text} = explore;
    
//   useEffect(() => {
//     fetch("/explore")
//     .then((r) => r.json())
//     .then(setExplore);
//   }, []);
//   return (
    
//     <div className="trending">
//         {/* {trendings.map((trending) => { */}
//         {/* <h2>test</h2> */}
//         <div className="topBar">
//         <div className="topic">{}</div>•
//         <div className="status">{heading}</div>
//         </div>
//         <div className="content">
//         <div className="contentLeft">
//         <div className="title">{subheading}</div>
//         <div className="desc">{text}</div>
//         </div>
//         <div className="contentRight">
//         <img className="image" src={image}/>
//         </div>
//         </div>
//         {/* <img src={trendings[0].image_url}/> */}
//       {/* <Icon />
//       <h2>{text}</h2> */}
//     </div>
//   );
//     }



// export default ExploreFeed;
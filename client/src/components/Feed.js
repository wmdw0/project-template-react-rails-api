import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";


function Feed({handleUpdateTweet, user, setUser}) {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


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

  function handleAddTweet(addedTweet) {
    setTweets((tweets) => [...tweets, addedTweet]);
  }


  function handleUpdateTweet(updatedTweet) {
    const updatedTweetsArray = tweets?.map((tweet) => {
      return tweet.id === updatedTweet.id ? updatedTweet : tweet;
    });
    setTweets(updatedTweetsArray);
  }

  function handleDeleteTweet(deletedTweet) {
    setTweets((tweets) =>
      tweets.filter((tweet) => tweet.id !== deletedTweet.id)
    );
  }




  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox user={user} onAddTweet={handleAddTweet} />

      
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
          
         
    </div>
  );
}

export default Feed;
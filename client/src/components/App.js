import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import AltWidgets from "./AltWidgets";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Explore from "./Explore";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Messages2 from "./Messages2";
import Bookmarks from "./Bookmarks";
import Profile from "./Profile";
import Lists from "./Lists";
import Search from "./Search";
import { Switch, Route, Redirect } from "react-router-dom";


function App() {
  const [tweets, setTweets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [user, setUser] = useState(null);
  const [notifications, setNotifications] = useState(['']);
  

  // useEffect(() => {
  //   fetch("/notifications")
  //   .then((r) => r.json())
  //   .then(setNotifications);
  // }, []);

  useEffect(() => {
    // no need to use http://localhost:3000 here
    fetch("/tweets")
      .then((r) => r.json())
      .then((tweetsArray) => {
        setTweets(tweetsArray);
      });
  }, []);

  // useEffect(() => {
  //   fetch("/me").then((response) => {
  //     if (response.ok) {
  //       response.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  
  function handleUpdateTweet(updatedTweet) {
    // setTweets((tweets) =>
    //   tweets.map((tweet) => {
    //     return tweet.id === updatedTweet.id ? updatedTweet 
    //   })
    // );
  }

  
function handleLogin(user) {
  setUser(user);
  
}

function handleLogout() {
  setUser(null);
}

  // const displayedTweets = tweets?.filter((tweet) => {
  //   return tweet.content.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  console.log(user);
  if (!user) {
    console.log(user || "hello")
    return (
      <Switch>
  
      <Route exact path="/login">
            <Login onLogin={handleLogin}/>
            </Route>
            <Route exact path="/signup">
            <Signup onLogin={handleLogin}/>
            </Route>
            <Redirect to="/login" />
            
      </Switch>
    );
  }
  else {
    console.log("USER" + user.username)
    return (
      // BEM
      
      <div className="app">
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route exact path="/explore">
          <Sidebar user={user} setUser={setUser} />
          <Explore/>
          <AltWidgets/>
          </Route>
          <Route exact path="/search">
          <Sidebar user={user} setUser={setUser} />
          <Search searchTerm={searchTerm}
        tweets={tweets}
        user={user} 
        setUser={setUser} 
        onUpdateTweet={handleUpdateTweet}/>
          <Widgets/>
          </Route>
          <Route exact path="/notifications">
          <Sidebar user={user} setUser={setUser}/>
          <Notifications
          />
          <Widgets/>
          </Route>
          <Route exact path="/messages">
          <Sidebar user={user} setUser={setUser} />
          <Messages user={user} setUser={setUser} />
          <Messages2/>
          </Route>
          <Route exact path="/bookmarks">
          <Sidebar user={user} setUser={setUser}/>
          <Bookmarks user={user} setUser={setUser}/>
          <Widgets/>
          </Route>
          <Route exact path="/lists">
          <Sidebar user={user} setUser={setUser} />
          <Lists user={user} setUser={setUser}/>
          <Widgets/>
          </Route>
          <Route exact path="/profile">
          <Sidebar user={user} setUser={setUser} />
          <Profile user={user} setUser={setUser}/>
          <AltWidgets/>
          </Route>
        <Route exact path="/feed">
        
        <Sidebar user={user} setUser={setUser} />
        
        <Feed
        searchTerm={searchTerm}
        tweets={tweets}
        user={user} 
        setUser={setUser} 
        onUpdateTweet={handleUpdateTweet}
        />
       
        <Widgets searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </Route>
        <Redirect to="/feed" />
        </Switch>
      </div>
    );

  }
  
  
}

export default App;
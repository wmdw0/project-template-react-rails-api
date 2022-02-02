import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Signup.css";
import { Typography } from "@mui/material";
// import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import Card from '../Card';
import PaidIcon from '@mui/icons-material/Paid';
// import { Container, Typography, Button } from '@material-ui/core';
import styled from "styled-components";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Fab from '@mui/material/Fab';
import { orange } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import CheckIcon from '@mui/icons-material/Check';
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button, Error, Input, FormField, Label, Textarea } from "../styles";
import CloseIcon from '@mui/icons-material/Close';


const Wrapper = styled.div`
  padding: 20px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
padding: 0px;
margin-bottom: 2%;
margin-top: 0%;
  font-weight: 400;
  font-size: 32px;
  text-align: center;
  // margin-left: -10%;
`;
const Title2 = styled.h1`
  font-weight: 300;
  font-size: 20px;
  margin-top: 14px;
  margin-left: 10px;
  margin-right: 20px;
  color: grey;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  display: flex;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border: 0px solid transparent;
`;

// const TopButton = styled.button`
//   padding: 10px;
//   display: flex;
//   align-items: center;
//   margin: 10px;
//   margin-bottom: 10px;
//   width: 10%;
//   font-weight: 600;
//   cursor: pointer;
//   border: ${(props) => props.type === "filled" && "none"};
//   background-color: ${(props) =>
//     props.type === "filled" ? "black" : "transparent"};
//   color: ${(props) => props.type === "filled" && "white"};
// `;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  // box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
`;

const Left = styled.div`
`

const Right = styled.div`
`

const Info = styled.div`
  flex: 3;
  width: 60%;
  // border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 120vh;
  box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
  margin-top: 5%;
  margin-left: 20%;
  margin-bottom: 5%;
`;

const Product = styled.div`
  display: flex;
  margin-top: 10%;
  margin-bottom: 0%;
  justify-content: space-between;
`;

const Product2 = styled.div`
  display: flex;
  margin-top: 0%;
  margin-bottom: 0%;
  justify-content: space-between;
`;



const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 40%;
  height: 60%;
  object-fit: cover;
  //potentially change to object-fit: contain instead 
  margin-top: 10%;
  margin-bottom: 10%;
  // border-radius: 10px;
  // border: 0.5px solid lightgray;
`;

const Details = styled.div`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  flex-direction: column;
  justify-content: space-around;
  font-size: 14px;
  margin-right: 70px;
  width: 140px;
  `;

const ProductDesc = styled.span`
  flex-direction: column;
  justify-content: space-around;
  font-size: 10px;
  margin-right: 70px;
  color: #939393;
  `;

  const Quantity = styled.span`
  flex-direction: column;
  justify-content: space-around;
  font-size: 12px;
  margin-right: 10px;
  color: #939393;
  `;
const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
//   flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50px;
  margin-left: 0px;
  width: 320px;
  height: 40px;
  // border: 1px solid black;
//   margin-left: -50px;
`;

const ProductAmount = styled.div`
  font-size: 12px;
  margin: 0px;
  marginLeft: 20px;
`;

const ProductPrice = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin-left: 200px;
`;

const ProductPrice2 = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin-left: 200px;
  width: 140px;
`;

const ProductPrice1 = styled.div`
  font-size: 12px;
  font-weight: 200;
  margin-left: 78px;
`;

const TotalPrice = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Hr2 = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 40%;
  margin-top: 10%;
`;

const Hr3 = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 40%;
  margin-left: 50%;
  margin-top: -1.7%;
`;

const Summary = styled.div`
  flex: 1.2;
  // border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 30px;
  height: 165vh;
  box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
  // margin-left: 10%;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-size: 24px;
  color: grey;
  margin: 10px 0px;
`;
const SummaryTitle2 = styled.h1`
  font-weight: 400;
  font-size: 24px;
  color: black;
  margin: 10px 0px;
  margin-left: 25%;
`;
const SummaryTitle3 = styled.h1`
  font-weight: 400;
  font-size: 18px;
  color: black;
  margin: 0px 0px;
  margin-left: 35%;
  // padding-right: 30%;
`;
const SummaryTitle4 = styled.h1`
  font-weight: 400;
  text-decoration: underline;
  font-size: 16px;
  color: grey;
  margin: 10px 0px;
  margin-left: 0%;
  
`;
const SummaryTitle5 = styled.h1`
  font-weight: 400;
  text-decoration: none;
  font-size: 16px;
  color: grey;
  text-align: center;

  width: 100%;
`;
const SummaryTitle6 = styled.h1`
  font-weight: 400;
  text-decoration: none;
  font-size: 12px;
  color: grey;
  margin: 0px 0px;
  margin-bottom: 0px;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "12px"};
`;

const SummaryItemText = styled.span`
font-size: 12px;
margin-left: 95px;
`;

const SummaryItemPrice = styled.span`
font-size: 32px;
`;

const SummaryItemCartPrice = styled.span`
font-size: 24px;
`;

const Button1 = styled.button`
  width: 12%;
  height: 12%;
  margin-top: 0%;
  border-radius: 10px;
  margin-left: 2.4%;
  // padding: 10px;
  background-color: white;
  color: black;
  font-weight: 300;
  font-size: 22px;
  cursor: pointer;
  box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
  border: 0px solid transparent;
`;

const Button2 = styled.button`
  width: 40%;
  border-radius: 10px;
  // box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
  box-shadow: 0px 6px 18px -9px rgba(0, 0, 0, 0.5);
  // box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
  border: transparent;
  margin-left: 30%;
  padding: 10px;
  background-color: white;
  color: black;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 12%;
  cursor: pointer;
  margin-top: 4%;
`;
const Button3 = styled.button`
display: flex;
flex-direction: row;
  width: 50%;
  height: 50px;
  margin-top: 10px;
  border-radius: 20px;
  margin-left: 25%;
  padding: 0px;
  background-color: white;
  color: black;
  font-weight: 300;
  font-size: 26px;
  cursor: pointer;
  border: transparent;
  box-shadow: inset 0 0.055em 0.225em rgb(20 20 20 / 15%);
`;

const NameAndPriceContainer = styled.div`
display: flex;
`

const Img = styled.img`
height: 100%;
width: 100%;
padding: 10px;
margin-left: -10px;
`
const Img2 = styled.img`
height: 80%;
width: 80%;
margin-left: 10px;
object-fit: contain; 
`
const TopDealbly = styled.h2`
font-size: 12px;
`
const CardContainer = styled.div`
margin-left: 35%;
justify-content: space-between;
margin-bottom: 2%;

`
const CardContainer2 = styled.div`
display: flex;
margin-left: 25%;
margin-bottom: 2%;
`
const CardContainer3 = styled.div`
display: flex;
width: 40%;
margin-left: 37%;
margin-bottom: 2%;
`
const CardContainer4 = styled.div`
margin-left: 18%;
width: 40%;
justify-content: space-between;
display: flex;


`
function Signup({ onLogin }) {
const [checked, setChecked] = React.useState(true);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [displayName, setDisplayName] = useState("");
const [avatar, setAvatar] = useState("");
const [text, setText] = useState("");
const [errors, setErrors] = useState([]);
const [isLoading, setIsLoading] = useState(false);

const handleChange = (event) => {
  setChecked(event.target.checked);
};

function handleSubmit(e) {
  e.preventDefault();
  setErrors([]);
  setIsLoading(true);
  fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      password_confirmation: passwordConfirmation,
      displayName,
      avatar,
      text,
    }),
  }).then((r) => {
    setIsLoading(false);
    if (r.ok) {
      r.json().then((user) => onLogin(user));
    } else {
      r.json().then((err) => setErrors(err.errors));
    }
  });
}

  return (

  <div style={{minWidth: '100%'}}>

  <div>
  
          <Info>
            <div style={{display: 'flex', marginBottom: '5%'}}>
            <Link to='/'><Button style={{backgroundColor: 'white', color: 'black'}}><CloseIcon/></Button></Link>
       
            <div style={{marginLeft: '37.5%'}}>
             <TwitterIcon style={{color:'#50b7f5', height: '40px', width: '40px'}} className="sidebar__twitterIcon" />
             </div>
            </div>
            <Title style={{marginLeft: '25%',marginBottom: '5%', textAlign: 'center', marginLeft: '0%', fontSize: '32px', fontWeight: '700'}}>Sign up for Twitter</Title>
        
                
   
  <CardContainer>
           

  </CardContainer>
             
           
    
      <CardContainer2>
      <form onSubmit={handleSubmit}>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="username">Username</Label>
        <Input
        style={{ border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          type="text"
          id="username"
          placeholder="@"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="password">Password</Label>
        <Input
        style={{width: '300px', border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="password">Password Confirmation</Label>
        <Input
        style={{width: '300px', border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="bio">Display Name</Label>
        <Input
          style={{width: '300px', border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          type="text"
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="imageUrl">Profile Image</Label>
        <Input
        style={{width: '300px', border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          type="text"
          id="imageUrl"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Label style={{fontSize: '20px', fontWeight: '400'}} htmlFor="text">Bio</Label>
        <Textarea
        style={{width: '300px', border: '0px', boxShadow: ' 0 0.055em 0.225em rgb(20 20 20 / 25%)'}}
          rows="3"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormField>
      <FormField style={{marginLeft: '25%', minWidth: '100%' }}>
        <Button style={{width: '310px', backgroundColor:'black', color: 'white'}}  type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
      </FormField>
      <FormField>
        {errors?.map((err) => (
          <Error key={err}>{err}</Error>
        ))}
      </FormField>
    </form>

    </CardContainer2>
    
  
    <SummaryTitle3>Already have an account? <Link style={{textDecoration: 'none'}} to='/login'><Button style={{backgroundColor: 'white', color: 'black', border: '1px solid black'}}>Sign In</Button></Link></SummaryTitle3>
    
            </Info>
          
        </div>
       
      </div>
      
    
  
);

};



// function Signup() {
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


//   return (
//     // <div>
//       <div className="signinform">
//         <h2>Sign Up</h2>
//       </div>

      

     
//     // </div>
//   );
// }

export default Signup;
import React, { useState } from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

import Footer from "../components/Footer/Footer";

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { red } from "@mui/material/colors";

const SignUpPage=()=>{
const[password,setPassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")

function onchangePassword(e){
const enterPassword=e.target.value;
setPassword(enterPassword)
}
 
function onClickPassword(e){
    const putPassword=e.target.value;
    setConfirmPassword(putPassword)
}
const renderIcon=()=>
    {

        if(
            confirmPassword!==("")){
                return password===confirmPassword? <CheckOutlinedIcon style={{color:"#49FF00"}}/>:<CloseOutlinedIcon style={{color:"red"}}/>
            }
        
    }



    return(
        <div>
<Nav />


<Announcement />

<div className="signup-wrap">

    <div className="signup2-wrapper">

    <div><h2>SIGN UP </h2></div>
<div className="last-first">
<div>
<input className="sign-email" type="text" placeholder="Enter Your Last Name" />

</div>
<div>
  <input className="sign-email" type="text" placeholder="Enter Your First Name" />
</div>
</div>
  <div className="sign_width">
<input className="sign-email" type="text" placeholder=" Enter UserName"/>

</div>

<div className="sign_width"> 
    <input className="sign-email" type="email" placeholder="Enter Your Email"/>
  
</div>
<div className="sign_width">
    <input onChange={onchangePassword} className="sign-email" type="text" placeholder="password"/>
   

</div>
<div>




<label className="confirm-pass"></label>

<div className="tick_icon">
<div>

    <input onChange={onClickPassword} className="sign-email" type="text" placeholder="confirm your password"/>

</div>
    <div>{renderIcon()}
</div>
</div>
<div className="sign-btn">
    <button className="sign-btn">Sign Up</button>
</div>
    
</div>
<div>
    <p>Don't have an account?<span><a href="#">Create account</a></span></p>

</div>
</div>



<div className="background-signupimg">
<div className="welcome-part"> 
<div className="welcome-paragraph">
    <p>WELCOME TO</p>
    </div>
    <h2>Magoso Enterprises.</h2>
    <p>The Home of Reliable shopping</p>
</div>


</div>


</div>


<div className="sign">
    
</div>

<Footer />
        </div>
    )
}




export default SignUpPage;
import React, { useState } from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

import Footer from "../components/Footer/Footer";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Loginpage=()=>{
    const[showPass,setShowPass]=useState(false);
    const togglePassWardVisibility=()=>{
        setShowPass(!showPass)
    }
    return(
        <div>
            <Nav />

            <Announcement />



            <div className="login-container">
                
                <div className="main-heading">
                <div className="my-h1">
            <h1>Magoso Enterprises</h1>
</div>
<div className="my-h3">
<h3>LOGIN</h3>
</div>


<div>

    <div className="input-login-section">
        <div className="
        inputs">
            <div >
<input type="email" placeholder="email" className="input1" />
</div>
   <div className="password-holder"> 
<input type={showPass?"text":"password"} placeholder="Password" className="input2"/>

<div className="eye-icons" onClick={togglePassWardVisibility}>
{showPass ?  < VisibilityOutlinedIcon /> :<VisibilityOffOutlinedIcon />}


</div>

</div>
<div>
<input type="button" id="login-button" value="LogIn"/> 

</div>
</div>
<div className="checkbox">

    <div className="check-rem">
    <input type="checkbox" value="checkbox" />

<p>Remember me</p>
</div>


<div className="Forgot-password">
<p><a href="#">Forgot your password?</a></p>
</div>

</div>
</div>
</div>
<div className="new-btn">
    <p>New to Magoso Enterprises</p>
<button>Create Account</button>
</div>
<div className="copyright">
<p>Magoso Enterprises &copy;</p>

</div>
</div>

<div className="background-side">
<div className="welcome-part"> 
<div className="welcome-paragraph">
    <p>WELCOME TO</p>
    </div>
    <h2>Magoso Enterprises.</h2>
    <p>The Home of Reliable rhopping</p>
</div>



</div>



            </div>
            <Footer />
        </div>
    )
}


export default Loginpage
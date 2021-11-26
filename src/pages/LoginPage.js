import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

import Footer from "../components/Footer/Footer";


const Loginpage=()=>{
    return(
        <div>
            <Nav />

            <Announcement />



            <div>
            <h1>Magoso Enterprises</h1>

<h3>LOGIN</h3>

<div>
<input type="email" placeholder="Enter Your email" />
    
<input type="password" placeholder="Enter your Password" />

<button>Login</button>


<input type="checkbox" value="checkbox" />




<p>Forgot your password?</p>



<div>
    
</div>
<p>New to Magoso Enterprises</p>
<button>Create Account</button>


<p>Magoso Enterprises &copy;</p>
</div>


            </div>
            <Footer />
        </div>
    )
}


export default Loginpage
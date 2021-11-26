import React from "react";
import "./Newsletter.css"
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Newsletter=()=>{
    return(
        <div className="news-container">
            <h1>Newsletter</h1>
           <div> <p>Sign up for our newsletterto be notified on new promotions and sales</p></div>

            <div className="input-send">
            
            <div className="my-input">
            <input type="text" placeholder="Enter email address" className="input"/>
            </div>

            <button className="btn-input"><SendOutlinedIcon/></button>

            </div>
        </div>
    )
}






export default Newsletter;
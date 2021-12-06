import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddIcCallOutlinedIcon from '@mui/icons-material/AddIcCallOutlined';
import PinDropIcon from '@mui/icons-material/PinDrop';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer=()=>{
    return(
<>

<div className="footer">
        <div className="container">
       <div className="footer-container">
<div className="icons-content">
<div>
<div>
<h1>Magoso Enterprises.</h1>
</div>

<div>
    <p>
        Buy the best from the best.We  bring you quality products and remarkable customer expiriences.We value you.
    </p>
</div>
  </div>     
<div className="social-icons">
       <div className="fb">
           <FacebookOutlinedIcon />
       </div>
       <div className="ig">
           <InstagramIcon />                 
       </div>

       <div className="pint">

       <PinterestIcon />
       </div>

       <div className="twit">
           <TwitterIcon />
       </div>
       </div>
        </div>

<div className="useful-links">
    <h2>
Useful Links
    </h2>

    <div>
        <ul>
            <li>
              <a href="#">  Home
            </a></li>

            <li>
     <a href="#">   Man Fashion
            </a></li>

            <li>
            <a href="#">    Accessories</a>
            </li>

            <li>
             <a href="#">   Order Tracking</a>
            </li>

            <li>
              <a href="#">  Wishlist</a>
            </li>
        </ul>
    </div>
</div>







<div className="cart-part">
<ul>
    <li>
       <a href="#"> Cart</a>
    </li>

    <li><a href="#">Women Fashion</a></li>

    <li> <a href="#">Accessories</a></li>

    <li> <a href="#">My Account</a></li>

    <li> <a href="#">Terms</a></li>


</ul>
</div>
<div className="address-container">
<div className="address-icons">
<div>
    <h2>Contact</h2>
</div>
<div className="contact-icon"> 
  <div>  <PinDropIcon /></div>
    <div>
    <p>Great Street,Lavington,Nairobi.ke</p>
</div>
    </div>

<div className="contact-icon">
    <div>
        <AddIcCallOutlinedIcon /></div>
        <div>
    +254123456789
</div>
</div>
<div className="contact-icon"> 
<div><EmailOutlinedIcon /></div>
<div>
    Order@magoso.com
</div>
</div>
<div className="payments">

    <img className="master-card" src="./Images/master-card.svg" />

    <img className="mpesa" src="./Images/mpesa.png" />


</div>















</div>
</div>

</div>
</div>
</div>

</>
)
   
}




export default Footer
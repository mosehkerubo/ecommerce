import React, { useState } from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Footer from "../components/Footer/Footer";


const CartPage=()=>{
const [Number, setNumber]=useState(0);
const increase=()=>{
    if(Number<5){
        setNumber(preNumber=>preNumber +1);
    }
};
const decrease=()=>{
    if(Number >1){
        setNumber(prevNumber=>prevNumber -1);
    }
};

    return(
        <div>
<Nav />
<Announcement />
<div className="cart-wrapper">
<div className="cart-wrapper2">
<div className="imgs-content">
    <div className="cart1-content">
<div className="tshirt-pic">
  <img  src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
</div>
<div >
    <div className="remove-cart">
<div>
    <p>Mens Jake Guitar Vintage Crusher</p>
  
</div>
<div>
    <p className="cash-class"> X1  Ksh.3,000 </p>
  
    </div>
</div>
<div>

<div className="remove-add-cart">
<div className="little-circle">


    </div>

    <div>
    <RemoveOutlinedIcon onClick={decrease} />
    </div>
    <div>
    <p>{Number}</p>
    </div>
    <div>
    <AddOutlinedIcon  onClick={increase}/>
</div>

<div className="delete-icon red-text">
        <div>
        <DeleteOutlineOutlinedIcon />
        </div>
        <div>
    <p>Remove item</p>
    </div>
    </div>


    
    </div>
</div>
</div>
</div>


<div className="cart2-content">
    <div className="tshirt-pic">
    <div><img src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png" /></div>
</div>
<div>
    <div className="remove-cart">
<div>
    <p>Rocket Vintage Chill Cap</p>
  
</div>
<div>
    <p className="cash-class"> X1  Ksh.4,000 </p>
  
    </div>
</div>
<div>

<div className="remove-add-cart">
<div className="little-circle">


    </div>



    <div>
    <RemoveOutlinedIcon  onClick={decrease}/>
    </div>
    <div className="account">
    <p>{Number}</p>
    </div>
    <div>
    <AddOutlinedIcon onClick={increase}/>
</div>

<div className="delete-icon red-text">
        <div>
        <DeleteOutlineOutlinedIcon />
        </div>
        <div>
    <p>Remove item</p>
    </div>
    </div>


    
    </div>
</div>
</div>


</div>
<div><button className="shop-btn btn-green">Continue Shopping</button></div>
</div>

<div className="your-order-container">
<div className="order-totals">
    <h3>Your Order</h3>
    <div className="sub-manu">
    <p>Subtotals</p>
    <div>
<p className="cash-class">Ksh. 4,000</p>
</div>
    </div>
    <div className="sub-manu">
    <p>Discounts</p>
<p>-</p>
    </div>
    <div className="sub-manu">
           
    <p>Shipping</p>
    <p>-</p>
    </div>
    <div className="sub-manu totals">
    <p>Totals</p>
<p className="cash-class">Ksh. 4,000</p>
    </div>


<button className="checkout-btn btn-green">CHECKOUT</button>
</div>
</div>
</div>
</div>
<Footer/>
        </div>
    )
}




export default CartPage
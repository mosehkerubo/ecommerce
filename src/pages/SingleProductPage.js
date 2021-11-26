import React, { useState } from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

// import Product from "../components/Product/Product";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const SingleProductPage=()=>{

const [color,setColor]=useState("Maroon")


function handleColorChange(color){
    setColor(color);
}

    const [Number,setNumber]=useState(0);
    const increase=()=>{ 
     if(Number<5){
        setNumber(prevNumber=>prevNumber  +1);}


    };

    const decrease=()=>{
        if(Number>1){
        setNumber(prevNumber=>prevNumber  -1);}
    };



    return(
        <div>

<Nav />
<Announcement />

<div className="ankara-des">
    <div className="item-content">
<div className="ankara-shirt">
<img src="https://cdn.shopify.com/s/files/1/0101/4832/products/Angela_Natural_Tee.png?v=1606780388" />
</div> 
<div className="content">
<div>
    <h3>Ankara shirt</h3>
</div>

<div>
    <h5>Description</h5>
    <div>

    </div>
</div>
<div>
   <h3>Ksh.700</h3>
</div>

<div className="size">
<select className="select-size">
<div><option selected disabled>Size</option> </div> 
  <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
    <option value="extra-large">extra large</option>
   
</select>
</div>


<div className="select-color">
<p>selected color:<span style={{color:color}}>{color}</span></p>




<div className="colors-div">
<h5>Color</h5>

<div className="color-holder">
    <div className="maroon inner-color"  onMouseOver={()=> handleColorChange("maroon")} onMouseOut={()=>setColor("maroom")}></div>
</div>

<div className="color-holder">
    <div className="brown inner-color" onMouseOver={()=> handleColorChange("brown")} onMouseOut={()=>setColor("maroom")}></div>
</div>

<div className="color-holder">
    <div className="blue inner-color"   onMouseOver={()=> handleColorChange("blue")}  onClickCapture={()=>setColor("blue")}></div>
</div>

</div>

<div className="add-container">

<div className="add-tag">

<div><RemoveOutlinedIcon onClick={decrease} /></div>
<div><p>{Number}</p></div>
<div><AddOutlinedIcon  onClick={increase}/></div>
</div>

<div>
<button className="add-to">Add to Cart</button>
</div>
<div>
    <p><FavoriteBorderOutlinedIcon />Add to Wishlist</p>
    
</div>

</div>



</div>
</div>
</div>
</div>


<Newsletter />
<Footer />

        </div>
    )
}


export default SingleProductPage;

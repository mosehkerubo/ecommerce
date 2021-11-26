
import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";

import Product from "../components/Product/Product";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";



const ProductPage=()=>{
return(
<div>
<Nav />
<Announcement />
<div className="container">
<div className="dress-div">
    
  <div>
      <h2>Dresses</h2>
      </div> 
      <div className="dress-content">
          <div className="size-content">
      <div className="size">  
<div>
<p>Filter Products:Size</p>
</div>
<div>
<select className="select-size">
<div><option selected disabled>Size</option> </div> 
  <option value="small">small</option>
    <option value="medium">medium</option>
    <option value="large">large</option>
    <option value="extra-large">extra large</option>
   
</select>
</div>
</div>

<div className="color">

<div><p>color</p></div>
<div>
<select className="select-color">

<option >color</option>
 <option value="small">white</option>
    <option value="medium">black</option>
    <option value="large">Green</option>
    <option value="extra-large">Red</option>
   
</select>
</div>

</div>
</div>

<div className="price">
    <div>
<p>Sought Products:Price</p>
</div>
<select className="select-price">
<option selected disabled>Price</option>

    
    <option value="Highest">Highest to Lower</option>
    <option value="lowest">Lowest to Highest</option>
   
</select>
</div>
</div>
</div>
</div>

    <Product />
    <Newsletter />
    <Footer />

</div>
)
}





export default ProductPage;
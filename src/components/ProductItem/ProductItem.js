// import { List } from "@mui/material";
import React from "react";
// import { popularProducts } from "../../../data";
 import "./ProductItem.css"

 import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

 import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

 const ProductItem=({item})=>{
    return(
        <div className="product-items">

<div className="fav-icons">
<div className="icons">
<AddShoppingCartOutlinedIcon />
</div>
<div className="icons">
<SearchOutlinedIcon/>
</div>
<div className="icons">
<FavoriteBorderOutlinedIcon/>
</div>
         </div>  



            <div className="productItem-image">
            <img src={item.img}/>

    
      
</div>
<div className="empty-container">




</div>
 
            </div>
    )
}

export default ProductItem
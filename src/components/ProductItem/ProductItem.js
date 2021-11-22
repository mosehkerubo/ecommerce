// import { List } from "@mui/material";
import React from "react";
// import { popularProducts } from "../../../data";
 import "./ProductItem.css"
const ProductItem=({item})=>{
    return(
        <div>
            <img src={item.img}/>
            </div>
    )
}

export default ProductItem
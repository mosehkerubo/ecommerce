import React from "react";
import "./Product.css";
import ProductItem from "../ProductItem/ProductItem";

import { popularProducts } from "../../data";

const Product=()=>{
    return(
        <div className="productimages">
            {popularProducts.map(item=>{
                return(

                    <ProductItem item={item}/>
                )
            })}
        </div>
    )
}









export default Product;
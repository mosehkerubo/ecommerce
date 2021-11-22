import React from "react";
import "./CategoriesItem.css"



const CategoriesItem = ({item})=> {
    return(
       <div className="category-img-info"> 
          <div className="category-image">
              <img src={item.img}/>
          </div> 
<div className="category-info">
    <h1>{item.title}</h1>
   <div> <button className="btn-shop">Shop Now</button></div>
</div>

       </div>

       
    )
}





export default CategoriesItem;
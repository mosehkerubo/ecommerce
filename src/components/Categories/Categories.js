import React from 'react';
import "./Categories.css";
import { categories } from '../../data';
import CategoriesItem from '../CategoriesItem/CategoriesItem';
const Categories= ()=>{
    return(
        <div className="category-img-content">
            {
        categories.map(item=>{
       return(
           <CategoriesItem item={item} />
       )
            
        })
    }
        </div>
    )
};







export default Categories;
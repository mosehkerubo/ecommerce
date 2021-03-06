import React, { useState } from "react";

import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


import { slides } from "../../data";

import "./Slider.css"
import { Slide } from "@mui/material";
import { Translate } from "@mui/icons-material";





const Slider= () => {
    const[slideIndex,setSlideIndex]=useState(0);

    const handleClick=(direction)=>{
    
        if(
            
                direction==="left")
                {
                   setSlideIndex(slideIndex>0?slideIndex-1:2) 
                }else
                {
                  setSlideIndex(slideIndex<2?slideIndex+1:0)  
    
                }
    
        
    
        
    }
    return(
        <div className="slide-Wrapper">
            <div className="left-arrow" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlinedIcon/>
            </div>


            {
slides.map(slide=>{
return (
<div className="slide" style={{backgroundColor:slide.bg,transform:`translateX(${slideIndex*-100}vw)`}}>
                
<div className="slide-image">
    <img src={slide.img} />
</div>
<div className="slide-content">
<h1>{slide.title}</h1>
<p>{slide.des}</p>
<button className="btn1">Buy Now</button>
</div>

</div>
)

})

}
            


            
            <div className="right-arrow" onClick={()=> handleClick ("right")}>
           < ArrowRightOutlinedIcon/>
            </div>

           
    
            </div>


           
    
        
        
    )
};

export default Slider;

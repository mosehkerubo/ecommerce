import React from "react";

import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';


import { slides } from "../../data";

import "./Slider.css"
import { Slide } from "@mui/material";

const handleClick=()=>{
    alert(" hey rose")
}

const Slider= () => {
    return(
        <div className="slide-Wrapper">
            <div className="left-arrow" onClick={handleClick}>
                <ArrowLeftOutlinedIcon/>
            </div>


            {
slides.map(slide=>{
return (
<div className="slide">
                
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
            


            
            <div className="right-arrow" onClick={handleClick}>
           < ArrowRightOutlinedIcon/>
            </div>

           
    
            </div>


           
    
        
        
    )
};

export default Slider;

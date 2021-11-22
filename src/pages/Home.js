import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";
import Slider from"../components/Slider/Slider"
import Categories from"../components/Categories/Categories";
import Product from "../components/Product/Product";

// import Product from "./data.js";
const Home=()=>{
    return(
        <div>
    <Announcement />
    <Nav />
    <Slider />
    <Categories />
    <Product />
    </div>

        )
}






export default Home;
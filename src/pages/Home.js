import React from "react";
import Announcement from "../components/Announcements/Announcements";
import Nav from "../components/Nav/Nav";
import Slider from"../components/Slider/Slider"
import Categories from"../components/Categories/Categories";
const Home=()=>{
    return(
        <div>
    <Announcement />
    <Nav />
    <Slider />
    <Categories />
    </div>

        )
}






export default Home;
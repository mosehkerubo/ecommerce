import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
// import LocalMallOutlinedIcon from '@mui/icons-material/Mail';


import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-wrapper">
      <div className="left">
<span className="lang">en</span>


<div className="search-container">
<input type="text" className="input" placeholder="search product"/>
<SearchOutlinedIcon/>
</div>


      </div>




      <div className="center">
        <h1>Magoso Enterprise.</h1>
      </div>

      <div className="right">
<ul>
  <li><a href="#">Login</a></li>
  <li><a href="#">Register</a></li>
  
  <li><Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge></li>
</ul>
      </div>

    </div>
  );
};

export default Nav;

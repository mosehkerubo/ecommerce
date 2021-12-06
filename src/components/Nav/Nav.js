import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Badge from '@mui/material/Badge';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from "react-router-dom";

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
       <Link to="/"> <h1>Magoso Enterprise.</h1>
       </Link>
      </div>

      <div className="right">
<ul>
  <li><Link to="/LoginPage">Login</Link></li>
 <li>< Link to="/SignUpPage">Register</Link></li>
  
  <Link to="/CartPage"><li><Badge badgeContent={4} color="secondary">
        <LocalMallOutlinedIcon color="action" />
      </Badge></li></Link>
</ul>
      </div>

    </div>
  );
};

export default Nav;

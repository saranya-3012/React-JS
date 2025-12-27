import React from "react";
import "./Nav3.css";
import logo from "../../assets/Img/logo.jpg";

function Nav3(){
    return (
      <nav>
         
        <ul>
          <b className="logo3"> <img src={logo} height="17" width="25" /> clever </b>
          <input type="text" placeholder=" Search"/>
          <li> Home </li>
          <li> Products </li>
          <li> Features </li>
          <li> Pricing </li>
        </ul>
         
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
         <i class="fa-regular fa-comment"></i>
      </nav>
    )
}

export default Nav3
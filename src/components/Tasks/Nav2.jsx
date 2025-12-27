import React from "react";
import "./Nav2.css";
import logo from "../../assets/Img/logo.jpg";

function Nav2(){
    return (
      <nav>
         
        <ul>
          <b className="logo2"> <img src={logo} height="17" width="25" /> clever </b>
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

export default Nav2
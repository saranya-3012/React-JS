import React from "react";
import "./Nav1.css";
import logo from "../../assets/Img/logo.jpg";

function Nav1(){
    return (
      <nav>
         <ul>
          <b className="logo"> <img src={logo} height="17" width="25" /> clever </b>
          <li> Home </li>
          <li> Products </li>
          <li> Features </li>
          <li> Pricing </li>
         </ul>
         <ul class="sign">
          <li> Sign In </li>
          <button> Register </button>
         </ul>
      </nav>
    )
}

export default Nav1
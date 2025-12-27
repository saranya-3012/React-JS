import React from "react";
import "./Nav5.css";
import logo from "../../assets/Img/logo.jpg";
import profile from "../../assets/Img/profile.jpg";

function Nav5(){
    return (
      <nav>
         
        <ul>
          <b className="logo5"> <img src={logo} height="17" width="25" /> clever </b>
          <li> Home </li>
          <li> Products </li>
          <li> Features </li>
          <li> Pricing </li>
        </ul>
         
        <input type="text" placeholder=" Search" />
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
         <i class="fa-regular fa-comment"></i>
         <img className="pic" src={profile} height="28" width="30"/>
         <p> Magda</p>
         <select>
            <option></option>
         </select>
         
      </nav>
    )
}

export default Nav5
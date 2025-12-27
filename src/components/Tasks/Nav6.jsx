import React from "react";
import "./Nav6.css";
import logo from "../../assets/Img/logo.jpg";

function Nav6(){
    return (
      <nav>
         
        <ul>
          <b className="logo3"> <img src={logo} height="17" width="25" /> clever </b>
          <input type="text" placeholder=" Search"/>
          
        </ul>
         
         <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
         <i class="fa-regular fa-comment"></i>
      </nav>
    )
}

export default Nav6
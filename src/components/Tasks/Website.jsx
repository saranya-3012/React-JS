import React from "react";
import Home from "./Home";
import About from "./About";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Card from "./Card";
import Apicall from "./Apicall";
import "./Website.css";

export default function Website(){
    return(
        <div>
            <nav>
                <Link to = "/"> Home </Link> 
                <Link to = "/about">About</Link> 
                <Link to = "/products">Products</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element ={<About />} />
                <Route path="/products" element={<Apicall />} />

            </Routes>
        </div>       
    )
}
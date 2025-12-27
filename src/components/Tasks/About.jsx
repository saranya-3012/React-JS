import React from "react";
import marketing from "../../assets/Img/marketing.jpg";
import middle from "../../assets/Img/mid.jpg";
import "./About.css";

export default function About(){
    return(
        <div id="Aboutbg">
            <div id="first">
                <h1>About Us</h1>
                <img id="top" src={marketing}/>
                <p id="fpara">
                    We are an online marketing shopping platform offering a wide range of quality products 
                    at affordable prices. Our goal is to make shopping easy, fast, and secure by connecting 
                    customers with trusted sellers and delivering a smooth, convenient online shopping 
                    experience anytime, anywhere.
                </p>
                <br/>
                <button id="but">Contact</button>
            </div>

            <div id="second">
                <img id="mid" src={middle}/>
                <h2>Who Are We?</h2>
                <h5>We are a passionate team of innovators, designers, and technology experts working together to redefine the online shopping experience.</h5>
                <p>Our platform offers a wide range of products including fashion, electronics, home essentials, and lifestyle items. We combine smart technology with user-friendly design to ensure smooth browsing, secure payments, and quick delivery.</p>
                <p>What we offer:</p>
                <ul>
                    <li> --   Wide range of quality products</li><br />
                    <li> --   Easy product search & filters</li><br />
                    <li> --   Secure online payments</li><br />
                    <li> --   Fast & reliable delivery</li><br />
                    <li> --   24/7 customer support</li>
                </ul>

                <h3>How We Add Value to Your Shopping</h3>
                <p id="lpara">We continuously improve our platform to provide a stress-free shopping journey. From exclusive deals to personalized recommendations, we ensure every customer enjoys a smart and satisfying online shopping experience. Our mission is to make online shopping easy, affordable, and enjoyable for everyone.</p>
            </div>
        </div>
    )
}
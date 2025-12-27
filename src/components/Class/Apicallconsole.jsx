import React from "react";

function Apicallconsole(){

// This only displays in console not a direct webpage

    // lead is a function inside the Apicall component
    // async - API calls always take time, so they are asynchronous
    const lead  = async() => {

       // await - Waits until the response comes
       // fetch - Used to request data from a server
       let data = await fetch('https://fakestoreapi.com/products');
       let realdata = await data.json();
       console.log(realdata);
    }
    return(
       <div>
         <button onClick={lead}> Click me</button>
       </div>
    )
}

export default Apicallconsole
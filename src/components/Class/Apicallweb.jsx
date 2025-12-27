import React, {useState} from "react";

function Apicallweb(){

// This directly prints ins webpage not console

    // To get data from backend to frontend we requires to stre the data in State
    const [apicall, setapicall] = useState([]);

    const lead = async() => {

        let data = await fetch('https://fakestoreapi.com/products');
        let realdata = await data.json();

        // To store the data in apicall state
        setapicall(realdata);
    }
    return(
        <div>
            <button onClick={lead}> Click Me</button>

            {/* This prints Single data*/}
            <h2>{apicall[0]?.title}</h2>

            {/* To print Multiple data*/}

            {
            apicall.map((da) => (
                <div>
                    <h2>{da.id}</h2>
                    <h2>{da.title}</h2>
                </div>

            ))
            }
        </div>
    )
}
export default Apicallweb;
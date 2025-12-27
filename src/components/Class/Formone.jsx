import React, {useState} from "react";

export default function Formone(){

    const[name, setname] = useState("");       // To store the input data we create the State with Empty String

    const handlename = (e) => {                // event
         console.log(e.target.value);
         setname(e.target.value);
    };

    return(
        <div>
            <h1> Form </h1>
            <form>
                <label> Username : </label>
                <input type="text" onChange={handlename}  placeholder="Enter Your Name" />

                <br />
                <br />
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}
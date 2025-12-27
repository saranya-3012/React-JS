import React, {useState} from "react";
import Card from "./Card";

function Apicall(){

    const [apicall, setapicall] = useState([]);

    const lead = async() => {

        let data = await fetch('https://fakestoreapi.com/products');
        let realdata = await data.json();

        setapicall(realdata);
    }
    return(
        <div>
            <button onClick={lead}> Click Me</button>

            <div class="box">
               {
            apicall.map((da) => (
                <div>
                    
                    <Card data = {da}/>
                </div>
            ))
            }
            </div>
            
        </div>
    )
}
export default Apicall;
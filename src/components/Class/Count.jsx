import React, {useState} from "react";

function Count(){
    const [count] = useState(0);      // useState is a hook function
    return( 
        // Here count is a State so we requires to put that inside {}
        <div>
            <h2> Counter : {count} </h2>;      
            <button> Click Me </button>
        </div>
      
    )
}

export default Count
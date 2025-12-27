import React, {useEffect} from "react";

// Display inside the console only
export default function Lifecycle(){

    // useEffect - hook that used to handle Lifecycle in Functional Component
    useEffect(() => {

        // mounting is start of the function
        // mounting defines outside the return()
        lead()

        // unmounting is end of the function
        // unmouting defines inside the return()
        return() => {
            console.log("Unmounting");
        }
    } )

    const lead = () => {
        console.log("Mounting");
    }


    return(
       <div>
           <h1>Life Cycle</h1>
       </div>
    )
}
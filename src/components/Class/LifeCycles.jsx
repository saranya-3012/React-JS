import React, { useEffect, useState } from "react";

// Display in webpage directly
export default function Lifecycles() {

    const [apicall, setapicall] = useState([]);
    const [count, setcount] = useState(2);
    
    //Never update a dependency state inside useEffect unless you guard it with a condition
    useEffect(() => {

        // Without dependency Array This methods are called continously because fo state changes/ updates
        head() 
        
        return() => {
             console.log("Saran")
        }
                 
    }, [count])  // Dependency Array      
    
         // Empty Array [] - Avoid the continue execution of State
         // [state_name]   - 


    const head = async () => {

        let data = await fetch('https://fakestoreapi.com/products');
        let realdata = await data.json();

        setapicall(realdata);
    }

    const lead = async() => {
        setcount(7);
    }

        return (
            <div>
                <button onClick={lead}>Change Count</button>

                <div className="box">
                    {
                        // Unique Key - When React renders a list using .map(), it needs a way to track which item changed, was added, or removed.
                        // Keys help React identify which items have changed, been added, or removed, enabling efficient re-rendering and preventing UI bugs.
                        apicall.map((da,i) => (
                            <div key={da.id}>
                                <h2>{da.id}</h2>
                                <h2>{da.title}</h2>
                            </div>

                        ))
                    }
                </div>
            </div>
                )
}


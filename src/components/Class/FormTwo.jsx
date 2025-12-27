// react-hook form


import React from "react";
//  useForm - A hook from react-hook-form library to handle form logic easily
//            Avoid writing too much useState & Handle validation easily
import { useForm } from "react-hook-form";          


export default function FormTwo() {

    // handleSubmit, register are functions of useForm
    // register     - Connects input fields to the form
    // handleSubmit - Collects form data when submitting
    // watch        - Watches input values (like live preview)
    // errors       - Stores validation errors
    const { handleSubmit, register, watch, formState : {errors }} = useForm();

    // This function runs after successful validation
    // data - Contains all form values as an object
    const handlestore = (data) => {
        console.log("data", data);
    }

    // Shows validation errors in the browser console
    console.log(errors, "errors");

   
    // console.log(watch("name"), watch);
    return (
        <div>
            <h1> Form 2 </h1>
            <form>
                <label> Username : </label>
                
                {/* {...}  - Mingle all the data and functionalities inside the register*/}
                <input {...register("name", {required: true, maxLength: 4})} placeholder="Enter Your Name" />    

                <br />
                <br />

                <label> Age : </label>
                <input {...register("age")} placeholder="Your Age" />
                <button onClick={handleSubmit(handlestore)} type="submit"> Submit</button>
            </form>
        </div>
    )
}
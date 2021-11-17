import React from "react";
import Navbar from "../Components/Navbar";

import Resume from './resume.png'

const ResumePage = () =>{
    return(
        <div className = "w-full min-h-screen p-10 bg-blue-200">
            <Navbar selected="resume"/>

            <div className = "h-full pt-5 md:p-10 flex flex-col justify-center">
                
                <img className="object-scale-down w-min ml-auto mr-auto rounded-lg" src={Resume} alt="Resume"/>
               
               <span className = "ml-auto mr-auto p-3 cursor-pointer  bg-blue-400 mt-5  text-gray-200 hover:shadow-lg rounded-full">Download</span>
                
            </div>

        </div>
    )
}

export default ResumePage;
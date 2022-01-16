import React from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar";

import Resume from '../Components/ResumePage/resume.png';

const ResumePage = () =>{
    return(
        <div className = "w-full min-h-screen p-10 bg-blue-200">
            <Navbar selected="resume"/>

            <div className = "h-full pt-5 md:p-10 flex flex-col justify-center">
                
                <img className="object-scale-down w-min ml-auto mr-auto rounded-lg" src={Resume} alt="Resume"/>
                
               <span className="mt-5 flex flex-col sm:flex-row justify-center gap-4">
               <span className = " p-3 cursor-pointer text-center bg-blue-400 text-gray-200 hover:shadow-lg rounded-full">
               <a href = {process.env.PUBLIC_URL + "/ResumePDF.pdf"} download="AadityaShete Resume" >
                   Download Resume
                   </a>
                </span>
                <span className = " p-3 cursor-pointer text-center bg-blue-400 text-gray-200 hover:shadow-lg rounded-full">
               <a href = {process.env.PUBLIC_URL + "/Portfolio.pdf"} download="AadityaShete Portfolio" >
                   Download Portfolio
                   </a>
                </span>
                </span>  
            </div>
            <Footer color="blue" showSocials/>
        </div>
    )
}

export default ResumePage;
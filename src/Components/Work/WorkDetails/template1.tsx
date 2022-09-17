import React from "react";
import Footer from "../../footer";
import Navbar from "../../Navbar";


const Template1 = () =>{

    return(
        <div className = "w-full min-h-screen p-10 overflow-y-scroll bg-purple-200">
            <Navbar selected="work" />
           


         
            <Footer color="purple" showSocials/>
         </div>
    )

}

export default Template1;
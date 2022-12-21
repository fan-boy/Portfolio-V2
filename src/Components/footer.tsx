import React from "react";
import Socials from "./AboutPage/Socials";


interface FooterProps{
   white?:boolean
    showSocials?:true
}
const Footer = (props:FooterProps) =>{

    return(
        <span className= {`w-full mt-3 flex flex-col gap-2 justify-center text-center ${props.white?"text-white":"text-gray-500"}`}>
            <span>aaditya shete.</span>
            {props.showSocials &&
            <span><Socials white={props.white?true:false} className="flex flex-row gap-4 justify-center items-center" /></span>
}
    <span className="mt-5">© Dec 2022 • Made with love by Aaditya Shete</span>
        </span>
    );
}

export default Footer;
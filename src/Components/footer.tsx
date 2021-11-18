import React from "react";
import Socials from "./AboutPage/Socials";


interface FooterProps{
    color:string
    showSocials?:true
}
const Footer = (props:FooterProps) =>{

    return(
        <span className= {`w-full mt-3 flex flex-col gap-2 justify-center text-center text-${props.color}-500`}>
            <span>aaditya shete.</span>
            {props.showSocials &&
            <span><Socials className="flex flex-row gap-4 justify-center items-center" /></span>
}
        </span>
    );
}

export default Footer;
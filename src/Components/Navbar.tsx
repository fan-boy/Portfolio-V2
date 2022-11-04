import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Socials from "./AboutPage/Socials";

interface NavbarProps{
    selected:string;
    hideNavbar?:boolean;
    white?:boolean
}



const Navbar =(props:NavbarProps) =>{
    const [cardClicked,setCardClicked] = useState("");
    const [secondRoute,setSecondRoute] = useState("");
    const location = useLocation();
    let icon = "";
    let color = props.white?"text-white": "text-blue-400";
    let navBarHoverColor = "text-blue-600";
    useEffect(() =>{
        if(location.pathname.split("/")[2]){
            setSecondRoute(location.pathname.split("/")[2])
        }
    },[])
    switch(props.selected){
        case "work":
            icon = "👨🏻‍💻";
            
            break;
        case "about":
            icon = "💁🏻‍♂️";
           
            break;
        case "resume":
            icon = "📃";
            
            break;
        case "fun":
            icon = "🎨";
           
            break;

    }

    const onClick = (moniker:string) =>{
        if(moniker === "home" && location.pathname==="/"){}else{
        setCardClicked(moniker);   
        }
    }
    
    
    return(
        <div className="container  mx-auto max-w-5xl bg-transparent flex flex-row sm:justify-between">
            {cardClicked !=="" && cardClicked !=="home" && <Navigate to={`/${cardClicked}`}/>}
            {cardClicked !=="" && cardClicked ==="home" && <Navigate to="/"/>}
            <div className = "-ml-2 flex flex-row">
            <span onClick={() =>onClick("home")} className={`text-lg sm:text-2xl ${color} hover:text-gray-500 cursor-pointer`}> aaditya. </span>
            <span className="text-xl hover:text-gray-500 cursor-pointer sm:text-2xl sm:flex">{icon}</span>
                {props.selected && props.selected !== "" &&
                    <span  className={`text-lg sm:hidden ${color} cursor-pointer ml-1 flex flex-row items-center`}>
                       
                        {secondRoute && secondRoute!=="" && 
                        <span className="flex flex-row items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="w-4 h-4 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                       <span className={`ml-1`}>
                    {secondRoute}
                    </span> 
                    </span>
                    }
                    </span>
                    
                }
            </div>
            {!props.hideNavbar &&
            <div className="hidden sm:flex sm:flex-row gap-6 items-end">
            
            <span 
            className = {(props.selected ==="work"?`text-2xl cursor-default underline ${props.white?"text-white":"text-gray-500"} `:`text-xl ${props.white?"text-white":"text-gray-500"} cursor-pointer hover:${props.white?"text-gray-500 ":"text-blue-400 "}`) + (secondRoute !=="" ? ` hover:${navBarHoverColor}`:"")}
            onClick = {() =>onClick("home")}
            >work</span>
            <span
             className = {(props.selected ==="about"?`text-2xl cursor-default underline ${props.white?"text-white":"text-gray-500"} underline`:`text-xl ${props.white?"text-white":"text-gray-500"} cursor-pointer hover:${props.white?"text-gray-500 ":"text-blue-400 "}`) }
             onClick = {() =>onClick("about")}
            >about me</span>
            <span 
            className = {(props.selected ==="resume"?`text-2xl cursor-default underline ${props.white?"text-white":"text-gray-500"} underline`:`text-xl ${props.white?"text-white":"text-gray-500"} cursor-pointer hover:${props.white?"text-gray-500 ":"text-blue-400 "}` )}
            onClick = {() =>onClick("resume")}
            >resume</span>
            <span 
            className = {(props.selected ==="visualart"?`text-2xl cursor-default underline ${props.white?"text-white":"text-gray-500"} underline`:`text-xl ${props.white?"text-white":"text-gray-500"} cursor-pointer hover:${props.white?"text-gray-500 ":"text-blue-400 "}`)} 
            onClick = {() =>onClick("fun")}
            >fun stuff</span>
            </div>
}   
{props.hideNavbar &&
    <Socials white={false} className = "hidden sm:flex sm:flex-row gap-4 items-end" />     
}
            </div>
    );
}

export default Navbar;
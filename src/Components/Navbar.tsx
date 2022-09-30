import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Socials from "./AboutPage/Socials";

interface NavbarProps{
    selected:string;
    hideNavbar?:boolean
}



const Navbar =(props:NavbarProps) =>{
    const [cardClicked,setCardClicked] = useState("");
    const [secondRoute,setSecondRoute] = useState("");
    const location = useLocation();
    let icon = "";
    let color = "text-gray-500";
    let navBarHoverColor = "text-gray-600";
    useEffect(() =>{
        if(location.pathname.split("/")[2]){
            setSecondRoute(location.pathname.split("/")[2])
        }
    },[])
    switch(props.selected){
        case "work":
            icon = "👨🏻‍💻";
            color = "text-purple-500";
            navBarHoverColor = "text-purple-600"
            break;
        case "about":
            icon = "💁🏻‍♂️";
            color = "text-green-500";
            navBarHoverColor = "text-green-600"
            break;
        case "resume":
            icon = "📃";
            color = "text-blue-500";
            navBarHoverColor = "text-blue-600"
            break;
        case "visualart":
            icon = "🎨";
            color = "text-yellow-500";
            navBarHoverColor = "text-yellow-600"
            break;

    }

    const onClick = (moniker:string) =>{
        if(moniker === "home" && location.pathname==="/"){}else{
        setCardClicked(moniker);   
        }
    }
    
    
    return(
        <div className="xl:container xl:mx-auto flex flex-row sm:justify-between">
            {cardClicked !=="" && cardClicked !=="home" && <Navigate to={`/${cardClicked}`}/>}
            {cardClicked !=="" && cardClicked ==="home" && <Navigate to="/"/>}
            <div className = "-ml-2 flex flex-row">
            <span onClick={() =>onClick("home")} className={`text-lg sm:text-2xl ${color} hover:text-gray-500 cursor-pointer`}> aaditya. </span>
            <span className="hidden text-xl hover:text-gray-500 cursor-pointer sm:text-2xl sm:flex">{icon}</span>
                {props.selected && props.selected !== "" &&
                    <span  className={`text-lg sm:hidden ${color} cursor-pointer ml-1 flex flex-row items-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" className="w-4 h-4 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                           <span onClick={() => onClick(props.selected)} className={`hover:${navBarHoverColor} ml-1 whitespace-nowrap`}>
                        {props.selected} {icon}
                        </span> 
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
            className = {(props.selected ==="work"?"text-2xl cursor-default text-purple-500":"text-xl text-gray-500 cursor-pointer hover:text-purple-500") + (secondRoute !=="" ? ` hover:${navBarHoverColor}`:"")}
            onClick = {() =>onClick("work")}
            >work</span>
            <span
             className = {props.selected ==="about"?"text-2xl cursor-default text-green-500":"text-xl text-gray-500 cursor-pointer hover:text-green-500" }
             onClick = {() =>onClick("about")}
            >about me</span>
            <span 
            className = {props.selected ==="resume"?"text-2xl cursor-default text-blue-500":"text-xl text-gray-500 cursor-pointer hover:text-blue-500" }
            onClick = {() =>onClick("resume")}
            >resume</span>
            <span 
            className = {props.selected ==="visualart"?"text-2xl cursor-default text-yellow-500":"text-xl text-gray-500 cursor-pointer hover:text-yellow-500"} 
            onClick = {() =>onClick("visualart")}
            >visual art</span>
            </div>
}   
{props.hideNavbar &&
    <Socials className = "hidden sm:flex sm:flex-row gap-4 items-end" />     
}
            </div>
    );
}

export default Navbar;
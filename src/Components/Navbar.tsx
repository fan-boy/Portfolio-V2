import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Socials from "./AboutPage/Socials";

interface NavbarProps{
    selected:string;
    hideNavbar?:boolean
}



const Navbar =(props:NavbarProps) =>{
    const [cardClicked,setCardClicked] = useState("");
    const location = useLocation();
    let icon = "";
    let color = "text-gray-500";
    switch(props.selected){
        case "work":
            icon = "👨🏻‍💻";
            color = "text-purple-500";
            break;
        case "about":
            icon = "💁🏻‍♂️";
            color = "text-green-500";
            break;
        case "resume":
            icon = "📃";
            color = "text-blue-500";
            break;
        case "visualart":
            icon = "🎨";
            color = "text-yellow-500";
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
            <span onClick={() =>onClick("home")} className={`text-2xl ${color} hover:text-gray-500 cursor-pointer`}> aaditya. {icon}</span>
           
            {!props.hideNavbar &&
            <div className="hidden sm:flex sm:flex-row gap-6 items-end">
            
            <span 
            className = {props.selected ==="work"?"text-2xl cursor-default text-purple-500":"text-xl text-gray-500 cursor-pointer hover:text-purple-500"}
            onClick = {() =>onClick("work")}
            >work</span>
            <span
             className = {props.selected ==="about"?"text-2xl cursor-default text-green-500":"text-xl text-gray-500 cursor-pointer hover:text-green-500"}
             onClick = {() =>onClick("about")}
            >about me</span>
            <span 
            className = {props.selected ==="resume"?"text-2xl cursor-default text-blue-500":"text-xl text-gray-500 cursor-pointer hover:text-blue-500"}
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
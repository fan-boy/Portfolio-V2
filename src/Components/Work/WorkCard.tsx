import React from "react";

interface WorkCardProps{
    class:string,
    title:string,
    service:string,
    imgUrl?:string
    loading?:boolean
}

const WorkCard = (props:WorkCardProps) =>{
    
    return(
        <span className={`w-full  lg:w-workcard relative bg-purple-100 h-100 rounded-lg overflow-hidden ${props.class}`+ (props.loading? ' animate-pulse':'')} >
           {!props.loading && <img className="w-full  h-full object-cover" src={props.imgUrl} alt="test"/>}
           <span className="absolute bottom-1/4 left-1/10 text-2xl text-white flex flex-col" >
                {props.title}
                <span>
                    {props.service}
                </span>

            </span> 
        </span> 
    );
}

export default WorkCard;
import React from "react";

interface WorkCardProps{
    class:string,
    title:string,
    service:string,
    loading?:boolean
}

const WorkCard = (props:WorkCardProps) =>{
    
    
    return(
        <span className={`w-full  sm:w-4/5 relative bg-purple-100 h-96 rounded-lg overflow-hidden ${props.class}`+ (props.loading? ' animate-pulse':'')} >
           {!props.loading && <img className="w-full  h-full object-cover" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80" alt="test"/>}
           <span className="absolute bottom-1/4 left-1/10 text-2xl text-white" >
                {props.title}
            </span> 
        </span> 
    );
}

export default WorkCard;
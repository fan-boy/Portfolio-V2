import React from "react";

import Chainreactive from "../../Pages/HomepageData/Group 1.png"

interface WorkCardProps{
    class:string,
    title:string,
    service:string,
    imgUrl?:string,
    loading?:boolean,
    description:string
    url:string,
    link:string,
    color:string,
    onCardClick:(id:string,link?:string) => void;
}

const WorkCard = (props:WorkCardProps) =>{

    const onClick=() =>{
        props.onCardClick(props.link,props.url);
        // if(props.url && props.url!==""){
        //     window.open(props.url,'_blank');
        // }
    }
    
    return(
        <span onClick={onClick} className={`w-full bg-${props.color}-400 rounded-3xl p-10 rounded-lg overflow-hidden ${props.class}`+ (props.loading? ' animate-pulse': ` hover:bg-${props.color}-600`) + (props.url !==""?" cursor-pointer":"")} >
           {!props.loading && props.imgUrl && props.imgUrl.length >0 && <img className="w-full h-80 object-scale-down" src={props.imgUrl} alt="test"/>}
           <span className="font-sans font-bold text-3xl text-gray flex flex-col" >
                {props.title}
                
                <span className=" mt-2 font-sans font-medium text-xl">
                    {props.service}
                </span>
                <span className=" mt-2 pr-2 font-sans font-normal text-lg">
                    {props.description}
                </span>

            </span> 
        </span> 
    );
}

export default WorkCard;
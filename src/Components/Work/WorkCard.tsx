import React from "react";

interface WorkCardProps{
    class:string,
    title:string,
    service:string,
    imgUrl?:string,
    loading?:boolean,
    description:string
    url:string
}

const WorkCard = (props:WorkCardProps) =>{

    const onClick=() =>{
        if(props.url && props.url!==""){
            window.open(props.url,'_blank');
        }
    }
    
    return(
        <span onClick={onClick} className={`w-full  lg:w-workcard relative bg-purple-100 h-100 rounded-lg overflow-hidden ${props.class}`+ (props.loading? ' animate-pulse':'') + (props.url !==""?" cursor-pointer":"")} >
           {!props.loading && <img className="w-full  h-full object-scale-down" src={props.imgUrl} alt="test"/>}
           <span className="absolute bottom-3 left-1/10 text-2xl text-purple-500 flex flex-col" >
                {props.title}
                
                <span className=" mt-2 text-base">
                    {props.service}
                </span>
                <span className=" mt-2 pr-2 text-sm">
                    {props.description}
                </span>

            </span> 
        </span> 
    );
}

export default WorkCard;
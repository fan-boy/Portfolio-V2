import React, { useState } from "react";
import Man from "./cursors/man.png";
import About from "./cursors/about.png";
import Resume from "./cursors/resume.png";
import Intrest from "./cursors/intrests.png";


interface HomePageCardsProps{
    color:string;
    type:HomeCardType;
    text:string;
    id:string;
    onCardClick:(id:string) => void;
}
export enum HomeCardType{
    Work,
    About,
    Resume,
    VisualArt
}

const HomePageCard = (props:HomePageCardsProps) =>{
    let hoverImage = Man;
    switch(props.type){
        case HomeCardType.Work:
            hoverImage = Man;
            break;
        case HomeCardType.About:
            hoverImage=About;
            break;
        case HomeCardType.Resume:
            hoverImage = Resume;
            break;
        case HomeCardType.VisualArt:
            hoverImage = Intrest;
            break;

    }

    return(
        <div>
        <span style={{ cursor:`url(${hoverImage}),wait` }} onClick = {()=>props.onCardClick(props.id)} className={`w-full rounded-md relative flex pl-10 hover:shadow-xl items-center text-2xl h-full bg-${props.color}-200 text-${props.color}-500`}>
            <img className="sm:hidden absolute top-1 right-1" src={hoverImage} />
            {props.text}
        </span>
        </div>
    );
} 

export default HomePageCard;


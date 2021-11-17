import React, { useState } from "react";
import HomePageCard, { HomeCardType } from "../Components/HomePage/HomepageCards";
import {
    Navigate,
  } from "react-router-dom";
import Navbar from "../Components/Navbar";

const HomePage = () =>{
    const [cardClicked,setCardClicked] = useState("");
    const onCardClick = (id:string) =>{
     setCardClicked(id);   
    }
    return(
        <div className = "w-full h-screen p-10 bg-gray-200">
            {cardClicked !=="" && <Navigate to={`/${cardClicked}`}/>}
            <Navbar hideNavbar selected=""/>

            <div className = "w-full h-full pt-5 md:p-10 gap-2 grid grid-cols-1 md:grid-cols-2 ">
                <HomePageCard type={HomeCardType.Work} color="purple" id="work" onCardClick={onCardClick} text="work" />
                <HomePageCard type={HomeCardType.About} color="green" text="about me" id="about" onCardClick={onCardClick} />
                <HomePageCard type={HomeCardType.Life} color="blue" text="resume"  id="resume" onCardClick={onCardClick}/>
                <HomePageCard type={HomeCardType.Intrests} color="yellow" text="illustrations/pictures" id="graphic" onCardClick={onCardClick} />
            </div>

        </div>
    )
}

export default HomePage;
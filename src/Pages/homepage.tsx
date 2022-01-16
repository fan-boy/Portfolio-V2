import React, { useState } from "react";
import HomePageCard, { HomeCardType } from "../Components/HomePage/HomepageCards";
import {
    Navigate,
  } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

const HomePage = () =>{
    const [cardClicked,setCardClicked] = useState("");
    const onCardClick = (id:string) =>{
     setCardClicked(id);   
    }
    return(
        <div className="p-10 w-full bg-gray-200">
        <div className = "w-full h-screen ">
            {cardClicked !=="" && <Navigate to={`/${cardClicked}`}/>}
            <Navbar hideNavbar selected=""/>

            <div className = "w-full h-full pt-5 md:p-10 gap-2 grid grid-cols-1 md:grid-cols-2 ">
                <HomePageCard type={HomeCardType.Work} color="purple" id="work" onCardClick={onCardClick} text="work" />
                <HomePageCard type={HomeCardType.About} color="green" text="about me" id="about" onCardClick={onCardClick} />
                <HomePageCard type={HomeCardType.Resume} color="blue" text="resume/portfolio"  id="resume" onCardClick={onCardClick}/>
                <HomePageCard type={HomeCardType.VisualArt} color="yellow" text="visual art" id="visualart" onCardClick={onCardClick} />
            </div>

        </div>
        <Footer color="gray"/>
        </div>
    )
}

export default HomePage;
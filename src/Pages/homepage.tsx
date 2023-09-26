import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar";
import WorkCard from "../Components/Work/WorkCard";
import WorkData from "../Components/Work/work.json";
import { Work } from "../Models/baseModels";
import { Navigate } from "react-router-dom";
import image from "../Pages/HomepageData/Group 1.png"
import OtherWork from "../Components/Work/OtherWork.json";

const Homepage = () =>{


    const [workDetails,setWorkDetails] = useState<Work[]>([]);
    const [otherWork,setOtherWork] = useState<Work[]>([]);
    const [workRenderer,setWorkRenderer] = useState<JSX.Element[]>([]);
    const [otherWorkRenderer,setOtherWorkRenderer] = useState<JSX.Element[]>([]);
    const [cardClicked,setCardClicked] = useState("");

    useEffect(() =>{
        let body:any = WorkData;
        let body2:any = OtherWork;
        let otherWorkPortfolio:Work[] = body2;
            let workPortfolio:Work[] = body;
            if(workPortfolio && workPortfolio.length > 0)
            setWorkDetails(workPortfolio); 
        
            if(otherWorkPortfolio && otherWorkPortfolio.length > 0) setOtherWork(otherWorkPortfolio);
    },[])

    const onCardClick = (id:string,link?:string) =>{
     if(id!==""){   
     setCardClicked(id);   
     }else if(link){
         window.location.href = link;
     }
     
    }
       useEffect(() =>{
        let renderer:JSX.Element[] = [];
        if(workDetails && workDetails.length >0 ){
            workDetails.sort((a,b) => a.id-b.id);
            workDetails.forEach(p => {
                
                    renderer.push(
                        <WorkCard class="font-sans" color={p.color} title={p.title} service={p.service} imgUrl={p.imageSrc} link={p.link} description = {p.description} onCardClick={onCardClick} url={p.url} />
                    )
                
            });
            
        }
        setWorkRenderer(renderer);
    },[workDetails])

    useEffect(() =>{
        let otherRenderer:JSX.Element[] = [];
        if(otherWork && otherWork.length >0 ){
            otherWork.sort((a,b) => a.id-b.id);
            otherWork.forEach(p => {
                
                otherRenderer.push(
                        <WorkCard class="font-sans" color={p.color} title={p.title} service={p.service} imgUrl={p.imageSrc} link={p.link} description = {p.description} onCardClick={onCardClick} url={p.url} />
                    )
                
            });
            
        }
        setOtherWorkRenderer(otherRenderer);
    },[otherWork])

   
    return(
        <div className="w-full h-full min-h-screen sm:p-10 p-5">
            <div className="w-full  container mx-auto max-w-5xl h-full">
                
                
            <Navbar selected="work"/>
     
            {cardClicked && cardClicked !=="" && <Navigate to={`/${cardClicked.toLowerCase()}`} />}
            
                   {/* <div className=" w-full relative  flex flex-col overflow-hidden leading-close">
                    <div className=" flex text-white flex-col font-bold  font-serif sm:text-auto text-8xl smmobile:text-9xl ">
                    <span className="sm:-ml-5 sm:-mt-5 w-full text-left ">
                        Aaditya
                    </span>
                    <span className=" w-full text-right">
                        Shete
                    </span>
                    </div>
                    <div className=" absolute text-black font-serif inset-0 mx-auto my-auto w-1/2 flex flex-col justify-center text-4xl lg:text-9xl sm:text-6xl">
                   
                    <span className="">
                        Designer
                    </span>
                    <span className="text-right">
                        Developer
                    </span>
                    </div>
                    <span className="mx-2 lg:ml-0 w-full lg:absolute lg:bottom-0 lg:left-2 flex font-sans flex-col justify-center text-white text-center ">
                       <div className="w-min whitespace-nowrap md:text-3xl text-center"> 
                        HCIM grad student at UMD
                        </div> 
                        <span className="w-max mt-2 text-xs md:text-base p-2 rounded-lg md:whitespace-nowrap  bg-red-300"> 
                       Currently looking for Summer 2023 internship.
                        </span> 
                        </span>
                    
                    </div> */}

                    <div className="  flex justify-left sm:mx-20 my-20">
                       
                       <div className=" flex flex-col sm:w-2/3 text-gray-800 justify-center sm:text-3xl text-xl">
                        <span className="">
                        Hello  👋🏼,  I’m Aaditya!
                        </span>
                        <span className="mt-10 flex flex-col">
                       <span className="font-semibold"><span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-800 to-blue-500">Curious</span> Product Designer </span>
                       <span className="font-semibold"><span className="text-blue-400">Empathetic</span> Software Developer</span>
                        </span>
                        <span className="mt-10 flex flex-col ">
                        <span className="w-min whitespace-nowrap text-xs sm:text-base text-center"> 
                        HCIM grad student at University of Maryland, CP
                        </span> 
                        <span className="w-max mt-2 text-xs md:text-base p-2 rounded-lg md:whitespace-nowrap "> 
                       Graduating May 2024
                        </span> 
                        </span>
                        </div>
                    </div>

                    

                        <div className= "w-full font-sans  my-10  text-gray-800 ">
                            <span className="w-full sm: px-10 text-center text-3xl font-bold">
                                Work
                            </span>
                           
                        </div>
                        </div>
                        <span className = "sm:mx-5 sm:p-5 rounded-2xl text-white md:flex md:grid md:grid-cols-3 justify-center gap-8 loading flex flex-col">
                                {workRenderer}
                            </span>
                            <div className="w-full  container mx-auto max-w-5xl h-full">
                        <div className= "w-full font-sans  my-10  text-gray-800 ">
                            <span className="w-full sm:px-10 text-center text-3xl font-bold">
                                Other Work and Some Fun
                            </span>
                            <span className = "my-10 md:my-0 sm:mx-5 sm:p-5 rounded-2xl text-white md:grid md:grid-cols-2 gap-8 loading flex flex-col">
                                {otherWorkRenderer}
                            </span>
                        </div>
                        </div>

           
            <Footer showSocials />
        </div>
    )

}

export default Homepage
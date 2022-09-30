import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, redirect, Navigate } from "react-router-dom";
import Footer from "../Components/footer";
import HomePageCard from "../Components/HomePage/HomepageCards";
import Navbar from "../Components/Navbar";
import WorkCard from "../Components/Work/WorkCard";
import { callApiWithToken } from "../fetch";
import { Work } from "../Models/baseModels";
import WorkData from "../Components/Work/work.json";

const WorkPage = () =>{
    const [cardClicked,setCardClicked] = useState("");
    const [isLoading,setLoading] = useState(false);
    const [workDetails,setWorkDetails] = useState<Work[]>([]);
    const [workRenderer,setWorkRenderer] = useState<JSX.Element[]>([]);
    const history = useLocation();
    const navigationHistory = useNavigate();


    useEffect(() =>{
        let body:any = WorkData;
            let workPortfolio:Work[] = body;
            if(workPortfolio && workPortfolio.length > 0)
            setWorkDetails(workPortfolio); 
        
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
        if(workDetails && workDetails.length >0 && !isLoading){
            workDetails.sort((a,b) => a.id-b.id);
            workDetails.forEach(p => {
                if(p.id %2 !==0){
                    renderer.push(
                        <WorkCard class="sm:justify-self-end" title={p.title} service={p.service} imgUrl={p.imageSrc} link={p.link} description = {p.description} onCardClick={onCardClick} url={p.url} />
                    )
                }else{
                    renderer.push(
                        <WorkCard class="mt-5" title={p.title} service={p.service} imgUrl={p.imageSrc} onCardClick={onCardClick} link={p.link} description = {p.description} url={p.url}/>
                    )
                }
            });
            
        }else{
            renderer.push(
                <WorkCard class="sm:justify-self-end" title={""} service={""} onCardClick={onCardClick} link="" loading description={""} url = {""} />
            );
            renderer.push(
                <WorkCard class="mt-5" title={""} service={""} onCardClick={onCardClick} link="" loading description="" url = {""} />
            );
            renderer.push(
                <WorkCard class="sm:justify-self-end" title={""} service={""} onCardClick={onCardClick} link="" loading description="" url = {""} />
            );
        }
        setWorkRenderer(renderer);
    },[workDetails,isLoading])

    return(
        <div className = "w-full min-h-screen p-10 bg-purple-200">
            <div className="xl:container xl:mx-auto">
            <Navbar selected="work" />
           
            {cardClicked && cardClicked !=="" && <Navigate to={`/work/${cardClicked.toLowerCase()}`} />}

         <div className = "w-full pt-5 sm:p-10 gap-4 grid grid-cols-1 sm:grid-cols-2 ">
              { workRenderer}
                
            </div>
            <Footer color="purple" showSocials/>
            </div>
         </div>


    )
}

export default WorkPage;
import React, { useEffect, useState } from "react";
import HomePageCard from "../Components/HomePage/HomepageCards";
import Navbar from "../Components/Navbar";
import WorkCard from "../Components/Work/WorkCard";
import { callApiWithToken } from "../fetch";
import { Graphics, GraphicsType, Work } from "../Models/baseModels";

const GraphicPage = () =>{
    const [isLoading,setLoading] = useState(false);
    const [content,setContent] = useState<Graphics[]>([]);
    const [illustrationRenderer,setIllustrationRenderer] = useState<JSX.Element[]>([]);
    const [photographRenderer,setPhotographRenderer] = useState<JSX.Element[]>([]);

    const getWorkData = async() =>{
        setLoading(true);
        let workData = await callApiWithToken("","https://portfolio-20015.firebaseio.com/data/graphics.json");
        if(workData.status === 200){
            let body:any = workData.body;
            let graphicsPortfolio:Graphics[] = body;
            if(graphicsPortfolio && graphicsPortfolio.length > 0){
            setContent(graphicsPortfolio); 
            
        }
        }
        setLoading(false);
    }

    useEffect(() =>{
        (async() =>{
            await getWorkData();
        })();
    },[])

   

    
    useEffect(() =>{
        let illustrationRenderer:JSX.Element[] = [];
        let photographRenderer:JSX.Element[] = [];
        if(((content.length >0)) && !isLoading){
            
            content.forEach(p => {
                if(p.type === GraphicsType.Illustration){
                    illustrationRenderer.push(
                        <div className="p-4  my-6  ">
                        <img className="w-full bg-yellow-100 h-full min-h-96  rounded-lg" src = {p.url} alt="illustration"/>
                       </div>
                    )
                }else if(p.type === GraphicsType.photograph){
                    photographRenderer.push(
                        <div className=" p-4 my-6 ">
                        <img className="w-full bg-yellow-100  min-h-96  rounded-lg max-h-screen " src = {p.url} alt="photograph"/>
                       </div>
                    )
                }
                
            });
            
        }else{
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                       </div>
            );
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                       </div>
            );
            illustrationRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                </div>
            );
            photographRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                </div>
            );
            photographRenderer.push(
                <div className="w-full bg-yellow-100 rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                       </div>
            );
            photographRenderer.push(
                <div className="w-full rounded-lg h-96 animate-pulse p-4  my-6  ">
                        
                       </div>
            );
        }
        setIllustrationRenderer(illustrationRenderer);
        setPhotographRenderer(photographRenderer);
    },[content,isLoading])

    return(
        <div className = "w-full min-h-screen p-10 overflow-y-scroll bg-yellow-200">
            <Navbar selected="visualart" />
           
<div className = "w-full pt-5 sm:p-10 text-center">
{illustrationRenderer.length > 0 && <>
<span className="text-4xl font-bold text-yellow-600">Illustrations</span></>}
<div className="flex flex-col sm:block sm:masonry before:box-inherit after:box-inherit">
{illustrationRenderer}
  </div>

{photographRenderer.length > 0 && <>
<span className={"text-4xl font-bold text-yellow-600" + (illustrationRenderer.length > 0?" mt-10":"")}>Photography</span></>}
<div className="flex flex-col sm:block sm:masonry before:box-inherit after:box-inherit">
{photographRenderer}
  </div>



           
  

</div>
</div>

        


    )
}

export default GraphicPage;
import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import HomePageCard from "../Components/HomePage/HomepageCards";
import Navbar from "../Components/Navbar";
import WorkCard from "../Components/Work/WorkCard";
import { callApiWithToken } from "../fetch";
import { Work } from "../Models/baseModels";

const WorkPage = () =>{
    const [cardClicked,setCardClicked] = useState("");
    const [isLoading,setLoading] = useState(false);
    const [workDetails,setWorkDetails] = useState<Work[]>([]);
    const [workRenderer,setWorkRenderer] = useState<JSX.Element[]>([]);

    const getWorkData = async() =>{
        setLoading(true);
        let workData = await callApiWithToken("","https://portfolio-20015.firebaseio.com/data/portfolio/projects.json");
        if(workData.status === 200){
            let body:any = workData.body;
            let workPortfolio:Work[] = body;
            if(workPortfolio && workPortfolio.length > 0)
            setWorkDetails(workPortfolio); 
        }
        setLoading(false);
    }

    useEffect(() =>{
        (async() =>{
            await getWorkData();
        })();
    },[])

    const onCardClick = (id:string) =>{
     setCardClicked(id);   
    }

    
    useEffect(() =>{
        let renderer:JSX.Element[] = [];
        if(workDetails && workDetails.length >0 && !isLoading){
            workDetails.sort((a,b) => a.id-b.id);
            workDetails.forEach(p => {
                if(p.id %2 !==0){
                    renderer.push(
                        <WorkCard class="sm:justify-self-end" title={p.title} service={p.service} imgUrl={p.imageSrc} />
                    )
                }else{
                    renderer.push(
                        <WorkCard class="mt-5" title={p.title} service={p.service} imgUrl={p.imageSrc} />
                    )
                }
            });
            
        }else{
            renderer.push(
                <WorkCard class="sm:justify-self-end" title={""} service={""} loading />
            );
            renderer.push(
                <WorkCard class="mt-5" title={""} service={""} loading/>
            );
            renderer.push(
                <WorkCard class="sm:justify-self-end" title={""} service={""} loading/>
            );
        }
        setWorkRenderer(renderer);
    },[workDetails,isLoading])

    return(
        <div className = "w-full min-h-screen p-10 overflow-y-scroll bg-purple-200">
            <Navbar selected="work" />
           


         <div className = "w-full pt-5 sm:p-10 gap-4 grid grid-cols-1 sm:grid-cols-2 ">
              { workRenderer}
                
            </div>
            <Footer color="purple" showSocials/>
         </div>


    )
}

export default WorkPage;
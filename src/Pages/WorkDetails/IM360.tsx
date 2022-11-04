import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import Footer from "../../Components/footer";
import HomePageCard from "../../Components/HomePage/HomepageCards";
import Navbar from "../../Components/Navbar";
import WorkCard from "../../Components/Work/WorkCard";
import { callApiWithToken } from "../../fetch";
import { Work } from "../../Models/baseModels";

const IM360 = () =>{
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
        
        
    },[workDetails,isLoading])

    return(
        <div className = "w-full min-h-screen p-10 overflow-y-scroll bg-purple-200">
            <Navbar selected="work" />
           


         <div className = "w-full relative pt-5 ">
              <div className="flex sm:items-center flex-col  ">
              <p className="text-7xl sm:text-9xl w-1/2 -ml-10 lg:ml-0 font-bold text-purple-500">
              Ingram Micro India SSC
              </p>
              <p className="text-3xl xl:text-5xl w-1/2 -ml-10 lg:ml-0 font-bold text-purple-500">
              A CRM tool project
              </p>
              </div>
              {/* <p className="text-3xl mt-10 font-bold text-purple-500">
                Overview  Problem Statement  Roles  Goals   Design Process  Results
              </p> */}
            <div>
              <div className="my-20">
              
              <p className=" sticky top-0 text-3xl xl:text-5xl mt-10 font-bold text-purple-500">
                Overview  
              </p>
              <div className="text-xl xl:text-3xl mt-10 bg-purple-100 p-10 rounded text-purple-500">
              Chain Reactive LLC is a Pennsylvania based startup in the food and beverage industry.  We are currently developing a responsive website that would provide a comprehensive experience for users looking to order online from local businesses. We are doing this while being constantly in touch with business owners for their feedback. 
As a part of this project, we wanted to give the consumer more flexibility in terms of their order delivery or pick up times as the business owners felt that this would be an important feature. 
</div>
              <div>
                  <div className="h-screen">

                  </div>
              </div>  
              </div>

              <div className="my-20">
              <div className = "w-full sticky top-0">
              <p className="text-3xl mt-10 font-bold text-purple-500">
                Problem Statement  
              </p>
              </div>
              <div>
                  
              </div>
              </div>

              <div className="my-20">
              <div className = "w-full sticky top-0">
              <p className="text-3xl mt-10 font-bold text-purple-500">
                Roles
              </p>
              </div>
              <div>
                  
              </div>
              </div>

              <div className="my-20">
              <div className = "w-full sticky top-0">
              <p className="text-3xl mt-10 font-bold text-purple-500">
                Goals
              </p>
              </div>
              <div>
                  
              </div>
              </div>

              <div className="my-20">
              <div className = "w-full sticky top-0">
              <p className="text-3xl mt-10 font-bold text-purple-500">
                Design Process
              </p>
              </div>
              <div>
                  
              </div>
              </div>

              <div className="my-20">
              <div className = "w-full sticky top-0">
              <p className="text-3xl mt-10 font-bold text-purple-500">
                Results
              </p>
              </div>

              <div>
                  
              </div>
              </div>
            </div>
              { workRenderer}
                
            </div>
            <Footer white showSocials/>
         </div>


    )
}

export default IM360;
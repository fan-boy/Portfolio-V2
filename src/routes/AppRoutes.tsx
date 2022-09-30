import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../Pages/homepage";
import AboutPage from "../Pages/about";
import WorkPage from "../Pages/work";
import ResumePage from "../Pages/resume";
import GraphicPage from "../Pages/visualart";
import WorkDetailsPage from "../Pages/workDetails";
import ChainReactive from "../Pages/WorkDetails/ChainReactive/ChainReactive";
import IM360 from "../Pages/WorkDetails/IM360";
import Hive from "../Pages/WorkDetails/Hive";


const AppRoutes = () =>{


    return(
        
        <Router>
            
            <Routes>
          <Route path="/about" element={<AboutPage/>}/>
            
          <Route path="/work" element={<WorkPage/>} />

          <Route path="/resume" element={<ResumePage/>} />

          <Route path="/visualart" element={<GraphicPage/>} />

          <Route path="/work/chainreactive" element = {<ChainReactive/>} />

          <Route path="/work/im360" element = {<IM360/>} />

          <Route path="/work/hive" element = {<Hive/>} />
          
          <Route path="/" element={<HomePage/>}/>
          
          
        </Routes>
        
        </Router>
       
    );
}

export default AppRoutes;
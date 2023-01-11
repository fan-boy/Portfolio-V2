import React, { useCallback, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/homepage";
import AboutPage from "../Pages/about";
import WorkPage from "../Pages/work";
import ResumePage from "../Pages/resume";
import GraphicPage from "../Pages/visualart";
import WorkDetailsPage from "../Pages/workDetails";
import ChainReactive from "../Pages/WorkDetails/ChainReactive/ChainReactive";
import IM360 from "../Pages/WorkDetails/IM360";
import Hive from "../Pages/WorkDetails/Hive/Hive";
import HealSpace from "../Pages/WorkDetails/CollegeWork/INST711/HealSpace";
import trackPathForAnalytics from "../TrackPageForAnalytics";
import ScrollToTop from "./scrollToTop";


const AppRoutes = () =>{
    


    return(
        
        <Router>
            <ScrollToTop/>
            <Routes>
          <Route path="/about" element={<AboutPage/>}/>
            
          <Route path="/resume" element={<ResumePage/>} />

          <Route path="/fun" element={<GraphicPage/>} />

          <Route path="/chainreactive" element = {<ChainReactive/>} />

          <Route path="/im360" element = {<IM360/>} />

          <Route path="/hive" element = {<Hive/>} />
          
          <Route path = "/healspace" element = {<HealSpace />}/>

          <Route path="/" element={<HomePage/>}/>
          
          
          
        </Routes>
        
        </Router>
       
    );
}

export default AppRoutes;
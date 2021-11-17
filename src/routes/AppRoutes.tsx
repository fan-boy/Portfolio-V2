import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import HomePage from "../Pages/homepage";
import AboutPage from "../Pages/about";
import WorkPage from "../Pages/work";
import ResumePage from "../Pages/resume";
import GraphicPage from "../Pages/visualart";

const customHistory = createBrowserHistory();

const AppRoutes = () =>{


    return(
        <Router>
            
            <Routes>
          <Route path="/about" element={<AboutPage/>}/>
            
          <Route path="/work" element={<WorkPage/>} />

          <Route path="/resume" element={<ResumePage/>} />

          <Route path="/visualart" element={<GraphicPage/>} />
          
          <Route path="/" element={<HomePage/>}/>
          
          
        </Routes>

        </Router>
    );
}

export default AppRoutes;
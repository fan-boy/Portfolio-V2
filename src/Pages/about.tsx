import React from "react";
import Socials from "../Components/AboutPage/Socials";
import Footer from "../Components/footer";
import Navbar from "../Components/Navbar";
import me from './me.png';

const AboutPage = () =>{
    return(
        <div className = "w-full min-h-screen p-10 ">
            <div className="xl:container xl:mx-auto">
            <Navbar selected="about"/>

            <div className = "w-full min-h-half pt-5 md:p-10 gap-2 flex flex-col sm:flex-row ">
                <span className="flex flex-col justify-center w-full items-center min-h-half max-h-screen ">
                <span className="sm:hidden mt-10 text-4xl self-start font-bold text-blue-400">
                        Hello  👋🏼
                    </span>
                    <p className="sm:hidden mt-10">

                    I’m Aaditya Shete, a <span className="font-semibold">Product designer with Full-Stack Development background</span> currently pursuing masters in
                     <span className="font-semibold"> Human Computer Interaction</span> at University of Maryland. 
                    I completed my Undergraduate degree in Computer Science in 2018
                    and have been working since.
                    </p>
                    <span className="sm:w-1/2 mt-2 h-auto rounded-2xl overflow-hidden">
                    <img className=" w-full object-fit sm:object-scale-down " src={me} alt="It Me"/>
                    </span>
                    <Socials white={false} className="flex mt-2 flex-row gap-5 items-center"/>
                </span>
                <span className="w-full min-h-half text-black">
                    <span className="hidden sm:block text-4xl font-bold text-blue-400">
                        Hello  👋🏼
                    </span>
                    
                    <p className="hidden sm:block mt-10">

                    I’m Aaditya Shete, a <span className="font-semibold">Full-stack Developer and an aspiring Product Designer</span> currently pursuing masters in
                     <span className="font-semibold"> Human Computer Interaction</span> at University of Maryland. 
                    I completed my Undergraduate degree in Computer Science in 2018
                    and have been working since.
                    </p>
                    <p className="mt-10">
                        <p className="text-3xl  font-semibold text-black">
                        How did I get here?
                        </p>
                        <p className = "mt-5"> 
                            I have a background in Computer Science, and during my undergrad program I experienced designing and developing
                            a lot of digital experiences. While interning with<span className="font-semibold"> Accenture </span>is when I got introduced to <span className="font-semibold">production scale product 
                            design and development</span>. Further my experience at <span className="font-semibold">Ingram Micro</span> made me <span className="font-semibold">realise the importance of User Experience design </span> 
                             and fascinated me to study user behaviour and visualize solutions. Since then I've been working as an <span className="font-semibold"> User Experience designer and 
                            a fullstack web developer</span> with an aim for creating amazing experiences.
                        </p>
                        
                        
                    </p>
                    <p className="mt-10">
                        <p className="text-3xl  font-semibold text-black">
                        When I am not working
                        </p>
                        <p className = "mt-5"> 
                            My other intrests include running,cooking,playing video games, travelling and keeping myself updated
                            with the latest technological advancements. I'm in love with the mountains and find nothing better than a good
                            sunrise or a sunset. 
                            
                        </p>
                        
                        
                    </p>


                </span>
            </div>
            <Footer />
            </div>
        </div>
    )
}

export default AboutPage;
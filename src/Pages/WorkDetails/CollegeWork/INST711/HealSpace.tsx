import { loadavg } from "os";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../../Components/footer";
import Navbar from "../../../../Components/Navbar";
import PrimaryPersona from "./assets/Personas/Primary.png";
import SecondaryPersona from "./assets/Personas/Secondary.png";
import SecondaryPersona2 from "./assets/Personas/Secondary2.png";
import LowFiPrototype from "./assets/Screens/Lowfi.png";
import MidFiPrototype from './assets/Screens/MidFi.png';
import StyleGuide from './assets/ComponentLibrary/StyleGuide.png';
import ComponentLibraryImg from './assets/ComponentLibrary/ComponentLibrary.png';
import Carousel from "react-multi-carousel";

import HomeWithAd from "./assets/Screens/HiFi/HomeWithAd.png";
import HomeWithAlert from "./assets/Screens/HiFi/HomeScreenAlert.png";
import StatueList from "./assets/Screens/HiFi/StatueList.png";
import StatueDescription from "./assets/Screens/HiFi/StatueDescription.png";
import PersonaPicker from "./assets/Screens/HiFi/PersonaPicker.png";
import TimePicker from "./assets/Screens/HiFi/TimePicker.png";
import BookingScreen from "./assets/Screens/HiFi/BookingScreen.png";
import BookingConfirmation from "./assets/Screens/HiFi/BookingConfirmation.png";


const HealSpace = () => {

    const overview = useRef<HTMLParagraphElement>(null);
    const DesignProcess = useRef<HTMLParagraphElement>(null);
    const tftf = useRef<HTMLParagraphElement>(null);
    const AppPrompt = useRef<HTMLParagraphElement>(null);
    const PersonaCreation = useRef<HTMLParagraphElement>(null);
    const LowAndMidPro = useRef<HTMLParagraphElement>(null);
    const ComponentLibrary = useRef<HTMLParagraphElement>(null);
    const hifiPrototype = useRef<HTMLParagraphElement>(null);
    const movie = useRef<HTMLParagraphElement>(null);
    const result = useRef<HTMLParagraphElement>(null);
    const [selectedOption, setSelectedOption] = useState("");

    const [verticalNav, setVerticalNav] = useState<JSX.Element>();

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    useEffect(() => {

        let css = `px-3 py-2 cursor-pointer`

        setVerticalNav(
            <ul className="hidden md:block fixed z-50 z-60  w-1/6 top-1/5 py-5 ml-2  justify-end   bg-gray-200 opacity-75 rounded-lg ">
                <li className={css} onClick={() => overview.current?.scrollIntoView({ behavior: "smooth" })}>Overview</li>
                <hr />
                {/* <li className={css} onClick={() =>DesignProcess.current?.scrollIntoView({ behavior: "smooth" })}>Design Process</li> */}
                <li className={css} onClick={() => tftf.current?.scrollIntoView({ behavior: "smooth" })}>TFTF</li>
                <li className={css} onClick={() => AppPrompt.current?.scrollIntoView({ behavior: "smooth" })}>App Prompt</li>
                <li className={css} onClick={() => PersonaCreation.current?.scrollIntoView({ behavior: "smooth" })}>Persona Creation</li>
                <li className={css} onClick={() => LowAndMidPro.current?.scrollIntoView({ behavior: "smooth" })}>Prototypes</li>
                <li className={css} onClick={() => ComponentLibrary.current?.scrollIntoView({ behavior: "smooth" })}>Component Library</li>
                <li className={css} onClick={() => hifiPrototype.current?.scrollIntoView({ behavior: "smooth" })}>HiFi Prototypes</li>
                <li className={css} onClick={() => movie.current?.scrollIntoView({ behavior: "smooth" })}>Movie</li>
                <li className={css} onClick={() => result.current?.scrollIntoView({ behavior: "smooth" })}>Result</li>
            </ul>
        )

    }, [selectedOption])

    const headingStyle = "text-3xl xl:text-5xl mt-10 font-bold  text-black";
    const textStyle = "text-lg xl:text-xl mt-10 smmobile:p-5 p-5 -mx-5 text-left sm:p-10 rounded-md ";

    return (
        <div className=" bg-blue-400 w-full pb-10 min-h-screen relative">

            <div className="w-full container  sm:py-10 px-5 py-5 mx-auto max-w-4xl">
                <Navbar selected="work" white />

                <div className="w-full relative pt-5 ">
                    <div className="flex sm:items-center flex-col  ">
                        <p className="text-6xl sm:text-7xl md:text-9xl w-1/2 lg:ml-0 font-bold rounded-md text-white">
                            {`HealSpace`}
                        </p>
                        <p className="text-2xl xl:text-5xl w-1/2 lg:ml-0 font-bold text-white">
                            {`A speculative health care app`}
                        </p>
                    </div>
                    {/* <p className="text-3xl mt-10 font-bold text-purple-500">
                Overview  Problem Statement  Roles  Goals   Design Process  Results
              </p> */}

                    <div className="my-20">
                        {/* <img className="object-contain" src={desktopimg} alt="HeaderImage" /> */}

                        <div className="flex  flex-col sm:flex-row text-white items-start w-full sm:items-center justify-around my-5">

                            <span>
                                <p className="text-2xl xl:text-3xl font-bold ">
                                    Type
                                </p>
                                <p className="text-lg xl:text-xl font-bold ">
                                    {"Personal Project"}

                                </p>
                            </span>
                            <span>
                                <p className="text-2xl xl:text-3xl font-bold ">
                                    Platform
                                </p>
                                <p className="text-lg xl:text-xl font-bold">
                                    {"Web & mobile"}

                                </p>
                            </span>
                            <span>
                                <p className="text-2xl xl:text-3xl font-bold ">
                                    Duration
                                </p>
                                <p className="text-lg xl:text-xl font-bold ">
                                    {"Sept '22 - Dec '22"}

                                </p>
                            </span>

                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full flex flex-row  bg-white rounded-6xl ">


                {verticalNav}


                <div className="container p-10 mx-auto max-w-4xl">

                    <p className={headingStyle} ref={overview}>
                        Overview
                    </p>
                    <div className={textStyle}>
                        <p className="sm:w-2/3">
                            As a part of the coursework for INST711, we were supposed to create an app based on 4 randomly generated keywords.
                            As groups of 4, we then had to show how a person would use our apps in a day in his life.
                            We as a group took the speculative approach and designed a user journey through our apps on the moon, a millennial in the future.
                        </p>
                    </div>
                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle}>
                                {"Responsibilities & Contribution"}
                            </p>
                            <div className={textStyle}>
                                <p className="sm:w-2/3">
                                    <ul className="p-5 list-disc">
                                        <li>
                                            Come up with user personas.
                                        </li>

                                        <li>
                                            Generate App ideas and come up with an app design.
                                        </li>
                                        <li>
                                            Create a component library for the app.
                                        </li>
                                        <li>
                                            Design interactions within and among different apps.
                                        </li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full ">
                            <p className={headingStyle}>
                                {"Outcome"}
                            </p>
                            <div className={textStyle}>
                                <p className="sm:w-2/3">
                                    We made a video showing a user's usage of our apps as they went through their day.
                                </p>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full ">
                            <p className={headingStyle}>
                                {"Takeaways"}
                            </p>
                            <div className={textStyle}>
                                <p className="sm:w-2/3">
                                    Learnt how to design interactions that resonate with the audience:: how the features and functions
                                    of a project get translated into something people find usable, useful, and desirable.
                                </p>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full text-center">

                            <p className={headingStyle} ref={DesignProcess}>
                                {"Design Process"}
                            </p>

                            <div className="text-lg xl:text-xl pt-10 smmobile:p-10 rounded-md ">
                                <hr className="border-1 " />

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        <div className="w-full justify-items-center">
                            {/* <div className={" smmobile:p-5 p-5 -mx-5 sm:p-10 rounded-md text-purple-500"} >
                <div className="w-full flex text-center justify-center">
                  <img className="sm:w-2/3 object-contain" src={designProcess} alt="DesignProcess" />
                </div>
              </div> */}
                        </div>


                    </div>


                    <div className="my-20">
                        <div className="w-full">

                            <p className={headingStyle} ref={tftf}>
                                {"Thing from the future (TFTF)"}

                            </p>
                            <div className={textStyle}>
                                <p className="sm:w-2/3">
                                    Thing from the future is an award-winning imagination game that challenges players to collaboratively and competitively describe objects from a range of alternative futures.
                                    It’s a game where you draw 4 cards and each card describes a scenario.
                                    <br /> <br />
                                    <p>
                                        We played TFTF in our groups and were responsible for coming up with an app idea from the cards we drew.
                                    </p>
                                    <p>
                                        My cards were as follows -
                                        <ul className="p-5 mt-5 list-disc">
                                            <li >
                                                Arc - Discipline (a millenium)
                                            </li>
                                            <li >
                                                Terrain - Disease
                                            </li>
                                            <li >
                                                Object - Statue
                                            </li>
                                            <li >
                                                Mood - Serenity
                                            </li>
                                        </ul>
                                    </p>
                                </p>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={AppPrompt}>
                                {"Comping up with the prompt"}
                            </p>
                            <div className={textStyle}>
                                <p className="sm:w-2/3">
                                    We had a few minutes to come up with the prompt that would describe the story of our app. <br></br><br></br>
                                    Prompt I came up with based on the TFTF prompts -


                                    <br></br>
                                    <br></br>
                                    <span className="italic font-semibold">
                                        <p>
                                            It’s the year 3022, the world has gone through a series of pandemics. Heathcare has become of paramount importance. All heath facilities are denoted by a huge statues now. Each statue has the capability of healing different diseases. People can be serene only if they have easy and organized access to these statues. This is where the app comes in picture.
                                        </p><p>
                                            The app is basically a medical history book that would also allow the users to schedule appointments at different statues. Scheduling appointments would ensure discipline at the statues.  The app would have a map of all the statues all over the world and would also give directions to any selected statue. Users can search by statue name or disease.
                                        </p><p>
                                            The app will let users schedule appointments by showing real time crowding. It will also maintain the users previous visits to the statues in the user profile page.
                                        </p>
                                    </span>

                                </p>

                            </div>
                        </div>
                        <div>

                        </div>
                    </div>

                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={PersonaCreation}>
                                {"Persona Creation"}
                            </p>
                            <div className={textStyle + " flex flex-col gap-5"}>

                                <p className="">
                                    We had to come up with personas as a group. As these personas played a crucial role in our final project. We collaborated and came up with a primary persona and two secondary personas.
                                </p>
                                <img className="w-full  object-contain" src={PrimaryPersona} alt="Primary Persona" />
                                <img className="w-full  object-contain" src={SecondaryPersona} alt="Secondary Persona 1" />
                                <img className="w-full  object-contain" src={SecondaryPersona2} alt="Secondary Persona 2" />
                            </div>
                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={LowAndMidPro}>
                                {"Low Fidelity Prototype"}
                            </p>
                            <div className={textStyle}>
                                <p>
                                    

                                    <br></br>
                                    <img className="object-contain" src={LowFiPrototype} alt="Low fidelity prototype" />

                                    <br></br>
                                    <br></br>
                                    

                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} >
                                {"Mid Fidelity Prototype"}
                            </p>
                            <div className={textStyle}>
                                <p>
                                    

                                    <br></br>
                                    <img className="object-contain" src={MidFiPrototype} alt="Mid fidelity prototype" />

                                    <br></br>
                                    <br></br>
                                    

                                </p>

                            </div>
                        </div>
                    </div>

                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={ComponentLibrary}>
                                {"Designing the Brand Language and Component Library"}
                            </p>
                            <div className={textStyle}>
                                <div className="flex flex-col gap-5">
                                   
                                    <img className="w-full object-contain" src={StyleGuide} alt="Style Guide" />
                                    <img className="w-full object-contain" src={ComponentLibraryImg} alt="Component Library" />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={hifiPrototype}>
                                {"High Fidelity Prototypes"}
                            </p>
                            <div className="mt-10">
                            <Carousel responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
  keyBoardControl={true}
  slidesToSlide={1}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  containerClass="h-1/2"
  partialVisbile={false}
            >

                <img className="w-full p-3  object-contain" src={HomeWithAd} alt="Home Screen with Alert" />
                <img className="w-full p-3  object-contain" src={HomeWithAlert} alt="Home Screen with Alert" />
                <img className="w-full p-3   object-contain" src={StatueList} alt="List of healing statues" />
                <img className="w-full p-3  object-contain" src={StatueDescription} alt="Statue description" />
                <img className="w-full p-3  object-contain" src={PersonaPicker} alt="Persona picker" />
                <img className="w-full p-3  object-contain" src={TimePicker} alt="Time picker" />
                <img className="w-full p-3  object-contain" src={BookingScreen} alt="Booking screen" />
                <img className="w-full p-3  object-contain" src={BookingConfirmation} alt="Booking confirmation screen" />
                
              </Carousel>
              </div>
                        </div>
                    </div>

                    <div className="my-20 ">
                        <div className="w-full">
                            <p className={headingStyle} ref={movie}>
                                {"Movie"}
                            </p>
                            <div className={textStyle}>
                            <div className="sm:w-2/3">

                                <p>
                                    Grab some popcorn because its movie time!

                                    <br>
                                    </br>
                                    <br></br>
                                    A day in the life of Mousy, who has just moved to the moon 30 days back. See how she deals with the problems she faces throughout the day using our apps.
                                    PS - She misses earth a lot.
                                    
                                    
                                </p>
                                 <p>
                                 PS - She misses earth a lot.
                                </p>   
                            </div>
                            <br></br><br></br>
                            <p>
                                Please view in full screen
                            </p>
                            <br></br>
                            <iframe title="Mousy's Tragic Day" src="https://player.vimeo.com/video/778594057?h=0b4573e3e3" width="640" height="360"  allow="autoplay; fullscreen; picture-in-picture" ></iframe>

                        </div>
                            {/* <div className="flex flex-col sm:flex-row items-center">
                                <img className="sm:w-2/3 object-contain" src={DesktopView} alt="DesktopView" />
                                <img className="w-2/3 sm:w-1/3 p-5 object-contain" src={MobileView} alt="DesktopView" />
                            </div> */}


                        </div>
                    </div>

                    <div className="my-20">
                        <div className="w-full">
                            <p className={headingStyle} ref={result}>
                                Results
                            </p>
                        </div>
                        <div className={textStyle}>
                            <div className="sm:w-2/3">

                                <p>
                                   We made a movie and passed the class with a flying grade!
                                    <br>
                                    </br>
                                    <br></br>
                                    

                                    This course taugh me how to keep users engaged and make them feel as if they are living an experience while using a product.
                                    Making the movie taught me the importance of audio and video effects to denote emotions. 
                                  
                                </p>

                            </div>

                        </div>
                    </div>


                   
                </div>
                <div>


                </div>

            </div>

            {/* <div className="my-20">

              <p className="w-full text-3xl xl:text-5xl mt-10 bg-purple-200 font-bold text-purple-500">
                Problem Statement
              </p>

              <div className="text-lg xl:text-xl mt-10 bg-purple-100 p-10 rounded-md text-purple-500">

              </div>
            </div> */}





            <Footer white showSocials />

        </div>


    )
}

export default HealSpace;
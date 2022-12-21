import { loadavg } from "os";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../Components/footer";
import HomePageCard from "../../../Components/HomePage/HomepageCards";
import Navbar from "../../../Components/Navbar";
import WorkCard from "../../../Components/Work/WorkCard";
import { callApiWithToken } from "../../../fetch";
import {  Work } from "../../../Models/baseModels";
import desktopimg from "./DesktopSiamlewisburg.png";
import initialPrototyping from "./prototyping.png";
import surveyImage from "./Stats.png";
import UpdatedPrototype from "./UpdatedPrototype.png";
import FinalPrototype from "./finalPrototype.png";
import HiFIPrototype from "./hiFiPrototype.png";
import DesktopView from "./DesktopView.gif";
import MobileView from "./MobileView.gif";
import designProcess from "./designProcess.png";

const ChainReactive = () => {
  const [cardClicked, setCardClicked] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [workDetails, setWorkDetails] = useState<Work[]>([]);
  const [workRenderer, setWorkRenderer] = useState<JSX.Element[]>([]);

  const overview = useRef<HTMLParagraphElement>(null);
  const DesignProcess = useRef<HTMLParagraphElement>(null);
  const research = useRef<HTMLParagraphElement>(null);
  const prototyping = useRef<HTMLParagraphElement>(null);
  const iteratingAndFeedback = useRef<HTMLParagraphElement>(null);
  const finalPrototype = useRef<HTMLParagraphElement>(null);
  const finalProduct = useRef<HTMLParagraphElement>(null);
  const result = useRef<HTMLParagraphElement>(null);
  const [selectedOption,setSelectedOption] = useState("");

  const [verticalNav,setVerticalNav] = useState<JSX.Element>();

  useEffect(() =>{

    let css = `px-3 py-2 cursor-pointer`

    setVerticalNav(
      <ul className="hidden md:block fixed z-50 z-60  w-1/6 top-1/5 py-5 ml-2  justify-end   bg-white opacity-75 rounded-lg ">
    <li className={css} onClick={() =>overview.current?.scrollIntoView({ behavior: "smooth" })}>Overview</li>
    <hr/>
    {/* <li className={css} onClick={() =>DesignProcess.current?.scrollIntoView({ behavior: "smooth" })}>Design Process</li> */}
    <li className={css} onClick={() =>research.current?.scrollIntoView({ behavior: "smooth" })}>Research</li>
    <li className={css} onClick={() =>prototyping.current?.scrollIntoView({ behavior: "smooth" })}>Prototyping</li>
    <li className={css} onClick={() =>iteratingAndFeedback.current?.scrollIntoView({ behavior: "smooth" })}>Iteration and Feedback</li>
    <li className={css} onClick={() =>finalPrototype.current?.scrollIntoView({ behavior: "smooth" })}>Final Prototype</li>
    <li className={css} onClick={() =>finalProduct.current?.scrollIntoView({ behavior: "smooth" })}>Final Product</li>
    <li className={css} onClick={() =>result.current?.scrollIntoView({ behavior: "smooth" })}>Result</li>
  </ul>
    )

  },[selectedOption])
  
  

  const getWorkData = async () => {
    setLoading(true);
    let workData = await callApiWithToken("", "https://portfolio-20015.firebaseio.com/data/portfolio/projects.json");
    if (workData.status === 200) {
      let body: any = workData.body;
      let workPortfolio: Work[] = body;
      if (workPortfolio && workPortfolio.length > 0)
        setWorkDetails(workPortfolio);
    }
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      await getWorkData();
    })();
  }, [])

  const onCardClick = (id: string) => {
    setCardClicked(id);
  }


  useEffect(() => {
    let renderer: JSX.Element[] = [];


  }, [workDetails, isLoading])

  const headingStyle = "text-3xl xl:text-5xl mt-10 font-bold  text-black";
  const textStyle = "text-lg xl:text-xl mt-10 smmobile:p-5 p-5 -mx-5 text-left sm:p-10 rounded-md ";

  return (
    <div className=" bg-blue-400 w-full pb-10 min-h-screen relative">
       
      <div className="w-full container  sm:py-10 px-5 py-5 mx-auto max-w-4xl">
        <Navbar selected="work" white />

        <div className="w-full relative pt-5 ">
          <div className="flex sm:items-center flex-col  ">
            <p className="text-6xl sm:text-7xl md:text-9xl w-1/2 lg:ml-0 font-bold rounded-md text-white">
              {`Chain\nReactive\nLLC`}
            </p>
            <p className="text-2xl xl:text-5xl w-1/2 lg:ml-0 font-bold text-white">
              {`A restaurant website project`}
            </p>
          </div>
          {/* <p className="text-3xl mt-10 font-bold text-purple-500">
                Overview  Problem Statement  Roles  Goals   Design Process  Results
              </p> */}

          <div className="my-20">
            <img className="object-contain" src={desktopimg} alt="HeaderImage" />

            <div className="flex  flex-col sm:flex-row text-white items-start w-full sm:items-center justify-around my-5">

              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Role
                </p>
                <p className="text-lg xl:text-xl font-bold ">
                  {"Product Designer & Web developer"}

                </p>
              </span>
              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Platform
                </p>
                <p className="text-lg xl:text-xl font-bold">
                  {"Web"}

                </p>
              </span>
              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Duration
                </p>
                <p className="text-lg xl:text-xl font-bold ">
                  {"Jun '21 - Jul '22 (13 months)"}

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
              My aim was to create a responsive website that would provide a
              comprehensive experience for users looking to order online from local businesses.
              I did this by constantly being in touch with the stakeholders and involving them in the design process.
            </p>
            <p className="mt-5 sm:w-2/3">
              As a part of this project, we wanted to give the customers more flexibility in order delivery or pick-up times,
              as the business owners felt this would be an essential feature.
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
                      As the product design lead, I led the design vision and helped set the product direction.
                    </li>

                    <li>
                      Conducted participatory design sessions to help users and stakeholders express their needs.
                    </li>
                    <li>
                      Ideated solutions, prototyped them and performed user acceptance testing.
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
                  I designed and implemented a website template that small mom-and-pop businesses could use to add online ordering.
                  We implemented this in one of the local restaurants and increased the take-out revenue by <span className="font-semibold">60%</span>.
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
                  Closely working with early-mid stage startups across different domains helped me
                  understand the balance they strive to achieve between their user base and the business.
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
                <p className="m-5">
                  Even though I worked on the complete project, I will walk you through the Order Scheduling module for the purpose of this portfolio.
                </p>
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
              <p className={"text-3xl xl:text-5xl mt-10 font-bold  text-black text-center"}>
                {"Order Scheduling"}

              </p>
              <hr className="border-1 m-5" />
              <p className={headingStyle} ref={research}>
                {"Research"}

              </p>
              <div className={textStyle}>
                <p className="sm:w-2/3">
                  While developing the product and working with stakeholders, I came across the business and customers need to be able to schedule an order for later.
                  I conducted several interviews with businesses and customers to understand the main issues.
                  Most of the businesses that we spoke to were restaurants. 
                  <br/> <br/>
                  <p>
                  From the business owner's interviews, I concluded the following-

                  <ul className="p-5 mt-5 list-disc">
                    <li >
                      The business owners wanted the customers to schedule the order at a specific time so that they could plan their resources accordingly.
                    </li>
                    <li >
                      The menu items or the pricing of items could differ depending upon the requested delivery time.
                    </li>
                    <li >
                      Traditionally, they took orders over the phone so they didn’t face this issue as they could inform the consumer about any changes immediately.
                    </li>
                  </ul>
                  </p>
                </p>

                <p className="mt-5 sm:w-2/3">
                  From customers interviews, I concluded that -
                  <ul className="list-disc p-5">
                    <li >
                      They wanted the ability to order in advance for special occasions like parties.
                    </li>
                    <li >
                      They wanted the ability to plan their meals for the week and hence needed this feature of being able to schedule the order.
                    </li>

                  </ul>


                </p>

              </div>
            </div>
            <div>

            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle}>
                {"Defining the problem statement"}
              </p>
              <div className={textStyle}>
                <p className="sm:w-2/3">
                  From this, we concluded that the businesses required the consumers to select a pick up time explicitly. <br></br><br></br>
                  This feature was rather crucial as it would affect the menu and prices of the items. It turned out to be more important than we thought.
                  <br></br> <br/>
                  From the business perpective it led to the User Story -
                  <br></br>
                  <br></br>
                  <span className="italic font-semibold">
                    As a business owner, I should be able to allow customers to schedule orders for future times and charge them the right price as per the selected time.
                  </span>
                  <br></br><br/>
                  From the customers perpective it led to the User Story -
                  <br></br>
                  <br></br>
                  <span className="italic font-semibold">
                    As a customer, I should be able to select a pickup/delivery time before going through the menu, as my selection would affect the menu items and prices.
                  </span>
                  <br></br>
                  <br></br>
                  Based on this, we started prototyping solutions and conducting tests with stakeholders.
                </p>

              </div>
            </div>
            <div>

            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={prototyping}>
                {"Initial Prototyping"}
              </p>
              <div className={textStyle + " flex sm:flex-row flex-col"}>
                <img className="w-full sm:w-1/2 object-contain" src={initialPrototyping} alt="InitialPrototyping" />
                <p className="sm:w-1/2">
                  Our initial design included a day picker followed by a shift (Breakfast,Lunch,Dinner) picker and then a time picker.
                  Once the user made a time selection the menu section of the webpage would be populated. The business owners liked this design of the user having to explicitly select the timing.

                </p>

              </div>
            </div>
            <div className={textStyle}>

              <p className="sm:w-2/3">
                Although this design satisfied the needs of the business owners, I felt it was not user-friendly from the customer's perspective.
                So I decided to create a simple google form and survey the customers to understand their perspectives. 
                <br/>
                A QR code with this forms 
                link was kept on the tables in the restaurant and dine-in customers were asked to fill the form.  
                They were also asked their opinion
                on this design. Some of the questions were as follows-
                <br></br> <br></br>
                <ul className="p-5 list-disc">
                  <li>
                    Would you be comfortable selecting a pickup/delivery time every time you wanted to order something?
                  </li>
                  <li>
                    How many times do you pre-order items for a future time?
                  </li>

                </ul>
                <br></br>
                43 people answered this survey.
              </p>

            </div>
          </div>
          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={iteratingAndFeedback}>
                {"Improving"}
              </p>
              <div className={textStyle}>
                <p>
                  To no surprise, the results of the survey were as follows-

                  <br></br>
                  <img className="object-contain" src={surveyImage} alt="SurveyImage" />

                  <br></br>
                  <br></br>
                  <span>
                    From this, it was pretty clear that even though the feature was an important one from the perspective of the business owners, it was just a good to have feature from the perspective of the consumers as the consumers mostly placed orders for asap delivery/pickup.
                  </span>
                  <br></br>
                  This discovery led to new and better prototypes.

                </p>

              </div>
            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle}>
                {"Iterating and collecting feedback"}
              </p>
              <div className={textStyle}>
                <div className="flex sm:flex-row flex-col">
                  <p className="sm:w-1/2">
                    I then came up with this design prototype where ASAP delivery was selected by default, and only if the user wanted to order for a future time, he had to make a change to it. The time picker and shift picker (Breakfast, Lunch and Dinner) were hidden when ASAP was selected and only showed up when Today or Later was selected.
                    <br>
                    </br>
                    <br></br>
                    However, this prototype was rejected during testing by the consumers. From their feedback, I concluded that -
                    <ul className="list-disc p-5">
                      <li>
                        They felt that the time picker section that appeared once the user clicked on "Today" or "Later" was overwhelming when it appeared on the screen. It needed to be moved to a separate component.

                      </li>
                      <li>Users wanted the ability to shift between the different shifts of the current day easily.</li>
                    </ul>

                  </p>
                  <img className="w-full sm:w-1/2 object-contain" src={UpdatedPrototype} alt="UpdatedPrototyping" />
                </div>
                <br></br>
                <p>
                  This led to a new prototype.
                </p>
              </div>

            </div>
          </div>
          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={finalPrototype}>
                {"Final Prototype"}
              </p>
              <div className={textStyle}>

                <img className="w-full object-contain" src={HiFIPrototype} alt="HiFiPrototyping" />

              </div>

            </div>
          </div>

          <div className="my-20 ">
            <div className="w-full">
              <p className={headingStyle} ref={finalProduct}>
                {"Final product"}
              </p>

              <div className="flex flex-col sm:flex-row items-center">
                <img className="sm:w-2/3 object-contain" src={DesktopView} alt="DesktopView" />
                <img className="w-2/3 sm:w-1/3 p-5 object-contain" src={MobileView} alt="DesktopView" />
              </div>


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
                  We were able to come up with a design that satisfied the needs of the business owners while also keeping the complexity to a minimum for the consumers.

                  <br>
                  </br>
                  <br></br>
                  <ul className="list-disc p-5">
                    <li>
                      The end design was a very simple dropdown which didn’t clutter the screen unnecessarily. This worked from the user's perspective.

                    </li>
                    <li>
                      The business owner's requirement of having the user select the pickup/delivery time was addressed by making a default selection which would be handled by code.
                    </li>
                  </ul>
                  <br></br>

                  During this process, I learnt that it’s essential to consider the requirements of all
                  your user groups and develop a design that works for them.
                  Each user group might have different roles and perform various actions.
                  Making no assumptions and adhering to the design process will yield results that satisfy the needs of all stakeholders.
                </p>

              </div>

            </div>
          </div>


          <div className="my-10">
            <div className={textStyle}>
              <div>

                <p className="p-5">
                  If you are around Lewisburg, PA and feel like eating Thai food, do try out  <a className="font-bold" href="https://www.siamlewisburg.com/">siamlewisburg.com</a>
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

export default ChainReactive;
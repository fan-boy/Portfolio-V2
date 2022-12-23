import { loadavg } from "os";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../../Components/footer";
import HomePageCard from "../../../Components/HomePage/HomepageCards";
import Navbar from "../../../Components/Navbar";
import WorkCard from "../../../Components/Work/WorkCard";
import { callApiWithToken } from "../../../fetch";
import { Work } from "../../../Models/baseModels";
import AppFlow from "./AppFlow.png";
import HiveRelationshipDiagram from "./HiveRelationshipDiagram.png";
import FirstPrototype from "./FirstPrototype.png";
import GroupInterviews from "./GroupInterviews.png";
import SecondPrototype from "./SecondPrototype.png";
import SecondPrototype2 from "./SecondPrototype2.png";
import MobileApp from "./MobileApp.png";
import MobileCalendar from "./MobileCalendar.png";
import MobileSplash from "./MobileSplash.png";
import MobileQuestion from "./MobileQuestion.png";
import Hive1 from "./Hive1.png";
import Hive2 from "./Hive2.png";
import Hive3 from "./Hive3.png";
import Hive4 from "./Hive4.png";
import Hive5 from "./Hive5.png";
import Hive6 from "./Hive6.png";
import Hive7 from "./Hive7.png";
import Hive8 from "./Hive8.png";
import Hive9 from "./Hive9.png";
import Hive10 from "./Hive10.png";
import Hive11 from "./Hive11.png";
import Hive12 from "./Hive12.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ChainReactive = () => {
  const [cardClicked, setCardClicked] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [workDetails, setWorkDetails] = useState<Work[]>([]);
  const [workRenderer, setWorkRenderer] = useState<JSX.Element[]>([]);

  const overview = useRef<HTMLParagraphElement>(null);
  const responsibilities = useRef<HTMLParagraphElement>(null);
  const outcomes = useRef<HTMLParagraphElement>(null);
  const takeaways = useRef<HTMLParagraphElement>(null);
  const DesignProcess = useRef<HTMLParagraphElement>(null);
  const research = useRef<HTMLParagraphElement>(null);
  const appDesign = useRef<HTMLParagraphElement>(null);
  const prototyping = useRef<HTMLParagraphElement>(null);
  const devTesting = useRef<HTMLParagraphElement>(null);
  const appScreenshots = useRef<HTMLParagraphElement>(null);
  const result = useRef<HTMLParagraphElement>(null);
  const [selectedOption,setSelectedOption] = useState("");

  const [verticalNav,setVerticalNav] = useState<JSX.Element>();

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

  useEffect(() =>{

    let css = `px-3 py-2 cursor-pointer`

    setVerticalNav(
      <ul className="hidden md:block z-50 z-60 w-1/6 fixed top-1/5 py-5 ml-2  justify-end   bg-gray-200 opacity-75 rounded-lg ">
    <li className={css} onClick={() =>overview.current?.scrollIntoView({ behavior: "smooth" })}>Overview</li>
    {/* <li className={css} onClick={() =>responsibilities.current?.scrollIntoView({ behavior: "smooth" })}>Responsibilities</li>
    <li className={css} onClick={() =>outcomes.current?.scrollIntoView({ behavior: "smooth" })}>Outcome</li>
    <li className={css} onClick={() =>takeaways.current?.scrollIntoView({ behavior: "smooth" })}>Takeaways</li> */}
    <hr/>
    <li className={css} onClick={() =>research.current?.scrollIntoView({ behavior: "smooth" })}>Research</li>
    <li className={css} onClick={() =>appDesign.current?.scrollIntoView({ behavior: "smooth" })}>App Design</li>
    <li className={css} onClick={() =>prototyping.current?.scrollIntoView({ behavior: "smooth" })}>Prototyping</li>
     <li className={css} onClick={() =>devTesting.current?.scrollIntoView({ behavior: "smooth" })}>Development</li>
     <li className={css} onClick={() =>appScreenshots.current?.scrollIntoView({ behavior: "smooth" })}>Final Screens</li>
    <li className={css} onClick={() =>result.current?.scrollIntoView({ behavior: "smooth" })}>Result</li>
  </ul>
    )

  },[selectedOption])


  const headingStyle = "text-3xl xl:text-5xl mt-10 font-bold  text-black";
  const textStyle = "text-lg xl:text-xl mt-10 smmobile:p-5 p-5 -mx-5 text-left sm:p-10 rounded-md ";

  return (
    <div className="bg-blue-400 w-full pb-10  min-h-screen">
      <div className="w-full container  sm:py-10 py-5 px-5 mx-auto max-w-4xl">
        <Navbar white selected="work" />
        <div className="w-full relative pt-5 ">
          <div className="flex sm:items-center flex-col  ">
            <p className="text-6xl sm:text-7xl md:text-9xl w-1/2 lg:ml-0 font-bold rounded-md text-white">
              {`Hive`}
            </p>
            <p className="text-2xl xl:text-5xl w-1/2 lg:ml-0 font-bold text-white">
              {`A return-to-work application`}
            </p>
          </div>
          {/* <p className="text-3xl mt-10 font-bold text-purple-500">
                Overview  Problem Statement  Roles  Goals   Design Process  Results
              </p> */}
          <div className="my-20">
            {/* <img className= "object-contain" src={desktopimg} alt="HeaderImage" /> */}

            <div className="flex text-white flex-col sm:flex-row items-start w-full sm:items-center justify-around my-5">

              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Role
                </p>
                <p className="text-lg xl:text-xl font-bold ">
                  {"Product Designer & Developer"}

                </p>
              </span>
              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Platform
                </p>
                <p className="text-lg xl:text-xl font-bold ">
                  {"Web & Mobile"}

                </p>
              </span>
              <span>
                <p className="text-2xl xl:text-3xl font-bold ">
                  Duration
                </p>
                <p className="text-lg xl:text-xl font-bold ">
                  {"Jan '21 - Jul '21 (6 months)"}

                </p>
              </span>

            </div>
          </div>


        </div>
      </div>
      <div className="w-full  bg-white rounded-6xl">
      {verticalNav}
        <div className="container p-10 mx-auto max-w-4xl">
        
          <p className={headingStyle} ref={overview}>
            Overview
          </p>
          <div className={textStyle}>
            <p className="sm:w-2/3">
              After the COVID - 19 pandemic when offices started reopening, the business continuity planning (BCP) team at
              Ingram Micro India gathered a team of 5 people and provided us with a problem statement.
              They wanted an app to enable a safe work environment to return to work.
            </p>
            <p className="mt-5 sm:w-2/3">
              Ingram Micro India has about 3000 employees all over and we had
              to come up with a way to ensure a safe return to work for them. This was particularly challenging because we
              were working on a tight deadline. We had to come up with a plan, design, implement and test a product all within 4 months.
            </p>
            <p className="mt-5 sm:w-2/3">
              Due to the time constraints all 5 of us were acting as designers and developers, however we had a UI specialist within the team.

            </p>
          </div>
          <div>

          </div>


          {/* <div className="my-20">

              <p className="w-full text-3xl xl:text-5xl mt-10 bg-purple-200 font-bold text-purple-500">
                Problem Statement
              </p>

              <div className="text-lg xl:text-xl mt-10 bg-purple-100 p-10 rounded-md text-purple-500">

              </div>
            </div> */}

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle}>
                {"Responsibilities & Contribution"}
              </p>
              <div className={textStyle}>
                <p className="sm:w-2/3">


                  <ul className="p-5 list-disc">
                    <li>
                      Analyse the complex requirements and ideate and design solutions.
                    </li>

                    <li>
                      Develop the product under time constraints in an agile manner.
                    </li>
                    <li>
                      Architect the technical development as I was one of the senior members of the team. 
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
              <p className={headingStyle} >
                {"Outcome"}
              </p>
              <div className={textStyle}>
                <p className="sm:w-2/3">
                  We designed and implemented an app that ensured a safe return to work environment for the employees.
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
                  Working on  tight deadline and developing an enterprise scale application taught me how to work in high pressure environments and how to design enterprise applications from scratch.
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
                  Some of my work during this stint is under NDA, so
                    I can showcase only publicly released information.
                  </p>
                  <hr className="border-1 " />
              </div>
            </div>
            <div>

            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={research}>
                {"Research"}
              </p>
              <div className={textStyle}>
                <p className="sm:w-2/3">
                  We started by conducting extensive interviews with the BCP and the HR team to get a clear understanding of their requirements.
                  </p>
                  <br/>
                  <p className="sm:w-2/3">
                  We also performed interviews on employees who were selected on a random basis to get to know their expectations from this product that 
                  we were going to build.

                  
                </p>
                <br/>
                <img className="w-full sm:w-2/3 object-contain" src={GroupInterviews} alt="UpdatedPrototyping" />
                Conducting online Interviews
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
                We concluded that there was a need of more than one app. There was one that the BCP and the HR teams will use and one for the employees. <br></br><br></br>

                  <br></br>
                  The User Story for the BCP/HR app was as follows-
                  <br></br>
                  <br></br>
                  <span className="italic font-semibold">
                    As a member of BCP or HR, I should be able to schedule
                    employee office visits in batches, assign them seats and have access to daily attendance while ensuring safety of all employees.                    </span>
                  <br></br>
                  <br></br>
                  The User Story for the Employee app was as follows-
                  <br></br>
                  <br></br>
                  <span className="italic font-semibold">
                    As an employee,I should be able to see my office schedule and raise ad-hoc office visit requests while ensuring safety.                </span>
                  <br></br>
                  <br></br>
                </p>

              </div>
            </div>
            <div>

            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={appDesign}>
                {"App Design"}
              </p>
              <div className={textStyle + " flex flex-col"}>

                <p className="">
                  We mapped out the main requirements from our analysis.
                  <br></br> <br></br>

                </p>
                <img className="w-full object-contain" src={HiveRelationshipDiagram} alt="AppFlow" />
                <br/><br/>
                <p>
                  We concluded that there was a need of 3 independent apps that worked in sync with each other. These were - 
                  <ul className="p-5 list-disc">
                    <li>
                      A web app for the HR/Admin and BCP teams to upload schedules and send announcements.
                    </li>

                    <li>
                      A mobile app for employees to see their schedules and announcements.
                    </li>
                    <li>
                      A mobile app for the security personnel to check-in employees in the office.
                    </li>
                  </ul>
                </p>
              </div>
            </div>

          </div>
          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle} ref={prototyping}>
                {"Initial Prototyping"}
              </p>
              <div className={textStyle}>
                <div className="flex sm:flex-row flex-col">

                  <img className="w-full sm:w-1/2 object-contain" src={FirstPrototype} alt="InitialPrototype" />
                  <p className="sm:w-1/2">
                    In the initial design for the web app, I had a tab layout on a single page website and each tab had different features as shown in the initial mockup. There were tabs for-
                    <ul className="p-5 list-disc">
                      <li>
                        Upload employee schedule tab - This section had a simple file uploader where the user could either drop a csv or excel file or upload it. After uploading the file the user clicked on upload and it would upload the schedule.

                      </li>
                      <li>
                        Reports tab - User could select which report he wanted to download and click on download to download the report.

                      </li>
                    </ul>

                    <br>
                    </br>
                    <br></br>
                    After discussion with my team members and their suggestions, to come up witha layout that is highly modular so that it 
                    can address the needs of the future. 
                     I decided to eliminate the tab layout and have a collapsible vertical navbar fixed to the left of the screen.
                    <br>
                    </br>
                    <br></br>
                    
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle}>
                {"Final Prototyping"}
              </p>
              <div className={textStyle}>
                <div className="flex sm:flex-row flex-col">

                  <p className="sm:w-1/2">
                    These were the updated prototypes with the vertical navbar on the left.
                    <br>
                    </br>
                    <br></br>
                    <ul className="p-5 list-disc">
                      <li>
                        The employee schedule section featured a location dropdown where the user could select the location for which they were uploading the employee schedule. Followed by a drop zone to upload the excel/csv file with dates and emp id’s.
                      </li>
                      <li>
                        The reports section featured a location section to select the location for which
                        the user wanted to download the reports. Followed by another dropdown to select the type
                        of report which could be a “Health report of employees” ,”Attendance Report” or a “Employee information report".
                      </li>
                    </ul>
                  </p>
                  <img className="w-full sm:w-1/2 object-contain" src={SecondPrototype} alt="SecondPrototype1" />
                </div>
                <div className="flex sm:flex-row flex-col">

                  <p className="sm:w-1/2">
                    <ul className="p-5 list-disc">
                      <li>
                        The announcement section featured a location dropdown for the user to select a location to which the announcement was to be sent. The announcement was going to be sent as a phone notification on the Hive mobile app so we had a Title and Body text field as well.

                      </li>
                    </ul>






                  </p>
                  <img className="w-full sm:w-1/2 object-contain" src={SecondPrototype2} alt="SecondPrototype2" />
                </div>
                <br></br><br></br>
                We then pitched these designs to the BCP and HR team and they agreed with it as most of their requirements were met.
              </div>

            </div>
          </div>
          <div className="my-20">
            <div className="w-full">
              <p className={headingStyle}>
                {"Mobile app Low-Fi Prototype"}
              </p>
              <div className={textStyle}>
                <div className="flex sm:flex-row flex-col">
                  <img className="w-full sm:w-1/2 object-contain" src={MobileApp} alt="MobileAppPrototype" />
                  <p className="sm:w-1/2">
                    The mobile app had a simple tile layout on the home screen. Each tile had a core functionality associated with it and represented what the users could do.

                    <br>
                    </br>
                    <br></br>
                    Followed by a notifications section below. All important announcements were to be shown here.
                    <br></br><br></br>
                    A significant contribution that I made to the user experience on the mobile app was disabling the features
                    like “Office Schedule” and ”Create Ad-Hoc Request”
                    for employees who marked themselves as sick. This ensured the safety of all the employees in the workspace.
                  </p>

                </div>
              </div>
            </div>
          </div>

          <div className="my-20 ">
            <div className="w-full">
              <p className={headingStyle} ref={devTesting}>
                {"Development and testing"}
              </p>

              <div className={textStyle}>
                <div className="flex sm:flex-row flex-col">
                  {/* <img className="w-full sm:w-1/2 object-contain" src={FinalPrototype} alt="UpdatedPrototyping" /> */}
                  <p className="sm:w-2/3">
                    As soon as we got the basic prototypes approved by the users we started with the development of the app and the website.


                    <br>
                    </br>
                    <br></br>
                    We took an agile approach and were constantly in touch with all the stakeholders and users. It was a crazy few months, but everyone was working on getting the product ready.

                    <br></br><br></br>
                    After each iteration, we got it tested by the users and collected important feedback. Based on this, we made improvements to the design and experience that the app provided.
                    <br></br><br></br>
                    After about 3 months of this process, we developed a product ready to be used.
                  </p>

                </div>
              </div>


            </div>
          </div>

          <div className="my-20 ">
            <div className="w-full">
              <p className={headingStyle} ref={appScreenshots}>
                {"Employee Mobile App Screenshots"}
              </p>

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
              
                <img className="w-full p-3  object-contain" src={Hive1} alt="Splash" />
                <img className="w-full p-3   object-contain" src={Hive2} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive3} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive4} alt="Main" />
                <img className="w-full p-3  object-contain" src={Hive5} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive6} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive7} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive8} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive9} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive10} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive11} alt="Question" />
                <img className="w-full p-3  object-contain" src={Hive12} alt="Question" />
              </Carousel>

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
                  We came up with a design successfully in a very short time span. This not only ensured that all the requirements of the stakeholders and employees were met but also the safety of the return to work process.


                  <br>
                  </br>
                  <br></br>
                  The app allowed scheduling office visits in batches, raising ad-hoc office visits when required,
                  performing self-declaration and allowing entry through a QR code-enabled work pass, automating seat selection,
                  tracking entry and exit times, etc. HR and Admin teams benefit from the data and analytics it generates, in addition, to being able to send notifications as appropriate.
                  <br></br>
                  <br>
                  </br>
                  With Hive HR, Admin, Managers can-
                  <ul className="list-disc p-5">
                    <li>
                      Manage hot desking and Entry/exit.
                    </li>
                    <li>
                      Create a highly informed environment with customized announcements, information, and alerts.
                    </li>
                    <li>
                      Safe workspace through Self-Declaration.

                    </li>
                    <li>
                      Authorized entry through entry-pass (QR Code).
                    </li>
                  </ul>
                  <br></br>
                  With Hive employees can-
                  <ul className="list-disc p-5">
                    <li>
                      Effectively plan office visits.

                    </li>
                    <li>
                      Be assured of a safe workplace.

                    </li>
                    <li>
                      Be well informed of all the important communications.


                    </li>

                  </ul>
                  <br></br>
                  <br></br>
                  Working on Hive gave me the experience of working on an extremely tight time-bound project.
                  It made me realize how I could maximize my potential under high-pressure situations. All this while ensuring that the quality of the product is not compromised.
                </p>

              </div>

            </div>
          </div>
          </div>
      </div>
        <Footer white showSocials />
        
    </div>


  )
}

export default ChainReactive;
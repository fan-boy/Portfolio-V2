import { loadavg } from "os";
import React, { useEffect, useState } from "react";
import Footer from "../../../Components/footer";
import HomePageCard from "../../../Components/HomePage/HomepageCards";
import Navbar from "../../../Components/Navbar";
import WorkCard from "../../../Components/Work/WorkCard";
import { callApiWithToken } from "../../../fetch";
import { Work } from "../../../Models/baseModels";
import AppFlow from "./AppFlow.png";
import FirstPrototype from "./FirstPrototype.png";
import GroupInterviews from "./GroupInterviews.png";
import SecondPrototype from "./SecondPrototype.png";
import SecondPrototype2 from "./SecondPrototype2.png";
import MobileApp from "./MobileApp.png";
import MobileCalendar from "./MobileCalendar.png";
import MobileSplash from "./MobileSplash.png";
import MobileQuestion from "./MobileQuestion.png";

const ChainReactive = () => {
  const [cardClicked, setCardClicked] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [workDetails, setWorkDetails] = useState<Work[]>([]);
  const [workRenderer, setWorkRenderer] = useState<JSX.Element[]>([]);

  
  const headingStyle = "text-3xl xl:text-5xl mt-10 font-bold bg-purple-200 text-purple-500";
  const textStyle = "text-lg xl:text-xl mt-10 bg-purple-100 smmobile:p-5 p-5 -mx-5 text-left sm:p-10 rounded-md text-purple-500";

  return (
    <div className=" bg-purple-200 w-full min-h-screen p-10">
      <div className="md:container md:mx-auto">
        <Navbar selected="work" />



        <div className="w-full relative pt-5 ">
          <div className="flex sm:items-center flex-col  ">
            <p className="text-6xl sm:text-7xl md:text-9xl w-1/2 lg:ml-0 font-bold rounded-md text-purple-500">
              {`Hive`}
            </p>
            <p className="text-2xl xl:text-5xl w-1/2 lg:ml-0 font-bold text-purple-500">
              {`A return-to-work application`}
            </p>
          </div>
          {/* <p className="text-3xl mt-10 font-bold text-purple-500">
                Overview  Problem Statement  Roles  Goals   Design Process  Results
              </p> */}
          <div>
            <div className="my-20">
              {/* <img className= "object-contain" src={desktopimg} alt="HeaderImage" /> */}

              <div className="flex  flex-col sm:flex-row items-start w-full sm:items-center justify-around my-5">

                <span>
                  <p className="text-2xl xl:text-3xl font-bold text-purple-500">
                    Role
                  </p>
                  <p className="text-lg xl:text-xl font-bold text-purple-500">
                    {"Product Designer & Developer"}

                  </p>
                </span>
                <span>
                  <p className="text-2xl xl:text-3xl font-bold text-purple-500">
                    Platform
                  </p>
                  <p className="text-lg xl:text-xl font-bold text-purple-500">
                    {"Web & Mobile"}

                  </p>
                </span>
                <span>
                  <p className="text-2xl xl:text-3xl font-bold text-purple-500">
                    Duration
                  </p>
                  <p className="text-lg xl:text-xl font-bold text-purple-500">
                    {"Jan '21 - Jul '21 (6 months)"}

                  </p>
                </span>

              </div>
              <p className={headingStyle}>
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


                    I along with the team had to come up with a design solution and architect the technical development.
                    My key roles revolved around the design of the mobile app and the design and development of the desktop app,



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

                <p className={headingStyle}>
                  {"Design Process"}
                </p>

                <div className="text-lg xl:text-xl pt-10 smmobile:p-10 rounded-md text-purple-500">
                  <hr className="border-1 border-purple-500" />
                  <p className="m-5">
                  Some of my work during this stint is under NDA, so
                    I can showcase only publicly released information.
                  </p>
                  <hr className="border-1 border-purple-500" />
                </div>
              </div>
              <div>

              </div>
            </div>

            <div className="my-20">
              <div className="w-full">
                <p className={headingStyle}>
                  {"Gathering Information"}
                </p>
                <div className={textStyle}>
                  <p className="sm:w-2/3">
                  We started by conducting extensive interviews with the BCP and the HR team to get a clear understanding of their requirements. 
                  From this we concluded that they needed a product which could-


                    <ul className="p-5 mt-5 list-disc">
                      <li >
                      Keep track of employees health status, their current location and if they had private vehicles.
                      </li>
                      <li >
                      Keep track of employees vaccination status as only those with complete vaccination were going to be called to office.
                      </li>
                      <li >
                      Ability to schedule employees visit to office in batches.
                      </li>
                      <li >
                      Ability to keep track of employees attendance on a daily basis.
                      </li>
                      <li >
                      Ensure safety of employees visiting office. 
                      </li>
                      <li >
                      Ability to deny entry to office to employees if they do not meet the temperature or oximeter requirements.
                      </li>
                      <li >
                      Ability to send important communication to all employees or employees of a certain location.
                      </li>
                    </ul>

                  </p>

                  <p className="mt-5 sm:w-2/3">
                  We then interviewed few employees to understand their needs out of this product. We got to know that the employees wanted- 

                    <ul className="list-disc p-5">
                      <li >
                      Ability to request ad-hoc visits to office for issues like getting their laptops fixed or replaced.
                      </li>
                      <li >
                      Ability to see the people who are going to be visiting office at the same time as them so that they could get in touch with them.
                      </li>
                      <li >
                      Ability to see their schedule for the current month. 
                      </li>
                      <li >
                      Ensure safety of employees visiting office.
                      </li>

                    </ul>

                  </p>
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
                  From this we concluded that there was a need of more than one app. There was one that the BCP and the HR teams will use and one for the employees. <br></br><br></br>
                  
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
                    As an employee,I should be able to see my office schedule and raise ad-hoc officce visit requests while ensuring safety.                </span>
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
                <p className={headingStyle}>
                  {"App Design"}
                </p>
                <div className={textStyle + " flex sm:flex-row flex-col"}>
                 
                  <p className="sm:w-1/2">
                  We came up with a three-application design solution. 
                  <br></br> <br></br>
                  <ul className="p-5 list-disc">
                    <li>
                    A <span className="font-semibold">web app</span> that would be provided to the <span className="font-semibold">BCP, HR and Admin team </span> where they could perform several actions. 
                    They could upload employee schedules, download reports displaying employee attendance, health status and 
                    send important communication to all employees or targeted groups.

                    </li>
                    <li>
                    A <span className="font-semibold">mobile app</span> that the <span className="font-semibold">employees</span> would use. 
                    They had to fill in mandatory questions like vaccination details on the first login. 
                    They would be able to access their office schedule and raise ad-hoc requests to visit the office and display their entry pass for the same. 
                    They could also update their health status in case they fell sick.
                    </li>
                    <li>
                    A third <span className="font-semibold">mobile app</span> was to be provided to the <span className="font-semibold">Admin team and security guards</span> in the office 
                    in which they would fill in the temperature and oximeter reading of the employees requesting entry into the office after scanning 
                    their entry pass. Based on the scan and the temperature and oximeter reading, 
                    the security team was notified whether to allow or deny entry to the employee.
                    </li>

                  </ul>
                  </p>
                   <img className="w-full sm:w-1/2 object-contain" src={AppFlow} alt="AppFlow" />
                </div>
              </div>
              
            </div>
            <div className="my-20">
              <div className="w-full">
                <p className={headingStyle}>
                  {"Initial Protyping"}
                </p>
                <div className={textStyle}>
                  <p className="w-full sm:w-2/3">
                  Due to time constraints, we only came up with paper prototypes to get a basic idea of the design. We tried to keep the design as simple and minimalistic as possible. 
                  During this phase, we were constantly sharing the design with the stakeholders and getting their feedback, and updating them.
                  While we were coming up with the design, the UI specialist in our team was developing assets. 
                  </p>
                  <br></br>
                  <br></br>
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
                  After discussion with my team members and their suggestions, I decided to eliminate the tab layout and have a collapsible vertical navbar fixed to the left of the screen.
                  <br>
                  </br>
                  <br></br>
                  This initial design also had some essential components missing. 
                  These were the location selectors where the user would select the location for which he wanted to upload the employee schedule or download the reports.
                     
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
                <p className={headingStyle}>
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
                <p className={headingStyle}>
                  {"Employee Mobile App Screenshots"}
                </p>
                
                  <div className = "flex w-full flex-col sm:flex-row items-center">
                  <img className="w-full sm:w-1/3 object-contain" src={MobileSplash} alt="Splash" />
                  <img className="w-full sm:w-1/3 object-contain" src={MobileQuestion} alt="Question" />
                  <img className="w-full sm:w-1/3 object-contain" src={MobileCalendar} alt="Question" />
                  </div>
                
               
              </div>
            </div>

            <div className="my-20">
              <div className="w-full">
                <p className={headingStyle}>
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
            

            <div className="my-10">
              <div className={textStyle}>
                  <div>
                 
                  <p className="p-5">
                  Do check the app out on the  <a className="font-bold" href="https://play.google.com/store/apps/details?id=com.im.im_hr">play store</a>
                  </p>
                  
                  </div>
                  
                </div>
            </div>
          </div>
        </div>
        <Footer color="purple" showSocials />
      </div>
    </div>


  )
}

export default ChainReactive;
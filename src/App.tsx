import "./App.css";
import Home from "./components/custom/Home";
import AboutUs from "./components/custom/AboutUs";
import Faq from "./components/custom/FAQ";
// import MentorCard from "./components/custom/MentorCard";
import Navbar from "./components/custom/Navbar";
import ProblemStatement from "./components/custom/ProblemStatement";
import TimeLine from "./components/custom/TimeLine";
import { HashRouter as Router } from "react-router-dom"; // Use HashRouter for smooth scrolling
import { useRef } from "react";
import ScrollHandler from "./components/custom/ScrollHandler";
import Footer from "./components/custom/Footer";
import Sponsors from "./components/custom/Sponsor";
import Prizes from "./components/custom/PrizePool";
import Judge from "./components/custom/Judge";
import LeadOrganizers from "./components/custom/OrganizerCard";

function App() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const problemStatementRef = useRef<HTMLDivElement | null>(null);
  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const prizePoolRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);
  const mentorCardRef = useRef<HTMLDivElement | null>(null);
  const JudgeRef = useRef<HTMLDivElement | null>(null);
  const LeadOrganizersRef = useRef<HTMLDivElement | null>(null);

  return (
    <Router>
      <>
        <Navbar
          scrollRefs={{
            home: homeRef,
            about: aboutUsRef,
            timeline: timelineRef,
            problems: problemStatementRef,
            prizes: prizePoolRef,
            faq: faqRef,
            team: mentorCardRef,
            judge: JudgeRef,
            leadOrganizers: LeadOrganizersRef,
          }}
        />

        <ScrollHandler
          refs={{
            home: homeRef,
            about: aboutUsRef,
            timeline: timelineRef,
            problems: problemStatementRef,
            prizes: prizePoolRef,
            faq: faqRef,
            team: mentorCardRef,
          }}
        />

        <div id="home" ref={homeRef} className="xl:mt-10">
          <Home />
        </div>
        <div
          id="about"
          ref={aboutUsRef}
          className="mt-[2rem] sm:mt-[-3rem] min-w-1024:mt-[-5rem]"
        >
          <AboutUs />
        </div>
        <div
          id="timeline"
          ref={timelineRef}
          className="
            mt-[-8rem] 
            mb-[0rem] sm:mb-[90rem] 
            md:mb-[20rem]
         between-768-900:mb-[0rem]
           
          "
        >
          <TimeLine />
        </div>
        <div
          id="problems"
          ref={problemStatementRef}
          className="min-h-[70dvh] h-fit"
        >
          <ProblemStatement />
        </div>
        <div id="sponsors" ref={sponsorsRef} className="h-100 mb-40 mt-[10rem]">
          <Sponsors />
        </div>
        <div id="prizes" ref={prizePoolRef} className="h-100">
          <Prizes />
        </div>
        <div
          id="judge"
          ref={JudgeRef}
          className="h-auto py-10"
        >
          <Judge />
        </div>
        <div id="LeadOrganizers" ref={LeadOrganizersRef} className="h-100">
          <LeadOrganizers />
        </div>
        <div id="faq" ref={faqRef} className="h-100">
          <Faq />
        </div>
        {/* <div id="team" ref={mentorCardRef} className="h-screen">
          <MentorCard />
        </div> */}

        <Footer />
      </>
    </Router>
  );
}

export default App;

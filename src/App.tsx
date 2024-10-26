import "./App.css";
import Home from "./components/custom/Home";
import AboutUs from "./components/custom/AboutUs";
import Faq from "./components/custom/FAQ";
import MentorCard from "./components/custom/MentorCard";
import Navbar from "./components/custom/Navbar";
import ProblemStatement from "./components/custom/ProblemStatement";
import TimeLine from "./components/custom/TimeLine";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";
import ScrollHandler from "./components/custom/ScrollHandler";
import Footer from "./components/custom/Footer";
import Sponsors from "./components/custom/Sponsor";
import Prizes from "./components/custom/PrizePool";

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
        <div ref={homeRef} className="md:mt-[4rem]">
          <Home />
        </div>
        <div ref={aboutUsRef} className="md:mt-[-10rem] mt-[-3rem]">
          <AboutUs />
        </div>
        <div
          ref={timelineRef}
          className="h-screen mb-[35rem] mt-[-15rem] max-w-400:mb-[40rem] max-w-400:mt-[-15rem] between-768-900:mb-[60rem] min-w-1024:mb-[10rem]"
        >
          <TimeLine />
        </div>

        {/* chagned the height of this as requested so that it doesn't take up the whole screen */}
        <div ref={problemStatementRef} className="min-h-[70dvh] h-fit">
          <ProblemStatement />
        </div>
        <div ref={sponsorsRef} className="h-100 mb-40">
          <Sponsors/>
        </div>
        <div ref={prizePoolRef} className="h-screen">
          <Prizes />
        </div>
        <div ref={faqRef} className="h-100">
          <Faq />
        </div>
        <div ref={mentorCardRef} className="h-screen">
          <MentorCard />
        </div>

        <Footer />
      </>
    </Router>
  );
}

export default App;

import "./App.css";
import Home from "./components/custom/Home";
import AboutUs from "./components/custom/AboutUs";
import Faq from "./components/custom/FAQ"; // Ensure this component exists
import MentorCard from "./components/custom/MentorCard"; // Ensure this component exists
import Navbar from "./components/custom/Navbar";
import PrizePool from "./components/custom/PrizePool";
import ProblemStatement from "./components/custom/ProblemStatement";
import TimeLine from "./components/custom/TimeLine";
import { BrowserRouter as Router } from "react-router-dom";
import { useRef } from "react";
import ScrollHandler from "./components/custom/ScrollHandler";

function App() {
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const problemStatementRef = useRef<HTMLDivElement | null>(null);
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
        <div ref={homeRef} className="h-full w-full">
          <Home />
        </div>
        <div ref={aboutUsRef} className="h-screen">
          <AboutUs />
        </div>
        <div ref={timelineRef} className="h-screen">
          <TimeLine />
        </div>
        {/* chagned the height of this as requested so that it doesn't take up the whole screen */}
        <div ref={problemStatementRef} className="min-h-[70dvh] h-fit">
          <ProblemStatement />
        </div>
        <div ref={prizePoolRef} className="h-screen">
          <PrizePool />
        </div>
        <div ref={faqRef} className="h-100">
          <Faq />
        </div>
        <div ref={mentorCardRef} className="h-screen">
          <MentorCard />
        </div>
      </>
    </Router>
  );
}

export default App;

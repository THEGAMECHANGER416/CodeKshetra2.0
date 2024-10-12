import "./App.css";
import AboutUs from "./components/custom/AboutUs";
import Faq from "./components/custom/FAQ";
import MentorCard from "./components/custom/MentorCard";
import Navbar from "./components/custom/Navbar";
import PrizePool from "./components/custom/PrizePool";
import ProblemStatement from "./components/custom/ProblemStatement";
import TimeLine from "./components/custom/TimeLine";
import { Button } from "./components/ui/button";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Route

function App() {
  return (
    <Router> {/* Wrap your application with Router */}
      <>
        <Button variant={"outline"} className="bg-red-400">
          Click me
        </Button>
        <Navbar />
        <Routes>
          {/* Define routes here */}
          <Route path="/"  />
          <Route path="/about"  element={<AboutUs/>} />
          <Route path="/timeline" element={<TimeLine/>}  />
          <Route path="/problems" element={<ProblemStatement/>}  />
          <Route path="/prizes" element={<PrizePool/>}  />
          <Route path="/dontknow"  element={<Faq/>} />
          <Route path="/team" element={<MentorCard/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;

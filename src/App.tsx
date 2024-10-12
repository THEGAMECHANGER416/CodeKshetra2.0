import "./App.css";
import Navbar from "./components/custom/Navbar";
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
          <Route path="/about"  />
          <Route path="/timeline"  />
          <Route path="/problems"  />
          <Route path="/prizes"  />
          <Route path="/dontknow"  />
          <Route path="/team"  />
        </Routes>
      </>
    </Router>
  );
}

export default App;

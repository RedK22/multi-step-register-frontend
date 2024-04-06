// import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Interests from "./pages/Interests";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="getstarted" element={<GetStarted />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
}

export default App;

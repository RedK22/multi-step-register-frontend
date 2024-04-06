// import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import GetStarted from "./pages/GetStarted";
import Interests from "./pages/Interests";
import SignUp from "./pages/SignUp";
import Verification from "./pages/Verification";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="getstarted" element={<GetStarted />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

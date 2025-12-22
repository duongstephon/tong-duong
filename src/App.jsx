import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
// import EmailInvite from "./Components/EmailInvite/EmailInvite";
import SaveTheDate from "./Components/SaveTheDate/SaveTheDate";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Navigation from "./Components/Navigation/Navigation";
import ThankYou from "./Components/ThankYou/ThankYou";
import OurStory from "./Components/OurStory/OurStory";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar />
        <Navigation /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/invite" element={<EmailInvite />} /> */}
          {/* <Route path="/" element={<Home />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/ourstory" element={<OurStory />} /> */}
          <Route path="/savethedate/:email" element={<SaveTheDate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

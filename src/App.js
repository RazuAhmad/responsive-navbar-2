import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Feedback from "./Components/Feedback/Feedback";

const App = () => {
  return (
    <div className="app_bg ">
      <Navbar />
      <Banner />
      <Skills />
      <Contact />
      <Feedback />
    </div>
  );
};

export default App;

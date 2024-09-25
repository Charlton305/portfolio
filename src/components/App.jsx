import React, { useEffect } from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import ProjectsList from "./ProjectsList";
import Contact from "./Contact";
import scrollReveal from "../assets/scrollReveal";
import { targetElements, defaultProps } from "../assets/scrollRevealData";
import Services from "./Services";

const App = () => {
  useEffect(() => {
    scrollReveal(targetElements, defaultProps);
  }, []);
  return (
    <>
      <Welcome />
      <AboutMe />
      <Services />
      <ProjectsList />
      <Contact />
    </>
  );
};

export default App;

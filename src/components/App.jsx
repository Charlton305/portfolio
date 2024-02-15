import React, { useEffect } from "react";
import Welcome from "./Welcome";
import AboutMe from "./AboutMe";
import ProjectsList from "./ProjectsList";
import Contact from "./Contact";
import scrollReveal from "../assets/scrollReveal";
import { targetElements, defaultProps } from "../assets/scrollRevealData";

const App = () => {
  useEffect(() => {
    scrollReveal(targetElements, defaultProps);
  }, []);
  return (
    <>
      <Welcome />
      <AboutMe />
      <ProjectsList />
      <Contact />
    </>
  );
};

export default App;

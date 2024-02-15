// import scrollReveal from "../assets/scrollReveal";
import { useEffect } from "react";

const Welcome = () => {
  // useEffect(() => {
  //   scrollReveal.reveal(".welcome-text-container", {
  //     delay: 300,
  //     distance: "30px",
  //     duration: 1000,
  //     easing: "cubic-bezier(0.5, 0, 0, 1)",
  //     origin: "left"
  //   });
  //   scrollReveal.reveal(".welcome-button-container", {
  //     delay: 500,
  //     distance: "30px",
  //     duration: 1500,
  //     interval: 200,
  //     origin: "left"
  //   });
  // }, []);
  return (
    <div className="content-container welcome-container" id="welcome">
      <h1 className="welcome-text-container">
        Hi, my name is{" "}
        <span className="welcome-container--blue">Lee Charlton</span>
        {<br />}
        Im a front-end web developer from
        <span className="welcome-container--blue"> Sittingbourne, Kent</span>
      </h1>
      <div className="welcome-buttons-container">
        <div className="welcome-button-container">
          <a className="cta-btn" href="#about">
            About me
          </a>
        </div>
        <div className="welcome-button-container">
          <a className="cta-btn" href="#projects">
            Projects
          </a>
        </div>
        <div className="welcome-button-container">
          <a className="cta-btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

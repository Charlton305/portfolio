import downArrow from "../assets/images/down-arrow.svg";

const Welcome = () => {
  return (
    <div className="content-container welcome-container" id="welcome">
      <div className="welcome-text-container">
        <h1 className="welcome-heading load-hidden">Hi, im
        <span className="welcome-container--blue"> Lee.</span>
        </h1>
        <h1 className="welcome-text">I design and build attractive websites to help your business grow</h1>
      </div>
        {/* <span className="welcome-container--blue"> Kent, United Kingdom</span> */}
      <div className="welcome-buttons-container">
        <div className="welcome-button-container reveal-button-1 load-hidden">
          <a className="cta-btn" href="#about">
            About me
          </a>
        </div>
        <div className="welcome-button-container reveal-button-2 load-hidden">
          <a className="cta-btn" href="#projects">
            Latest work
          </a>
        </div>
        <div className="welcome-button-container reveal-button-3 load-hidden">
          <a className="cta-btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="welcome-scroll-button-container"><a href="#about" className="welcome-scroll-button"><img className="welcome-scroll-button-image" src={downArrow}></img></a></div>
    </div>
  );
};

export default Welcome;

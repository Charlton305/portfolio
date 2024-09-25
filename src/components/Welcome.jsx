import downArrow from "../assets/images/down-arrow.svg";

const Welcome = () => {
  return (
    <div className="content-container welcome-container" id="welcome">
      <div className="welcome-text-container">
        <h1>Hi,
          <span className="text-blue"> I'm Lee.</span>
        </h1>
        <h1 className="load-hidden welcome-text-secondary">I design and build attractive websites to help your business <span className="welcome__heading-grow text-blue">grow</span></h1>
      </div>
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
      <div className="welcome-scroll-button-container">
        <a href="#about" aria-label="Click to scroll down" className="welcome-scroll-button load-hidden">
          <img className="welcome-scroll-button-image" alt="An arrow pointing down" src={downArrow}></img>
        </a>
      </div>
    </div>
  );
};

export default Welcome;

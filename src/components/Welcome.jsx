const Welcome = () => {
  return (
    <div className="content-container welcome-container" id="welcome">
      <h1 className="welcome-text-reveal load-hidden">
        Hi, my name is
        <span className="welcome-container--blue"> Lee Charlton</span>
        {<br />}
        Im a front-end web developer from
        <span className="welcome-container--blue"> Kent, United Kingdom</span>
      </h1>
      <div className="welcome-buttons-container">
        <div className="welcome-button-container reveal-button-1 load-hidden">
          <a className="cta-btn" href="#about">
            About me
          </a>
        </div>
        <div className="welcome-button-container reveal-button-2 load-hidden">
          <a className="cta-btn" href="#projects">
            Projects
          </a>
        </div>
        <div className="welcome-button-container reveal-button-3 load-hidden">
          <a className="cta-btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

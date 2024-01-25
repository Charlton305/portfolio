const Welcome = () => {
  return (
    <div className="content-container welcome-container" id="welcome">
      <h1>
        Hi, my name is{" "}
        <span className="welcome-container--blue">Lee Charlton</span>
        {<br />}
        Im a front-end web developer from{" "}
        <span className="welcome-container--blue">Sittingbourne, Kent</span>
      </h1>
      <div className="welcome-buttons-container">
        <a className="cta-btn" href="#about">
          About me
        </a>
        <a className="cta-btn" href="#projects">
          Projects
        </a>
        <a className="cta-btn" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Welcome;

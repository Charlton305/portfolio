const Welcome = () => {
  return (
    <div className="content-container welcome-container">
      <h1>
        Hi, my name is{" "}
        <span className="welcome-container--blue">Lee Charlton</span>
        {<br />}
        Im a front-end web developer from{" "}
        <span className="welcome-container--blue">Sittingbourne, Kent.</span>
      </h1>
      <div className="welcome-buttons-container">
        <div className="welcome-button-container">
          <a className="cta-btn" href="#about">About me</a>
        </div>
        <div className="welcome-button-container">
          <a className="cta-btn" href="#projects">Projects</a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

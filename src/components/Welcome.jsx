const Welcome = ({ scrollToSection }) => {
  return (
    <div className="content-container welcome-container">
      <h1>
        Hi, my name is{" "}
        <span className="welcome-container--blue">Lee Charlton</span>
        {<br />}
        Im a front-end web developer from{" "}
        <span className="welcome-container--blue">Sittingbourne, Kent.</span>
      </h1>
      <div className="welcome-button-container">
        <button className="cta-btn">About me</button>
        <div className="about-me__border"></div>
      </div>
    </div>
  );
};

export default Welcome;

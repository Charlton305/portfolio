const Project = ({ textContent, url, title, index }) => {
  return (
    <div className="content-container project__container">
      <div className="project__info-container">
        <h2>{title}</h2>
        <p>{textContent}</p>

        <div className="project__button-container">
          <div className="source-code-button-container">
            <button className="cta-btn cta-btn--see-live">See Live</button>
            <div className="source-code__button-border"></div>
          </div>

          <div>
            <button className="project__see-live-button">Source Code</button>
          </div>
        </div>
      </div>

      <div className="project__img-container">
        <img className="project__img" src={url} />
      </div>
    </div>
  );
};

export default Project;

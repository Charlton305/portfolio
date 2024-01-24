const Project = ({ textContent, image, title, liveSite, sourceCode }) => {
  return (
    <div className="project__container">
      <div className="project__info-container">
        <h2>{title}</h2>
        <p>{textContent}</p>

        <div className="project__button-container">
          <a href={liveSite} className="cta-btn cta-btn--see-live">See Live</a>
          <a href={sourceCode}  className="project__source-code-button">Source Code</a>
        </div>
      </div>

      <div className="project__img-container">
        <a href={liveSite}><img className="project__img" src={image} /></a>
      </div>
    </div>
  );
};

export default Project;

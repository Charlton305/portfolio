const Project = ({ textContent, image, title, liveSite }) => {
  return (
    <div className="project__container">
      <div className="project__info-container load-hidden">
        <h2>{title}</h2>
        <p>{textContent}</p>

        <div className="project__button-container">
          <a
            href={liveSite}
            target="_blank"
            className="cta-btn see-live-button"
          >
            See Live
          </a>
        </div>
      </div>

      <div className="project__img-container load-hidden">
        <a href={liveSite} target="_blank">
          <img className="project__img" src={image} />
        </a>
      </div>
    </div>
  );
};

export default Project;

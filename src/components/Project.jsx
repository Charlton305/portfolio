const Project = ({ textContent, image, title, liveSite, altText }) => {
  return (
    <div className="project__container">
      <div className="project__info-container load-hidden">
        <h3>{title}</h3>
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
          <img className="project__img" src={image} alt={altText}/>
        </a>
      </div>
    </div>
  );
};

export default Project;

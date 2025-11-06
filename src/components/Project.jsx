const Project = ({ textContent, image, image2x, title, liveSite, altText }) => {
  return (
    <div className='project__container'>
      <div className='project__info-container load-hidden'>
        <h3 className=''>{title}</h3>
        <p>{textContent}</p>

        <div className='project__button-container'>
          <a href={liveSite} target='_blank' className='cta-btn see-live-button'>
            See Live
          </a>
        </div>
      </div>

      <div className='project__img-container load-hidden'>
        <a href={liveSite} target='_blank'>
          <img
            className='project__img'
            src={image}
            srcSet={`${image2x ?? image} 2x`}
            alt={altText}
            width='860'
            height='490'
            loading='lazy'
          />
        </a>
      </div>
    </div>
  )
}

export default Project

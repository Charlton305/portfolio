const Welcome = () => {
  //Added this to make sure 100% height is always respected on mobile when the search bar disappears.
  // useEffect(() => {
  // Viewport height fix for mobile
  // const setViewportHeight = () => {
  //   const vh = window.innerHeight * 0.01
  //   document.documentElement.style.setProperty("--vh", `${vh}px`)
  // }

  // setViewportHeight()
  // window.addEventListener("resize", setViewportHeight)
  // window.addEventListener("orientationchange", setViewportHeight)

  // return () => {
  // window.removeEventListener("resize", setViewportHeight)
  // window.removeEventListener("orientationchange", setViewportHeight)
  // }
  // }, [])

  return (
    <div className='content-container welcome-container' id='welcome'>
      <div className='welcome-text-container'>
        <h1 className='welcome-text-primary load-hidden text-blue'>LEE CHARLTON - WEB DEVELOPER</h1>
        <h2 className='load-hidden welcome-text-secondary'>
          Website designer and developer specialising in small business websites
        </h2>
      </div>
      <div className='welcome-content-container'>
        <div className='welcome-buttons-container'>
          <div className='welcome-button-container reveal-button-1 load-hidden'>
            <a className='cta-btn' href='#about'>
              Learn more
            </a>
          </div>
          <div className='welcome-button-container reveal-button-2 load-hidden'>
            <a className='cta-btn' href='#services'>
              Services
            </a>
          </div>
          <div className='welcome-button-container reveal-button-3 load-hidden'>
            <a className='cta-btn' href='#projects'>
              Latest work
            </a>
          </div>
          <div className='welcome-button-container reveal-button-4 load-hidden'>
            <a className='cta-btn' href='#contact'>
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome

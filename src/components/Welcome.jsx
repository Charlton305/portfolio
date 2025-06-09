import downArrow from "../assets/images/down-arrow.svg"
import { useEffect } from "react"

const Welcome = () => {
  useEffect(() => {
    const handleSmoothScroll = e => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const targetPosition = targetElement.offsetTop
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 800
        let start = null

        const animation = currentTime => {
          if (start === null) start = currentTime
          const timeElapsed = currentTime - start
          const run = easeInOutQuad(
            timeElapsed,
            startPosition,
            distance,
            duration
          )
          window.scrollTo(0, run)
          if (timeElapsed < duration) requestAnimationFrame(animation)
        }

        const easeInOutQuad = (t, b, c, d) => {
          t /= d / 2
          if (t < 1) return (c / 2) * t * t + b
          t--
          return (-c / 2) * (t * (t - 2) - 1) + b
        }

        requestAnimationFrame(animation)
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="content-container welcome-container" id="welcome">
      <div className="welcome-text-container">
        <h1>
          Hi,
          <span className="text-blue"> I'm Lee.</span>
        </h1>
        <h1 className="load-hidden welcome-text-secondary">
          I design and build attractive websites to help your business{" "}
          <span className="welcome__heading-grow text-blue">grow</span>
        </h1>
      </div>
      <div className="welcome-buttons-container">
        <div className="welcome-button-container reveal-button-1 load-hidden">
          <a className="cta-btn" href="#about">
            About me
          </a>
        </div>
        <div className="welcome-button-container reveal-button-2 load-hidden">
          <a className="cta-btn" href="#services">
            Services
          </a>
        </div>
        <div className="welcome-button-container reveal-button-3 load-hidden">
          <a className="cta-btn" href="#projects">
            Latest work
          </a>
        </div>
        <div className="welcome-button-container reveal-button-4 load-hidden">
          <a className="cta-btn" href="#contact">
            Contact
          </a>
        </div>
      </div>
      <div className="welcome-scroll-button-container">
        <a
          href="#about"
          aria-label="Click to scroll down"
          className="welcome-scroll-button load-hidden"
        >
          <img
            className="welcome-scroll-button-image"
            alt="An arrow pointing down"
            src={downArrow}
          ></img>
        </a>
      </div>
    </div>
  )
}

export default Welcome

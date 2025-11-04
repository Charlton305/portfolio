import { useEffect } from "react"

const Welcome = () => {
  useEffect(() => {
    // Viewport height fix for mobile
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty("--vh", `${vh}px`)
    }

    setViewportHeight()
    window.addEventListener("orientationchange", setViewportHeight)

    // Detect mobile devices
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 2)

    const handleSmoothScroll = e => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        if (isMobile) {
          // Use native smooth scroll on mobile (instant response)
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        } else {
          // Use custom smooth scroll on desktop
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
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      window.removeEventListener("resize", setViewportHeight)
      window.removeEventListener("orientationchange", setViewportHeight)
      anchorLinks.forEach(link => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="content-container welcome-container" id="welcome">
      <div className="welcome-text-container">
        <h1 className="welcome-text-primary load-hidden text-blue">LEE CHARLTON - WEB DEVELOPER</h1>
        <h2 className="load-hidden welcome-text-secondary">
          Website designer and developer specialising in small business websites
        </h2>
      </div>
      <div className="welcome-content-container">
        <div className="welcome-buttons-container">
          <div className="welcome-button-container reveal-button-1 load-hidden">
            <a className="cta-btn" href="#about">
              Learn more
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
      </div>
    </div>
  )
}

export default Welcome

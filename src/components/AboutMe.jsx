import { useEffect } from "react"
import photo from "../assets/images/Photo-of-me-in-norway.jpg"

const AboutMe = () => {
  useEffect(() => {
    const button = document.querySelector(".get-in-touch-button")

    const handleMouseEnter = () => {
      button.querySelector(".white-background").style.width = "100%"
    }

    const handleMouseLeave = () => {
      button.querySelector(".white-background").style.width = "0"
    }

    button.addEventListener("mouseenter", handleMouseEnter)
    button.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup function
    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter)
      button.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="about-me" id="about">
      <h2 className="about-me__heading">
        PROFESSIONAL WEBSITES WITH A PERSONAL TOUCH
      </h2>
        <p className="about-me__subheading">
          At Charlton Web Development, I build professional, attractive websites
          optimised for speed and performance. I handle all the technical
          decisions whilst working closely with my clients, allowing as much or
          as little input as needed to achieve a truly personal experience...
        </p>
      <div className="about-me__content-container">
        <div className="about-me__img-container">
          <img
            className="about-me__img"
            src={photo}
            alt="Lee Charlton in Lofoten islands in Norway"
          />
        </div>
        <div className="about-me__text-container">
          <h3 className="">Meet your developer...</h3>
          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">Who am I?</h4>
            <p className="">
              I'm Lee, an independent developer based in Sittingbourne, Kent,
              with a passion for creating websites that don't just look
              great—they work harder for your business. Every project starts
              with understanding your goals and ends with a digital presence
              that converts visitors into customers.
            </p>
          </div>
          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">My Approach</h4>
            <p className="">
              <strong>Clean design meets smart functionality.</strong> I believe
              in keeping things simple and effective—no unnecessary complexity,
              no confusing navigation. Just websites that your audience will
              love using and you'll be proud to share, backed by ongoing support
              you can actually rely on.
            </p>
          </div>

          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">
              Who I Work With
            </h4>
            <p>
              Whether you're a creative showcasing your portfolio, a restaurant
              wanting to streamline bookings, or a local business ready to make
              your mark online, I'll work closely with you to bring your vision
              to life. I'm here for the long haul—building lasting partnerships
              and watching your business grow.
            </p>
          </div>
        </div>
      </div>
      <div className="about-me__card--get-started">
        <h4 className="about-me__section-title text-blue">
          Ready To Get Started?
        </h4>
        <p>
          I'd love to hear about your project. Email me at{" "}
          <a href="mailto:lee@charltonwebdev.com">lee@charltonwebdev.com</a> or
          call/text/WhatsApp <a href="tel:07947680701">07947 680 701</a> for a
          no-pressure chat about what we can create together.
        </p>
      </div>
      {/* <div className="about-me__cta-container">
        <a href="#contact" className="get-in-touch-button">
          <span className="button-text">Get in touch</span>
          <div className="white-background"></div>
        </a>
      </div> */}
    </div>
  )
}

export default AboutMe

import photo from "../assets/images/Photo-of-me-in-norway.jpg"

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me__content-container">
        <div className="about-me__img-container">
          <img
            className="about-me__img"
            src={photo}
            alt="Lee Charlton in Lofoten islands in Norway"
          />
        </div>
        <div className="about-me__text-container">
          <h2 className="about-me__heading">
            Websites That Work As Hard As You Do
          </h2>

          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">What i do</h4>
            <p className="">
              As an independent developer based in Sittingbourne, Kent, I
              specialize in creating websites that don't just look great - they
              work harder for your business. Every project starts with
              understanding your goals and ends with a digital presence that
              converts visitors into customers.
            </p>
          </div>
          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">My Approach</h4>
            <p className="">
              <strong>Clean design meets smart functionality.</strong> No
              unnecessary complexity, no confusing navigation—just websites that
              your audience will love using and you'll be proud to share.
            </p>
          </div>

          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">Who I Work With</h4>
            <p>
              Whether you're a creative showcasing your portfolio, a restaurant
              wanting to streamline bookings, or a local business ready to make
              your mark online, I'll work closely with you to bring your vision
              to life.
            </p>
          </div>

          <div className="about-me__card">
            <h4 className="about-me__section-title text-blue">
              Ready To Get Started?
            </h4>
            <p>
              I'd love to hear about your project. Email me at{" "}
              <a href="mailto:lee@charltonwebdev.com">lee@charltonwebdev.com</a>{" "}
              or call/text/whatsapp <a href="tel:07947680701">07947680701</a>{" "}
              for a no-pressure chat about what we can create together.
            </p>
          </div>
        </div>
      </div>
      <div className="about-me__cta-container">
        <a href="#contact" className="get-in-touch-button">
          Get in touch
        </a>
      </div>
    </div>
  )
}

export default AboutMe

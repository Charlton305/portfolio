import photo from "../assets/images/Photo-of-me-in-norway.jpg";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <h2 className="about-me__heading text-center">ABOUT ME</h2>
      <div className="about-me__content-container">
        <div className="about-me__img-container">
          <img
            className="about-me__img"
            src={photo}
            alt="A man taking a selfie on the snowy Lofoten islands in Norway"
          />
        </div>
        <div className="about-me__text-container">
          <h3>
            I'm a web designer and developer based in Kent, UK.
          </h3>
          <p>
            I design and develop visually appealing, highly functional
            websites that drive business growth and strengthen your brand.
            My design philosophy centers on the idea that less is more.
            As websites often suffer from clutter and distractions, I
            prioritize clarity and simplicity, ensuring users can easily
            find the information they need.
          </p>
          <p>
            I have a keen eye for detail, taking pride in every project I create. I work closely with my clients
            throughout the development process, from initial design to final
            production, allowing as much or as little input as required to ensure their vision is realized and
            their goals are achieved. <a href="#projects" className="about-me__content-link">Click here</a> to
            view my latest work...
          </p>
          <p>
            If you’re ready to bring your ideal website to life, I’d love to help.
            Whether you need a complete website from concept to launch or enhancements
            to an existing site, I offer comprehensive services tailored to your needs.
            For inquiries, please email me at lee@charltonwebdev.com or call 07947680701.
            I look forward to hearing from you.
          </p>
          <a
            href="#contact"
            className="get-in-touch-button"
          >
            Get in touch
          </a>
        </div>
      </div>

    </div>
  );
};

export default AboutMe;

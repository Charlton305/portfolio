import photo from "../assets/images/me.jpg";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <h1 className="about-me__heading">ABOUT ME</h1>
      <div className="about-me__content-container">
        <div className="about-me__img-container">
          <img
            className="about-me__img"
            src={photo}
            alt="a picture of me on holiday in Norway"
          />
        </div>
        <div className="about-me__text-container">
          <h2>
            I'm a web designer and developer based in Kent, UK.
          </h2>
          <p>
            I design and develop visually appealing, highly functional
            websites that drive business growth and strengthen your brand.
            My design philosophy centers on the principle that less is more.
            As websites often suffer from clutter and distractions, I
            prioritize clarity and simplicity, ensuring users can easily
            find the information they need.
          </p>
          <p>
            With a keen eye for detail, I approach every project with 
            precision and a thoughtful strategy. I work closely with clients 
            throughout the development process, from initial concept to final 
            delivery, ensuring their vision is realized and their goals are 
            achieved. Click <a href="#projects">here</a> to view my latest work...
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

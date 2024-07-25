import photo from "../assets/images/me.webp.jpg";
import cv from "../assets/cv/Lee-Charlton-CV.pdf"

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
            {/* Hi, Im Lee and I build websites that look good and help to promote your brand and image. */}
            I'm a web designer and developer based in Kent, UK.
          </h2>
          <p>
            I build attractive, functional websites that help you
            to grow your business and brand.
            I believe that less is more when it comes to web design
            and this is reflected in my work.
            How many times have you visited a website that is full
            of noise and distraction when all you want is some basic
            information or a phone number?
          </p>
          <p>
            I have a keen eye for
            detail which played a huge part in my previous career
            as a painter and decorator and is the reason im not
            happy until my product is pixel perfect. I work
            closely with my clients through the whole development
            process from design to build and enjoy bouncing ideas
            back and forth until we are both happy with the outcome.
            Click <a href="#projects">here</a> to see my latest work...
          </p>
          <p>
            If you would like me to bring your dream website to life
            then please get in touch. Email me at leejcharlton@hotmail.com
            or contact me on 07947680701. I can provide a full service
            from design to build allowing you as much or
            as little input as you'd like. Or perhaps you have a
            design that you'd like brought to life or maybe a
            few adjustments to an existing website. Whatever it is,
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

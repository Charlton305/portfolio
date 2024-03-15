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
          <p>
            After 16 years in painting and decorating, 12 of which running a
            self employed business, I decided it was time for a change. I quit
            decorating in december 2022 and spent most of 2023 learning and
            practicing front-end web development.
          </p>
          <p>
            I have a solid understanding of HTML, CSS, Javascript and React.js
            and believe I would be a great asset to any company looking to take
            on a front-end developer. I am incredibly driven and self motivated
            and always looking to learn new things and expand my skills and
            knowledge in everything I do.
          </p>
          <p>
            I enjoy travelling and exploring and I love getting out of my
            comfort zone and pushing myself. Some of my hobbies include
            drumming, keeping fit, skateboarding, reading and stroking any dogs
            that I happen to bump into.
          </p>
          <a
            href={cv}
            target="_blank"
            className="CV__button"
          >
            View CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

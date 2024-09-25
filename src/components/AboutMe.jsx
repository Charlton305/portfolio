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
            I'm an independent web developer based in Sittingbourne, Kent.
          </h3>
          <p>
            I design and build professional websites that look good and help promote your brand. I'm all
            about clean, simple designs, making sure your visitors find exactly what they need without the clutter.
          </p>
          <p>
            From simple portfolios to pubs and restaurants looking to showcase menus and take bookings,
            I build them all. I love collaborating with clients to bring their ideas to life, whether you're
            starting from scratch or enhancing an existing site.
          </p>
          <p>
          I'm always up for a chat to discuss your ideas and how we can bring them to life. If you're 
          interested in working together, get in touch! You can email me at lee@charltonwebdev.com or call 07947680701.
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

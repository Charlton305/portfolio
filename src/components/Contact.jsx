const Contact = () => {
  const year = new Date().getFullYear()

  return (
    <div className="contact load-hidden" id="contact">
      <h1 className="contact__heading">CONTACT ME</h1>
      <h3 className="contact__email">lee@charltonwebdev.com</h3>
      <h3 className="contact__email">07947 680701</h3>
      <a href="#welcome" className="get-in-touch-button back-to-top">
        Back To top
      </a>
      <p className="copyright">© CharltonWebDev {year}</p>
    </div>
  );
};

export default Contact;

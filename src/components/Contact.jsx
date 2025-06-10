const Contact = () => {
  const year = new Date().getFullYear()

  return (
    <div className="contact load-hidden" id="contact">
      <h2 className="contact__heading">GET IN TOUCH</h2>
      <p className="contact__email">lee@charltonwebdev.com</p>
      <p className="contact__email phone">07947 680701</p>
      <a href="#welcome" className="get-in-touch-button back-to-top">
        Back To top
      </a>
      <p className="copyright">© CharltonWebDev {year}</p>
    </div>
  );
};

export default Contact;

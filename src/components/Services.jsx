const Services = () => {
  return (
    <>
      <div className="services" id="services">
          <h2 className="services__heading">SERVICES</h2>
        <div className="services__container">
          <div className="services__grid">
            <div className="services__grid-item">
              <h3 className="text-blue">Small Static Sites</h3>
              <p>A small website, usually 1 - 3 pages, designed to display basic information
                and contact details.</p>
              <h4 className="services__sub-heading text-blue">Who is it for?</h4>
              <p>Perfect for anyone looking to create an online presence for their
                small business or personal portfolio.</p>
              <h4 className="services__sub-heading text-blue">How much does it cost?</h4>
              <p>A simple static site could cost as little as £250 plus hosting,
                depending on personal needs.</p>
            </div>
            <div className="services__grid-item">
              <h3 className="text-blue">Large Static Sites</h3>
              <p>A medium to large website, usual 4 - 10 pages, for displaying detailed
                information along with contact and booking forms.</p>
              <h4 className="services__sub-heading text-blue">Who is it for?</h4>
              <p>These websites are great for businesses looking to grow their brand and
                provide detailed information about products, services and menus offered,
                along with contact and booking forms to make it easy for customers to get
                in touch</p>
              <h4 className="services__sub-heading text-blue">How much does it cost?</h4>
              <p>A medium - large site can cost from around £500 plus hosting but can
                vary depending on personal needs and the level of customisation required.</p>
            </div>
            <div className="services__grid-item">
              <h3 className="text-blue">CMS and E-Commerce</h3>
              <p>A dynamic website such as a blog or an online store, which allows
                you, the website owner, to add and edit content or products.</p>
              <h4 className="services__sub-heading text-blue">Who is it for?</h4>
              <p>For anybody looking to start a blog or a small business looking to sell products online
                with an easy to use interface.</p>
              <h4 className="services__sub-heading text-blue">How much does it cost?</h4>
              <p>Given the unique nature of each website, it can be difficult to provide a specific price.
                However, feel free to get in touch and I'll be happy to discuss ideas with you and provide
                a personalised quote.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services
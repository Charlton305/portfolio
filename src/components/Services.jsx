// Custom tick icon component
const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    className="tick-icon"
    style={{ width: "20px", height: "20px", fill: "#10B981", color: "#10B981" }}
  >
    <path
      fill="currentColor"
      d="M11.102 7.37a.75.75 0 1 0-1.06-1.06L7.54 8.81 6.508 7.78a.75.75 0 0 0-1.06 1.06l1.407 1.408a.968.968 0 0 0 1.37 0l2.877-2.878Z"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M15 7.995a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clipRule="evenodd"
    />
  </svg>
)

const Services = () => {
  const features = {
    static: [
      "Fast loading speeds",
      "Mobile-responsive design",
      "SEO optimised",
      "Secure and reliable",
    ],
    webApps: [
      "Real-time updates",
      "User authentication",
      "Database integration",
      "Scalable architecture",
    ],
    cms: [
      "Easy content management",
      "Secure payment processing",
      "Inventory management",
      "Customer accounts",
    ],
  }

  return (
    <>
      <div className="services" id="services">
        <h2 className="services__heading">WHAT I OFFER</h2>
        <div className="services__container">
          <div className="services__grid">
            <div className="services__grid-item">
              <h3 className="text-blue">Static Websites</h3>
              <p>
                Professional websites ranging from simple landing pages to
                comprehensive business sites with multiple pages and contact
                forms.
              </p>
              <h4 className="services__sub-heading text-blue">
                Who is it for?
              </h4>
              <p>
                Perfect for businesses and individuals looking to establish
                their online presence, from basic portfolios to detailed service
                showcases with booking functionality.
              </p>
              <h4 className="services__sub-heading text-blue">Key features</h4>
              <ul>
                {features.static.map((feature, index) => (
                  <li key={index}>
                    <TickIcon />
                    <p>{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="services__grid-item">
              <h3 className="text-blue">Large Static Sites</h3>
              <p>
                A medium to large website, usual 4 - 10 pages, for displaying
                detailed information along with contact and booking forms.
              </p>
              <h4 className="services__sub-heading text-blue">
                Who is it for?
              </h4>
              <p>
                These websites are great for businesses looking to grow their
                brand and provide detailed information about products, services
                and menus offered, along with contact and booking forms to make
                it easy for customers to get in touch
              </p>
              <h4 className="services__sub-heading text-blue">
                How much does it cost?
              </h4>
              <p>
                A medium - large site can cost from around £800 plus hosting but
                can vary depending on personal needs and the level of
                customisation required.
              </p>
            </div>
            <div className="services__grid-item">
              <h3 className="text-blue">CMS and E-Commerce</h3>
              <p>
                A dynamic website such as a blog or an online store, which
                allows you, the website owner, to add and edit content or
                products.
              </p>
              <h4 className="services__sub-heading text-blue">
                Who is it for?
              </h4>
              <p>
                For anybody looking to start a blog or a small business looking
                to sell products online with an easy to use interface.
              </p>
              <h4 className="services__sub-heading text-blue">
                How much does it cost?
              </h4>
              <p>
                Given the unique nature of each website, it can be difficult to
                provide a specific price. However, feel free to get in touch and
                I'll be happy to discuss ideas with you and provide a
                personalised quote.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services

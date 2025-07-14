// Custom tick icon component
const TickIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    className="tick-icon"
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
      "API intergrations",
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
              <div className="services__grid-paragraph">
                <h3 className="text-blue">Static Websites</h3>
                <p>
                  Traditional websites that showcase your business without
                  requiring user accounts or databases. From simple one-page
                  landing sites to comprehensive multi-page business websites
                  with contact forms, galleries, and service information.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Who is it for?
                </h4>
                <p>
                  Ideal for businesses, freelancers, and organizations who need
                  an effective online presence to display their work, services,
                  or products. Perfect when you need to inform visitors and
                  generate leads without complex interactive features.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Key features
                </h4>
                <ul>
                  {features.static.map((feature, index) => (
                    <li key={index}>
                      <TickIcon />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="services__grid-item">
              <div className="services__grid-paragraph">
                <h3 className="text-blue">Web Apps</h3>
                <p>
                  Custom-built interactive applications that run in your
                  browser. Think user management systems, booking platforms,
                  inventory trackers, or customer portals - anything that needs
                  user accounts, data storage, and real-time functionality.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Who is it for?
                </h4>
                <p>
                  Perfect for businesses that need more than a website - those
                  requiring user login systems, data management, workflow
                  automation, or custom tools that don't exist off-the-shelf.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Key features
                </h4>
                <ul>
                  {features.webApps.map((feature, index) => (
                    <li key={index}>
                      <TickIcon />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="services__grid-item">
              <div className="services__grid-paragraph">
                <h3 className="text-blue">CMS and E-Commerce</h3>
                <p>
                  Content-managed websites and online stores that put you in
                  control. These platforms let you easily add blog posts, update
                  product listings, manage inventory, and process payments - all
                  through user-friendly admin panels without needing technical
                  knowledge.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Who is it for?
                </h4>
                <p>
                  Great for bloggers who want to publish regularly, retailers
                  ready to sell online, or any business needing to frequently
                  update their content. Ideal when you need the flexibility to
                  manage your site independently.
                </p>
              </div>
              <div className="services__grid-paragraph">
                <h4 className="services__sub-heading text-blue">
                  Key features
                </h4>
                <ul>
                  {features.cms.map((feature, index) => (
                    <li key={index}>
                      <TickIcon />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Services

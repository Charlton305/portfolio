import { useEffect } from 'react'
import photo from '../assets/images/me-in-norway.jpg'
import photox2 from '../assets/images/me-in-norway-x2.jpg'
import logo from '../assets/images/logo.svg'

import { MonitorSmartphone, Zap, SearchCheck } from 'lucide-react'

const AboutMe = () => {
  useEffect(() => {
    const button = document.querySelector('.get-in-touch-button')

    const handleMouseEnter = () => {
      button.querySelector('.white-background').style.width = '100%'
    }

    const handleMouseLeave = () => {
      button.querySelector('.white-background').style.width = '0'
    }

    button.addEventListener('mouseenter', handleMouseEnter)
    button.addEventListener('mouseleave', handleMouseLeave)

    // Cleanup function
    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter)
      button.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className='about-me' id='about'>
      <h2 className='about-me__heading'>PROFESSIONAL WEBSITES WITH A PERSONAL TOUCH</h2>
      <p className='about-me__subheading'>
        I design and build professional, attractive websites that help your business grow. I handle all the technical
        decisions whilst working closely with my clients, allowing as much or as little input as needed to achieve a
        truly personal experience...
      </p>

      <div className='about-me__info-container'>
        <div className='about-me__info-box info-box-1'>
          <MonitorSmartphone className='about-me__icon' size={50} />
          <h3 className=''>FULLY RESPONSIVE</h3>
          <p>
            Your website will look perfect and function flawlessly on all devices - from mobile phones to tablets to
            desktop computers. Every element adapts beautifully to any screen size for the best user experience.
          </p>
        </div>
        <div className='about-me__info-box info-box-2'>
          <Zap className='about-me__icon' size={50} />
          <h3 className=''>LIGHTNING-FAST LOADING</h3>
          <p>
            Fast-loading websites keep visitors engaged and improve search rankings. I optimise images, streamline code,
            and use modern techniques to ensure your site loads quickly, reducing bounce rates and improving
            conversions.
          </p>
        </div>
        <div className='about-me__info-box info-box-3'>
          <SearchCheck className='about-me__icon' size={50} />
          <h3 className=''>SEO OPTIMISED</h3>
          <p>
            Built with search engines in mind from the ground up. Clean code structure, proper meta tags, fast loading
            speeds, and SEO best practices help your website rank better in Google search results and attract more
            visitors.
          </p>
        </div>
      </div>

      <div className='about-me__cta-container'>
        <a href='#contact' className='get-in-touch-button'>
          <span className='button-text'>Get in touch</span>
          <div className='white-background'></div>
        </a>
      </div>

      <div className='about-me__content-container'>
        <h2 className='meet-your-dev--mobile'>Meet your developer</h2>
        <div className='about-me__img-container'>
          <img
            className='about-me__img'
            src={photo}
            srcSet={`${photox2} 2x`}
            width='600'
            height='700'
            alt='Lee Charlton in Lofoten islands in Norway'
            loading='lazy'
          />
          <div className='about-me__image-text-container'>
            <div>
              <p className='about-me__image-text-name text-blue'>Lee Charlton</p>
              <p className='about-me__image-text-job'>Web Developer</p>
            </div>
            <img className='about-me__image-text-image' src={logo} alt='web dev logo' />
          </div>
        </div>
        <div className='about-me__text-container'>
          <h2 className='meet-your-dev--desktop'>Meet your developer</h2>
          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>Who am I?</h3>
            <p className=''>
              I'm Lee, a freelance web developer from Sittingbourne, Kent. I create high-quality, custom-built websites
              and web apps for small businesses and solo professionals. With the ability to write clean, professional
              code, I can either create something completely original or work with templating platforms like Shopify and
              Webflow - whatever suits your project best.
            </p>
          </div>
          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>My Approach</h3>
            <p className=''>
              I keep things simple because simple works. Clean layouts, easy navigation and modern styling that doesn't
              get in the way of your message. No fancy tricks or confusing menus - just websites that look professional
              and make sense to your visitors.
            </p>
          </div>

          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>Who I Work With</h3>
            <p>
              I work with all kinds of small businesses - pubs and restaurants, construction companies, office teams,
              and everyone in between. Whether it's a simple website to showcase your work, an online booking system, or
              a complete custom-built data management app, I can help.
            </p>
          </div>
        </div>
      </div>
      <div className='about-me__card--get-started diagonal'>
        <h4 className='about-me__section-title text-blue'>Ready To Get Started?</h4>
        <p>
          I'd love to hear about your project. Email me at{' '}
          <a href='mailto:lee@charltonwebdev.com'>lee@charltonwebdev.com</a> or call/text/WhatsApp{' '}
          <a href='tel:07947680701'>07947 680 701</a> for a no-pressure chat about what we can create together.
        </p>
      </div>
    </div>
  )
}

export default AboutMe

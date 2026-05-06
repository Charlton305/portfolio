import { useEffect } from 'react'
import photo from '../assets/images/me-in-norway.jpg'
import photox2 from '../assets/images/me-in-norway-x2.jpg'
import logo from '../assets/images/logo.svg'

import { MonitorSmartphone, SearchCheck, MessageCircle } from 'lucide-react'

const AboutMe = () => {
  useEffect(() => {
    const button = document.querySelector('.cta-btn--white')

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
        I create professional hand-crafted websites and web apps for UK businesses, focusing on
        modern design and high performance with a friendly, personal approach.
      </p>

      <div className='about-me__info-container'>
        <div className='about-me__info-box info-box-1'>
          <MonitorSmartphone className='about-me__icon' size={50} />
          <h3 className=''>FULLY RESPONSIVE</h3>
          <p>
            Your website will look perfect and function flawlessly on all devices - from mobile
            phones to tablets to desktop computers. Every element adapts to any screen size for the
            best user experience.
          </p>
        </div>
        <div className='about-me__info-box info-box-2'>
          <MessageCircle className='about-me__icon' size={50} />
          <h3 className=''>DIRECT COMMUNICATION</h3>
          <p>
            No chasing emails, being passed around or put on hold. You deal directly with me
            throughout your entire project, meaning quick responses, clear updates and someone who
            knows your site inside out.
          </p>
        </div>
        <div className='about-me__info-box info-box-3'>
          <SearchCheck className='about-me__icon' size={50} />
          <h3 className=''>SEO OPTIMISED</h3>
          <p>
            Built with search engines in mind from the ground up. Clean code structure, proper meta
            tags, fast loading speeds, and SEO best practices help your website rank better in
            Google search results and attract more visitors.
          </p>
        </div>
      </div>

      <div className='about-me__cta-container'>
        <a href='#contact' className='cta-btn--white'>
          <span className='button-text'>Get in touch</span>
          <div className='white-background'></div>
        </a>
      </div>

      <div className='about-me__content-container'>
        <h2 className='meet-your-dev--mobile'>About me...</h2>
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
          <h2 className='meet-your-dev--desktop'>About me...</h2>
          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>Who am I?</h3>
            <p className=''>
              I'm Lee, a freelance web developer from Sittingbourne, Kent. I design, build and
              maintain websites and web apps for small businesses and solo professionals. I work
              closely with my clients, keeping things relaxed and approachable at all times, meaning
              none of the jargon or overheads you get with larger agencies.
            </p>
          </div>
          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>My Approach</h3>
            <p className=''>
              My hand coded sites are designed with clean layouts, easy navigation and modern styling so your
              visitors can find exactly what they need. No unnecessary clutter or confusing menus,
              just a clear, professional structure that makes your site easy to use.
            </p>
          </div>

          <div className='about-me__card diagonal'>
            <h3 className='about-me__section-title text-blue'>Who I Work With</h3>
            <p>
              I work with all kinds of small businesses - pubs and restaurants, construction
              companies, office teams, and everyone in between. Whether it's a simple website to
              showcase your work, an online booking system, or a complete custom-built data
              management app, I can help.
            </p>
          </div>
        </div>
      </div>
      <div className='about-me__card--get-started diagonal'>
        <h3 className='about-me__cta-title text-blue'>Ready To Get Started?</h3>
        <p>Get in touch for a no-pressure chat.</p>
        <div className='about-me__contact-details--button-container'>
          <a className='cta-btn' href='#contact'>
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe

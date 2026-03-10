import { useEffect } from 'react'

const Contact = () => {
  const year = new Date().getFullYear()

  useEffect(() => {
    const button = document.getElementById('back-to-top')
    const whiteBackground = button.querySelector('.white-background')

    const handleMouseEnter = () => {
      console.log('Mouse entered back to top button')
      whiteBackground.style.width = '100%'
    }

    const handleMouseLeave = () => {
      whiteBackground.style.width = '0'
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
    <div className='contact load-hidden' id='contact'>
      <h2 className='contact__heading'>GET IN TOUCH</h2>
      <h3 className='contact__subheading'>Email, call, text or WhatsApp</h3>
      <p className='contact__email'>lee@charltonwebdev.com</p>
      <p className='contact__email phone'>07947 680701</p>
      <a href='#welcome' id='back-to-top' className='cta-btn--white'>
        <span className='button-text'>Back To top</span>
        <div className='white-background'></div>
      </a>
      <p className='copyright'>
        © {year} Lee Charlton - Web Developer <br />
        Trading as Charlton Web Development Limited (Company No: 16412334)
      </p>
    </div>
  )
}

export default Contact

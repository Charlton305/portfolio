import { useEffect } from 'react'
import Welcome from './Welcome'
import AboutMe from './AboutMe'
import ProjectsList from './ProjectsList'
import Contact from './Contact'
import scrollReveal from '../assets/scrollReveal'
import { targetElements, defaultProps } from '../assets/scrollRevealData'
import Services from './Services'

const App = () => {
  useEffect(() => {
    scrollReveal(targetElements, defaultProps)
  }, [])
  return (
    <main>
      <Welcome />
      <AboutMe />
      <Services />
      <ProjectsList />
      <Contact />
    </main>
  )
}

export default App

import Project from "./Project"
import { projects } from "../assets/projects"

const ProjectsList = () => (
  <div className="project-list" id="projects">
    <div className="project-list__container">
      <h2 className="project-list__heading load-hidden">LATEST WORK</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </div>
  </div>
)

export default ProjectsList

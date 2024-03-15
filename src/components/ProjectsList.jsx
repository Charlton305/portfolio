import Project from "./Project";
import { projects } from "../assets/projects";

const ProjectsList = () => (
  <div className="project-list" id="projects">
    <h1 className="project-list__heading load-hidden">PROJECTS</h1>
    {projects.map((project, index) => (
      <Project key={index} {...project} index={index} />
    ))}
  </div>
);

export default ProjectsList;

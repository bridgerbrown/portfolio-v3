import Project from "../components/Project.js";
import projectsData from "../data/projectsData.js";
import { state } from "./state.js";

export default function renderProjects() {
  if (!projectsData) {
    return `
      <div id="loading__container">
        <h2>Loading...</h2>
      </div>`;
  }

  const allProjects = projectsData.map(project => new Project({ project }).getHtml());
  const featuredProjects = projectsData.filter(project => project.featured === "true").map(project => new Project({ project }).getHtml());
  const soloProjects = projectsData.filter(project => project.type === "Solo-Project").map(project => new Project({ project }).getHtml());
  const workProjects = projectsData.filter(project => project.type !== "Solo-Project").map(project => new Project({ project }).getHtml());

  const selectedProjects =
    state.category === 'all' ? allProjects :
    state.category === 'solo-projects' ? soloProjects :
    state.category === 'featured' ? featuredProjects :
    workProjects;

  return selectedProjects.join('');
}

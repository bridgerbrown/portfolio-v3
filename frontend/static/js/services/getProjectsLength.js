import projectsData from "../data/projectsData.js";

export default function getProjectsLength(category) {
  const filteredProjects =
    category === 'all' ? projectsData :
    category === 'solo-projects' ? projectsData.filter(project => project.type === "Solo-Project") :
    category === 'featured' ? projectsData.filter(project => project.featured === "true") :
    projectsData.filter(project => project.type !== "Solo-Project");

  return filteredProjects.length;
}

import projectsData from "../data/projectsData.js";
import Project from "../components/Project.js";
import { animate, stagger } from "motion";

export default class Projects extends HTMLElement {
  connectedCallback() {
    this.render();
    window.addEventListener("categorychange", () => {
      this.render();  
    });
  }

  getProjectsLength(category) {
    const allProjects = projectsData;
    const featuredProjects = projectsData.filter(project => project.featured === "true");
    const soloProjects = projectsData.filter(project => project.type === "Solo-Project");
    const workProjects = projectsData.filter(project => project.type !== "Solo-Project");

    const selectedProjects = category === 'all' ? allProjects :
      category === 'solo-projects' ? soloProjects :
      category === 'featured' ? featuredProjects :
      workProjects;

    return selectedProjects.length;
  }

  renderCategoryRadio() {
    const categoriesData = [
      {
        value: "all",
        display: "All",
        length: this.getProjectsLength("all")
      }, 
      {
        value: "featured",
        display: "Featured",
        length: this.getProjectsLength("featured")
      }, 
      {
        value: "solo-projects",
        display: "Solo-Projects",
        length: this.getProjectsLength("solo-projects")
      }, 
      {
        value: "work",
        display: "Work",
        length: this.getProjectsLength("work")
      }, 
    ]
    const radioContainer = document.querySelector(".projects__categories-container");
    radioContainer.innerHTML = "";

    categoriesData.forEach((category) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.className = "projects__category-input";
      input.id = "category-input";
      input.name = "categories";
      input.value = category.value;
      input.checked = app.categories.category === category.value;
      input.title = "Projects " + category.value + " category filter"; 
      input.alt = "Projects " + category.value + " category filter";
      radioContainer.appendChild(input);

      const label = document.createElement("label");
      label.htmlFor = category.value;
      label.className = "projects__category-label";
      label.id = `${category.value}-label`;
      label.innerText = app.categories.category === category.value ? `${category.display} (${category.length})` : `${category.display}`;
      label.title = "Projects " + category.value + " category filter"; 
      label.alt = "Projects " + category.value + " category filter";
      radioContainer.appendChild(label);

      label.addEventListener("click", (event) => {
        app.categories.category = category.value;
      });
    });
  }

  renderProjects() {
    const allProjects = projectsData;
    const featuredProjects = projectsData.filter(project => project.featured === "true");
    const soloProjects = projectsData.filter(project => project.type === "Solo-Project");
    const workProjects = projectsData.filter(project => project.type !== "Solo-Project");

    const category = app.categories.category;
    const selectedProjects = category === 'all' ? allProjects :
      category === 'solo-projects' ? soloProjects :
      category === 'featured' ? featuredProjects :
      workProjects;

    const projectsContainer = document.querySelector("#projects__content-container");
    projectsContainer.innerHTML = "";

    selectedProjects.map((project) => {
      const item = document.createElement("project-item");
      item.dataset.project = JSON.stringify(project);
      projectsContainer.appendChild(item);
    });
  }

  render() {
    const template = document.getElementById("projects-view-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    this.renderCategoryRadio();
    this.renderProjects();

    const headerContainer = document.getElementById("header__container-projects");
    headerContainer.innerHTML = "";
    const header = document.createElement("header-item");
    header.dataset.heading = JSON.stringify("Projects");
    headerContainer.appendChild(header);

    const projects = document.querySelectorAll("project-item");

    projects.forEach((project) => {
      animate(project, { opacity: [0, 1] }, { delay: stagger(1) });
    });
  }
}

customElements.define("projects-view", Projects);

import getProjectsLength from "../services/getProjectsLength.js";
import PageHeader from "../components/PageHeader.js";
import projectsData from "../data/projectsData.js";
import Project from "../components/Project.js";
import HeaderRenderer from "../services/renderHeader.js";

export default class Projects extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("projects-view-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);    
    this.headerRenderer = new HeaderRenderer(this.root, "Projects");
  }

  async connectedCallback() {
    await this.loadCSS();
    this.render();
    window.addEventListener("categorychange", async () => {
      await this.loadCSS();
      this.render();  
    });
  }

  renderCategoryRadio() {
    const categoriesData = [
      {
        value: "all",
        display: "All",
        length: getProjectsLength("allProjects")
      }, 
      {
        value: "featured",
        display: "Featured",
        length: getProjectsLength("featuredProjects")
      }, 
      {
        value: "solo-projects",
        display: "Solo-Projects",
        length: getProjectsLength("solo-projects")
      }, 
      {
        value: "work",
        display: "Work",
        length: getProjectsLength("workProjects")
      }, 
    ]
    const radioContainer = this.root.querySelector(".projects__categories-container");
    radioContainer.innerHTML = "";

    categoriesData.forEach((category) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.className = "projects__category-input";
      input.id = "category-input";
      input.name = "categories";
      input.value = category.value;
      input.checked = app.categories.category === category.value;
      radioContainer.appendChild(input);

      const label = document.createElement("label");
      label.htmlFor = category.value;
      label.className = "projects__category-label";
      label.id = `${category.value}-label`;
      label.innerText = app.categories.category === category.value ? `${category.display} (${category.length})` : `${category.display}`;
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

    const projectsContainer = this.root.querySelector("#projects__content-container");
    projectsContainer.innerHTML = "";

    selectedProjects.map((project) => {
      const item = document.createElement("project-item");
      item.dataset.project = JSON.stringify(project);
      projectsContainer.appendChild(item);
    });
  }



  render() {
    this.headerRenderer.render();
    this.renderCategoryRadio();
    this.renderProjects();
  }
}

customElements.define("projects-view", Projects);

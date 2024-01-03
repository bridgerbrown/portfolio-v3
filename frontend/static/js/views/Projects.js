import AbstractView from "./AbstractView.js";
import getProjectsLength from "../services/getProjectsLength.js";
import PageHeader from "../components/PageHeader.js";
import projectsData from "../data/projectsData.js";
import Project from "../components/Project.js";

export default class Projects extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });

    const template = document.getElementById("projects-view-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);    
  }

  connectedCallback() {
    this.render();
    window.addEventListener("categorychange", () => {
      this.render();  
    });
  }

  renderCategoryRadio(id, label, count) {
    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.className = "projects__category-input";
    radioButton.id = "category-input";
    radioButton.name = "categories";
    radioButton.value = id;
    radioButton.checked = this.getState().category === id;

    radioButton.addEventListener("change", () => {
      this.handleRadioChange(id);
    });

    const radioLabel = document.createElement("label");
    radioLabel.htmlFor = id;
    radioLabel.className = "projects__category-label";
    radioLabel.id = `${id}-label`;
    radioLabel.innerText = this.getState().category === id ? `${label} (${count})` : `${label}`;

    return radioButton.outerHTML + radioLabel.outerHTML;
  }

  renderProjects(category) {
    if (!projectsData) {
      return `
        <div id="loading__container">
          <h2>Loading...</h2>
        </div>`;
    }

    const selectedProjects = this.getSelectedProjects(category);
    return selectedProjects.map(project => new Project({ project }).getHtml()).join('');
  }

  getSelectedProjects(category) {
    const allProjects = projectsData;
    const featuredProjects = projectsData.filter(project => project.featured === "true");
    const soloProjects = projectsData.filter(project => project.type === "Solo-Project");
    const workProjects = projectsData.filter(project => project.type !== "Solo-Project");

    return category === 'all' ? allProjects :
           category === 'solo-projects' ? soloProjects :
           category === 'featured' ? featuredProjects :
           workProjects;
  }

  async getHtml() {
    const pageHeader = new PageHeader("Projects");
    const pageHeaderHtml = pageHeader.getHtml();

    return `
      <div class="page page__projects">
        ${pageHeaderHtml}
        <div class="projects__categories-container content__width">
          ${this.renderCategoryRadio("all", "All", getProjectsLength("allProjects"))}
          ${this.renderCategoryRadio("featured", "Featured", getProjectsLength("featuredProjects"))}
          ${this.renderCategoryRadio("solo-projects", "Solo-Projects", getProjectsLength("soloProjects"))}
          ${this.renderCategoryRadio("work", "Work", getProjectsLength("workProjects"))}
        </div>
        <main class="page__content-container">
          <div id="projects__content-container">
            ${this.renderProjects("all")}
          </div>
        </main>
        <Footer />
      </div>
    `;
  }

  async render() {
    if (template) this.root.innerHTML = await this.getHtml();
  }
}

customElements.define("projects-view", Projects);

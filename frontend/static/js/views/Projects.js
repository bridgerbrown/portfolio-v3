import AbstractView from "./AbstractView.js";
import getProjectsLength from "../services/getProjectsLength.js";
import PageHeader from "../components/PageHeader.js";
import projectsData from "../data/projectsData.js";
import Project from "../components/Project.js";

export default class Projects extends AbstractView {
  constructor(params) {
    super(params);

    this.state = {
      category: "all",
    };
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  renderCategoryRadio(id, label, count) {
    return `
      <input
        type="radio"
        class="projects__category-input"
        id="${id}"
        name="categories"
        value="${id}"
        checked="${this.getState().category === id}"
      />
      <label
        for="${id}"
        class="projects__category-label"
        id="${id}-label"
      >
        ${this.getState().category === id ? `${label} (${count})` : `${label}`}
      </label>
    `;
  };

  renderProjects() {
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
      this.getState().category === 'all' ? allProjects :
      this.getState().category === 'solo-projects' ? soloProjects :
      this.getState().category === 'featured' ? featuredProjects :
      workProjects;

    return selectedProjects.join('');
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
            ${this.renderProjects()}
          </div>
        </main>
        <Footer />
      </div>
    `;
  }

  async render() {
    const app = document.getElementById("app");
    if (app) {
      app.innerHTML = await this.getHtml()
    };
  }
}

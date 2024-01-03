import AbstractView from "./AbstractView.js";
import { state } from "../services/state.js";
import getProjectsLength from "../services/getProjectsLength.js";
import PageHeader from "../components/PageHeader.js";
import projectsData from "../data/projectsData.js";
import Project from "../components/Project.js";
import useState from "../services/useState.js";

export default class Projects extends AbstractView {
  constructor(params) {
    super(params);

    this.state = {
      category: "all",
    };
  }

  async getHtml() {
    const pageHeader = new PageHeader("Projects");
    const pageHeaderHtml = pageHeader.getHtml();

    const [category, setCategory] = useState(this.state.category, () => this.render());

    function renderCategoryRadio(id, label, count) {
      return `
        <input
          type="radio"
          class="projects__category-input"
          id="${id}"
          name="categories"
          value="${id}"
          checked="${state.category === id}"
          onclick="() => setCategory('${id}')"
        />
        <label
          for="${id}"
          class="projects__category-label"
          id="${id}-label"
        >
          ${state.category === id ? `${label} (${count})` : `${label}`}
        </label>
      `;
    };

    return `
      <div class="page page__projects">
        ${pageHeaderHtml}
        <div class="projects__categories-container content__width">
          ${renderCategoryRadio("all", "All", getProjectsLength("allProjects"))}
          ${renderCategoryRadio("featured", "Featured", getProjectsLength("featuredProjects"))}
          ${renderCategoryRadio("solo-projects", "Solo-Projects", getProjectsLength("soloProjects"))}
          ${renderCategoryRadio("work", "Work", getProjectsLength("workProjects"))}
        </div>
        <main class="page__content-container">
          <div id="projects__content-container">
            ${renderProjects(category)}
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

function renderProjects(category) {
  if (!projectsData) {
    return `
      <div id="loading__container">
        <h2>Loading...</h2>
      </div>`;
  }

  const allProjects = projectsData;
  const featuredProjects = projectsData.filter(project => project.featured === "true");
  const soloProjects = projectsData.filter(project => project.type === "Solo-Project");
  const workProjects = projectsData.filter(project => project.type !== "Solo-Project");

  const selectedProjects =
    category === 'all' ? allProjects :
    category === 'solo-projects' ? soloProjects :
    category === 'featured' ? featuredProjects :
    workProjects;

  return selectedProjects.map(project => new Project({ project }).getHtml()).join('');
}



import AbstractView from "./AbstractView.js";
import { state } from "../services/state.js";
import renderProjects from "../services/renderProjects.js";
import getProjectsLength from "../services/getProjectsLength.js";
import renderCategoryRadio from "../services/renderCategoryRadio.js";

export default class Projects extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
      <div class="page page__projects">
          <div class="projects__categories-container content__width">
            ${renderCategoryRadio("all", "All", getProjectsLength("allProjects"))}
            ${renderCategoryRadio("featured", "Featured", getProjectsLength("featuredProjects"))}
            ${renderCategoryRadio("solo-projects", "Solo-Projects", getProjectsLength("soloProjects"))}
            ${renderCategoryRadio("work", "Work", getProjectsLength("workProjects"))}
          </div>
          <main class="page__content-container">
            <div id="projects__content-container">
              ${renderProjects()}
            </div>
          </main>
          <Footer />
      </div>
    `;
  }

  async render() {
    const app = document.getElementById("app");
    if (app) app.innerHTML = await this.getHtml();
  }
}

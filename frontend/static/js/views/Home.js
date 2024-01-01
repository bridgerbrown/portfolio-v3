import NavbarHome from "../components/Navbar.js";
import AbstractView from "./AbstractView.js";
import renderProjects from "../services/renderProjects.js"

export default class Home extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    const navbar = new NavbarHome();
    const navbarHtml = navbar.getHtml();

    return `
      <div class="page">
        <main id="home__container">
          <div id="nav__home-container">
            ${navbarHtml}
          </div>
          <div id="home__linebox">
            <div class="home__linebox-line" id="home__linebox-top"></div>
            <div class="home__linebox-line" id="home__linebox-right"></div>
            <div class="home__linebox-line" id="home__linebox-bottom"></div>
            <div class="home__linebox-line" id="home__linebox-left"></div>
          </div>
          <header class="home__heading-container">
            <h1>
              BRIDGER BROWN  
            </h1>
            <h2>
              Frontend Developer
            </h2>
          </header>
        </main>
      </div>
    `;
  }

  async render() {
    const app = document.getElementById("app");
    if (app) app.innerHTML = await this.getHtml();
  }
}


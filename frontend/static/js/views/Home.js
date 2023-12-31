import AbstractView from "./AbstractView.js";

export default class HomeView extends AbstractView {
  constructor(params) {
    super(params);
  }

  getHtml() {
    return `
      <div class="page">
        <main id="home__container">
          <div id="nav__home-container">
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

  appendNav() {
    console.log("appending");
    const navContainer = document.getElementById("nav__home-container");
    const navbar = document.createElement("navbar-home");
    navContainer.appendChild(navbar);
  }

  render() {
    const html = this.getHtml();
    document.getElementById("app").innerHTML = html;
    this.appendNav();
  }
}

const homeView = new HomeView();
homeView.render();

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
      <div id="page">
        <main id="home__container">
          <div id="nav__home-container">
            <nav id="nav__home">
              <a href="/" class="nav__link" data-link>Home</a>
              <a href="/projects" class="nav__link" data-link>Projects</a>
              <a href="/about" class="nav__link" data-link>About</a>
              <a href="/contact" class="nav__link" data-link>Contact</a>
            </nav>
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
}

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
      <div id="page">
        <main id="home__container">
          <div id="home__linebox">
            <div class="home__linebox-line" id="home__linebox-top"></div>
            <div class="home__linebox-line" id="home__linebox-right"></div>
            <div class="home__linebox-line" id="home__linebox-bottom"></div>
            <div class="home__linebox-line" id="home__linebox-left"></div>
          </div>
          <div class="nav__container-home">
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

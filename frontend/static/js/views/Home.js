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
            <h1 class="transition-all cursor-pointer text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white">
              BRIDGER BROWN  
            </h1>
            <h2 class="pb-1 cursor-pointer tracking-wide pl-0 md:pl-4 text-md sm:text-2xl font-thin text-white">
              Frontend Developer
            </h2>
          </header>
        </main>
      </div>
    `;
  }
}

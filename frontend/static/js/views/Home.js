import NavbarHome from "../components/Navbar.js";

export default class Home extends HTMLElement {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("home-view-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);    
  }

  connectedCallback() {
    this.loadCSS();
    this.render();
  }

  async loadCSS() {
    const styles = document.createElement("style");
    const request = await fetch("/static/css/index.css");
    const text = await request.text();
    styles.textContent = text;
    this.root.appendChild(styles);
  };

  getHtml() {
    const navbar = new NavbarHome();
    const navbarHtml = navbar.getHtml();

    return `
      <div class="page page__home">
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

  render() {
    const content = this.getHtml();
    this.root.innerHTML = content;
  }
}

customElements.define("home-view", Home);

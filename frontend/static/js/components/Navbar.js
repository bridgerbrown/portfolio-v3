class NavbarHome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <nav id="nav__home">
        <a href="/" class="nav__link" data-link>Home</a>
        <a href="/projects" class="nav__link" data-link>Projects</a>
        <a href="/about" class="nav__link" data-link>About</a>
        <a href="/contact" class="nav__link" data-link>Contact</a>
      </nav>
    `;
  }
}

customElements.define("navbar-home", NavbarHome);

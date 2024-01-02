export default class NavbarHome {
  getHtml() {
    return `<nav id="nav__home">
      <a href="/" class="nav__home-link" data-link>Home</a>
      <a href="/projects" class="nav__home-link" data-link>Projects</a>
      <a href="/about" class="nav__home-link" data-link>About</a>
      <a href="/contact" class="nav__home-link" data-link>Contact</a>
    </nav>
    `;
  }
};

export class Navbar {
  getHtml() {
    return `<nav id="nav__page">
      <a href="/" class="nav__page-link" data-link>Home</a>
      <a href="/projects" class="nav__page-link" data-link>Projects</a>
      <a href="/about" class="nav__page-link" data-link>About</a>
      <a href="/contact" class="nav__page-link" data-link>Contact</a>
    </nav>
    `;
  }
}

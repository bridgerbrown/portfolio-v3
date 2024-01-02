import { Navbar } from "./Navbar.js";

export default class PageHeader {
  constructor(props) {
    this.props = props;
  }
  getHtml() {
    const navbar = new Navbar();
    const navbarHtml = navbar.getHtml();

    return `
      <header class='header__container'>
        <div class='header__content-container'>
          <div class='header__text-container'>
            <h1>
              ${this.props}
            </h1>
            ${navbarHtml}
          </div>
          <div className="">
            <div class='header__line'></div>
          </div>
        </div>
      </header> 
    `;
  }
};

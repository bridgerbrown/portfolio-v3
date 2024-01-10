import Router from './services/Router.js';
import Categories from './services/Categories.js';
import { inView, animate, stagger } from 'motion';

import PageHeader from './components/PageHeader.js';
import Home from './views/Home.js';
import Project from './components/Project.js';
import Projects from './views/Projects.js';
import About from './views/About.js';
import Contact from './views/Contact.js';

window.app = {}

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = () => this.addEventListener.call(this, arguments);
HTMLElement.prototype.off = () => this.removeEventListener.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelector.call(this, arguments);
HTMLElement.prototype.$ = () => this.querySelectorAll.call(this, arguments);

app.router = Router;
app.categories = Categories;

window.addEventListener("DOMContentLoaded", () => {
  app.router.init();
  const pages = [".page__home", "projects-view", "about-view", "contact-view"];
  pages.forEach((item) => {
    animate(item, { opacity: [0, 1] }, { duration: 0.5, easing: "ease-in-out" })
  });
  animate(".home__heading-container h1",
    { opacity: [0, 1] },
    { duration: 1, delay: 0.25 }
  )
  animate(".home__heading-container h2",
    { opacity: [0, 1] },
    { duration: 1, delay: 1.5 }
  )
});

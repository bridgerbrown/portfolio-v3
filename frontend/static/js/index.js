import Router from './services/Router.js';
import Categories from './services/Categories.js';

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
});

export default class {
  constructor(params) {
    this.params = params;
  }

  async getHtml() {
    return "";
  }

  async render() {
    const app = document.getElementById("app");
    if (app) app.innerHTML += await this.getHtml();
  }
}

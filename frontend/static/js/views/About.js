export default class About extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  resumeConfirmation(state) {
    const resumeButton = document.getElementById("about__button-resume");
    const resumeQuestion = document.getElementById("about__resume-confirmation");
    if (state === "start") {
      resumeButton.style.opacity = 0;
      resumeButton.style.position = "fixed";
      resumeQuestion.style.opacity = 1;
      resumeQuestion.style.position = "relative";
    } else {
      resumeButton.style.opacity = 1;
      resumeButton.style.position = "relative";
      resumeQuestion.style.opacity = 0;
      resumeQuestion.style.position = "fixed";
    }
  }

  downloadResume() {
    window.open('/static/public/Bridger_Brown_Resume_2023.docx', '_blank');
  }

  render() {
    const template = document.getElementById("about-view-template");
    const content = template.content.cloneNode(true);
    this.appendChild(content);

    const headerContainer = document.getElementById("header__container-about");
    const header = document.createElement("header-item");
    header.dataset.heading = JSON.stringify("About");
    headerContainer.appendChild(header);

    const resumeButton = document.getElementById("about__button-resume");
    resumeButton.onclick = () => this.resumeConfirmation("start");

    const confirmButton = document.getElementById("about__resume-confirm");
    const exitButton = document.getElementById("about__resume-exit");
    confirmButton.onclick = () => {
      this.downloadResume();
      this.resumeConfirmation("exit");
    };
    exitButton.onclick = () => this.resumeConfirmation("exit");
  }
}

customElements.define("about-view", About);

export default class Project {
  constructor({ project }) {
    this.project = project;
  }

  getHtml() {
    return `
      <section class="project__container"> 
        <div class="project__content-container">
          <div class="project__image-container">
            <a href=${disableButtons("view")} rel="noopener noreferrer" data-link>
              <img
                src=${this.project.img}
                alt="Project image"
                class="project__image"
                priority=${this.project.id === 0 || this.project.id === 1 || this.project.id === 2 }
              />
            </a>
          </div>
          <div class="project__text-container">
            <div>
              <div class="flex-row-center">
                <h2>
                  ${this.project.title}
                </h2>
                ${
                  this.project.featured === "true" ?
                  <div className="flex-row-center">
                    <img
                      src={"/star.png"}
                      alt="Featured project icon, star"
                      class="icon__star"
                    />
                  </div>
                  :
                  <div></div>
                }
              </div>
              <h3>
                ${this.project.type}
              </h3>
              <p class="project__text-description">
                ${this.project.description}
              </p>
              <br/>
              <p class="project__text-description">
                Built with ${this.project.builtWith.map((item) => 
                  item !== this.project.builtWith[this.project.builtWith.length - 1] 
                  ? 
                  <span key={this.project.builtWith.indexOf(item)}> <span class="project__text-tech">{item}</span>,</span> 
                  : 
                  <span key={this.project.builtWith.indexOf(item)}> and <span class="project__text-tech">{item}</span>.</span>
                )}
              </p>
            </div>
            <div class="project__buttons-container">
              <a 
                class=${disableButtonStyle("view")} 
                href=${disableButtons("view")} 
                rel="noopener noreferrer"
                data-link
              >
                View
              </a>
              <a 
                class=${disableButtonStyle("github")} 
                href=${disableButtons("github")} 
                rel="noopener noreferrer"
                data-link
              >
                Github 
              </a>
            </div>
          </div>
        </div>
        <span class="project__line-bottom"></span>
      </section>
    `;
  }
}

import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
  }

  async getHtml() {
    return `
      <div className='tracking-wide font-sansSerif overflow-hidden relative min-h-screen flex flex-col justify-center items-center w-full bg-nearBlack'>
        <AnimatedPage>
          <PageHeader pageTitle={"Projects"} />
            <div className='flex justify-center items-center text-white font-extralight'>
              <div className='w-mobileWidth md:w-[80vw] max-w-[1300px]'>
                <input 
                  type="radio" 
                    id="all" 
                    name="categories" 
                    value="all" 
                    checked={category === 'all'}
                    onClick={() => setCategory('all')}
                    className=""
                    readOnly
                  />
                    <label 
                      htmlFor="all"
                      className={category === "all" ? checkedLabelCSS : labelCSS}
                    >
                      {
                      category == "all"
                      ?
                      "All " + "(" + allProjects.length + ")"
                      :
                      "All"
                      }
                    </label>
                  <input 
                    type="radio" 
                    id="featured" 
                    name="categories" 
                    value="featured"
                    className=""
                    checked={category === 'featured'}
                    onClick={() => setCategory('featured')}
                    readOnly
                  />
                    <label 
                      htmlFor="featured"
                      className={category === "featured" ? checkedLabelCSS : labelCSS}
                    >
                      {
                      category == "featured"
                      ?
                      "Featured " + "(" + featuredProjects.length + ")"
                      :
                      "Featured"
                      }
                    </label>
                <input 
                  type="radio" 
                  id="solo-projects" 
                  name="categories" 
                  value="solo-projects"
                  className=""
                  checked={category === 'solo-projects'}
                  onClick={() => setCategory('solo-projects')}
                  readOnly
                />
                  <label 
                    htmlFor="solo-projects"
                    className={category === "solo-projects" ? checkedLabelCSS : labelCSS}
                  >
                    {
                    category == "solo-projects"
                    ?
                    "Solo-Projects " + "(" + soloProjects.length + ")"
                    :
                    "Solo-Projects"
                    }
                  </label>
                <input 
                  type="radio" 
                  id="work" 
                  name="categories" 
                  value="work"
                  className=""
                  checked={category === 'work'}
                  onClick={() => setCategory('work')}
                  readOnly
                />
                  <label 
                    htmlFor="work"
                    className={category === "work" ? checkedLabelCSS : labelCSS}
                  >
                    {
                    category == "work"
                    ?
                    "Work " + "(" + workProjects.length + ")"
                    :
                    "Work"
                    }
                  </label>
              </div>
          </div>
          <main className='mb-72 flex items-center justify-center'>
            <div className='w-mobileWidth sm:w-[80vw] max-w-[1300px] z-10 flex flex-col mt-[50px] justify-center items-center'>
                {
                  projectsData ? 
                    category == 'all' ?
                      allProjects
                      :
                      category == 'solo-projects' ?
                        soloProjects
                        :
                        category == 'featured' ?
                        featuredProjects
                        :
                        workProjects
                  :
                  <div className='top-[50vh] text-center flex'>
                    <h2 className='font-light text-2xl'>
                      Loading...
                    </h2>
                  </div>
                }
            </div>
          </main>
          <Footer />
        </AnimatedPage>
      </div>
    `;
  }
}

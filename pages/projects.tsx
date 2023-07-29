import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import projectsData from '@/data/projectsData.json';
import PageHeader from '@/components/PageHeader';

function Projects(){
  const inputCSS: string = ``;
  const labelCSS: string = `text-xs md:text-base uppercase transition tracking-wider ml-1 mr-3 md:mr-4 text-light hover:opacity-100 transition-opacity opacity-60`;
  const checkedLabelCSS: string = `text-xs md:text-base border-b border-white-1 uppercase tracking-wider pb-0.5 ml-1 mr-3 md:mr-4 text-light transition-opacity opacity-100`

  const [category, setCategory] = useState<string>('all');
  
  const allProjects = projectsData.map((project) => <Project key={project.id} project={project} />);
  const featuredProjects = projectsData.filter((project) => project.featured == "true").map((project) => <Project key={project.id} project={project} />)
  const soloProjects = projectsData.filter((project) => project.type == "Solo-Project").map((project) => <Project key={project.id} project={project} />)
  const workProjects = projectsData.filter((project) => project.type !== "Solo-Project").map((project) => <Project key={project.id} project={project} />)

  return (
    <div className='overflow-hidden relative min-h-screen flex flex-col justify-center items-center w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"Projects"} />
          <div className='flex justify-center items-center text-white font-light'>
            <div className='w-mobileWidth md:w-[80vw] max-w-[1300px]'>
              <input 
                type="radio" 
                  id="all" 
                  name="categories" 
                  value="all" 
                  checked={category === 'all'}
                  onClick={() => setCategory('all')}
                  className={inputCSS}
                  readOnly
                />
                  <label 
                    htmlFor="all"
                    className={category === "all" ? checkedLabelCSS : labelCSS}
                  >
                    All
                  </label>
                <input 
                  type="radio" 
                  id="featured" 
                  name="categories" 
                  value="featured"
                  className={inputCSS}
                  checked={category === 'featured'}
                  onClick={() => setCategory('featured')}
                  readOnly
                />
                  <label 
                    htmlFor="featured"
                    className={category === "featured" ? checkedLabelCSS : labelCSS}
                  >
                    Featured 
                  </label>
              <input 
                type="radio" 
                id="solo-projects" 
                name="categories" 
                value="solo-projects"
                className={inputCSS}
                checked={category === 'solo-projects'}
                onClick={() => setCategory('solo-projects')}
                readOnly
              />
                <label 
                  htmlFor="solo-projects"
                  className={category === "solo-projects" ? checkedLabelCSS : labelCSS}
                >
                  Solo-Projects
                </label>
              <input 
                type="radio" 
                id="work" 
                name="categories" 
                value="work"
                className={inputCSS}
                checked={category === 'work'}
                onClick={() => setCategory('work')}
                readOnly
              />
                <label 
                  htmlFor="work"
                  className={category === "work" ? checkedLabelCSS : labelCSS}
                >
                  Work 
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
  )
};

export default Projects;

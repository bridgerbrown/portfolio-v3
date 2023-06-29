import AnimatedPage from '@/components/AnimatedPage';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import Project from '@/components/Project';
import Footer from '@/components/Footer';
import projectsData from '@/data/projectsData.json';

function Projects(){
  const inputCSS: string = ``;
  const labelCSS: string = `uppercase transition tracking-wider pl-1 pr-4 text-regular hover:opacity-100 transition-opacity opacity-60`;
  const checkedLabelCSS: string = `border-b border-white-1 uppercase tracking-wider pb-0.5 ml-1 mr-4 text-regular transition-opacity opacity-100`

  const [category, setCategory] = useState<string>('all');
  
  const allProjects = projectsData.map((project) => <Project key={project.id} project={project} />);
  const soloProjects = projectsData.filter((project) => project.type == "Solo-Project").map((project) => <Project key={project.id} project={project} />)
  const workProjects = projectsData.filter((project) => project.type !== "Solo-Project").map((project) => <Project key={project.id} project={project} />)


  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center w-full bg-nearBlack'>
      <AnimatedPage>
          <header className='flex justify-center w-full mt-[60px] mb-[12px]'>
            <div className='w-[80vw] max-w-[1500px]'>
              <div className='mb-2 flex justify-between items-end'>
                <h1 className='text-8xl font-thin text-white uppercase'>
                 Projects 
                </h1>
                <PageNavbar />
              </div>
              <div className="">
                <div className="w-[100%] h-[1px] bg-white opacity-50"></div>
              </div>
            </div>
          </header>
          
          

          <div className='flex justify-center items-center text-white font-light'>
            <div className='w-[80vw] max-w-[1500px]'>
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
          <main className='mb-72'>
            <div className='w-[80vw] max-w-[1500px] z-10 flex flex-col mt-[50px] justify-center items-center'>
              {
                projectsData ?
                  category == 'all' ?
                    allProjects
                    :
                    category == 'solo-projects' ?
                      soloProjects
                      :
                      workProjects
                :
                <div className='text-center absolute top-[50vh]'>
                  <h2 className='text-white text-2xl font-thin tracking-widest animate-pulse'>Loading...</h2>
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

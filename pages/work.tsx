import AnimatedPage from '@/components/AnimatedPage';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';

function Work(){
  const inputCSS: string = ``;
  const labelCSS: string = `transition tracking-wider pl-1 pr-4 text-lg hover:opacity-100 transition-opacity opacity-60`;
  const checkedLabelCSS: string = `tracking-wider pl-1 pr-4 text-lg transition-opacity opacity-100`

  const [category, setCategory] = useState('all');

  return (
    <div className='min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
          <div className="pt-6 pr-7 w-full z-10 flex justify-end">
            <div className="pl-2 pb-1 bg-nearBlack w-fit">
              <Navbar />
            </div>
          </div>

          <div className="absolute z-10 left-pageBoxLeft right-0 top-pageBoxTop bottom-pageBoxBottom">
            <div className="w-[100%] h-[1px] left-0 top-0 absolute bg-white opacity-50"></div>
          </div>
          <div className="fixed z-10 left-pageBoxLeft right-pageBoxRight top-0 bottom-0">
            <div className="w-[1px] h-[100%] right-0 top-0 absolute bg-white opacity-50"></div>
          </div>

          <header className='absolute top-pagePosition left-pagePosition'>
            <h1 className='text-8xl font-thin text-white uppercase'>
              Work
            </h1>
          </header>

          <div className='flex justify-center items-center z-20 absolute top-categoryPosition left-pagePosition text-white font-light'>
            <input 
              type="radio" 
              id="all" 
              name="categories" 
              value="all" 
              checked={category === 'all'}
              onClick={() => setCategory('all')}
              className={inputCSS}
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
            />
              <label 
                htmlFor="solo-projects"
                className={category === "solo-projects" ? checkedLabelCSS : labelCSS}
              >
                Solo-Projects
              </label>
            <input 
              type="radio" 
              id="freelance" 
              name="categories" 
              value="freelance"
              className={inputCSS}
              checked={category === 'freelance'}
              onClick={() => setCategory('freelance')}
            />
              <label 
                htmlFor="freelance"
                className={category === "freelance" ? checkedLabelCSS : labelCSS}
              >
                Freelance
              </label>
          </div>
          <main className=''>

          </main>
      </AnimatedPage>
    </div>
  )
};

export default Work;

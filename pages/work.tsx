import AnimatedPage from '@/components/AnimatedPage';
import Navbar from '@/components/navbar';
import React, { useState } from 'react';
import WorkRow from '../components/WorkRow'
import PageNavbar from '@/components/PageNavbar';

function Work(){
  const inputCSS: string = ``;
  const labelCSS: string = `uppercase transition tracking-wider pl-1 pr-4 text-regular hover:opacity-100 transition-opacity opacity-60`;
  const checkedLabelCSS: string = `uppercase tracking-wider pl-1 pr-4 text-regular transition-opacity opacity-100`

  const [category, setCategory] = useState('all');

  return (
    <div className='min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
          <header className='mx-[150px] mt-[60px] mb-[12px]'>
            <div className='mb-2 flex justify-between items-end'>
              <h1 className='text-8xl font-thin text-white uppercase'>
                Work
              </h1>
              <PageNavbar />
            </div>
            <div className="">
              <div className="w-[100%] h-[1px] bg-white opacity-50"></div>
            </div>
          </header>
          
          

          <div className='mx-[150px] flex justify-between items-center text-white font-light'>
            <div>
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
          </div>
          <main className=''>
            <div className='mx-[150px] z-10 flex flex-col mt-[40px] justify-center items-center'>
              <WorkRow />
              <WorkRow />
              <WorkRow />
              <WorkRow />
              <WorkRow />
              <WorkRow />
            </div>
          </main>
      </AnimatedPage>
    </div>
  )
};

export default Work;

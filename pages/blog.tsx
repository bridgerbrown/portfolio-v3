import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import PageNavbar from '@/components/PageNavbar';

function Blog(){

  return (
    <div className='min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
          <header className='mx-[150px] mt-[60px] mb-[12px]'>
            <div className='mb-2 flex justify-between items-end'>
              <h1 className='text-8xl font-thin text-white uppercase'>
                Blog
              </h1>
              <PageNavbar />
            </div>
            <div className="">
              <div className="w-[100%] h-[1px] bg-white opacity-50"></div>
            </div>
          </header>
          
          
      </AnimatedPage>
    </div>
  )
};

export default Blog;

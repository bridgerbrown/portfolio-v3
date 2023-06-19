import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import PageNavbar from '@/components/PageNavbar';
import Image from 'next/image';

function About(){

  return (
    <div className='min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
        <header className='mx-[150px] mt-[60px] mb-[12px]'>
          <div className='mb-2 flex justify-between items-end'>
            <h1 className='text-8xl font-thin text-white uppercase'>
              About 
            </h1>
            <PageNavbar />
          </div>
          <div className="">
            <div className="w-[100%] h-[1px] bg-white opacity-50"></div>
          </div>
        </header>
         
        <section className='mt-[60px] mx-[150px] flex'>
          <Image
            src={"/cortona-headshot.png"}
            width={144}
            height={144}
            alt='Portrait of Bridger Brown'
            className='w-96 h-96'
          />
          <div className='w-2/3 text-white font-thin ml-12 flex-col'>
            <h1 className='mb-2 text-white font-thin text-6xl'>
              Bridger Brown
            </h1>
            <h2 className='mb-4 text-white font-thin text-2xl'>
              Frontend Developer
            </h2>
            <p>Hello, my name is Bridger Brown and I am a Front-End Web developer and designer based out of Portland, Oregon.
              <br></br>
              <br></br> 
              Websites are an interactive art form and I am passionate about creating that experience through a designers eye.
              I love working towards the pursuit of mastery in whatever I pursue and with the
              deep ceiling for growth and possibilities, I enjoy developing my craft in programming.
              <br></br>
              <br></br>
              I am also a musician that graduated from Berklee College of Music in 2016 with a Bachelors in Guitar Performance.
              I am very passionate about music, art, keyboards, and self-improvement.
              </p>
          </div>
        </section>

      </AnimatedPage>
    </div>
  )
};

export default About;

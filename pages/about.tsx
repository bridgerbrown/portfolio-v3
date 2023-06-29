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
            className='w-80 h-80 rounded-sm'
          />
          <div className='w-2/3 text-white font-thin ml-12 flex-col'>
            <h2 className='mb-1 text-white font-thin text-5xl'>
              Bridger Brown
            </h2>
            <h3 className='mb-4 text-white font-thin text-xl'>
              Frontend Developer
            </h3>
            <p className='text-md font-extralight leading-6'>
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              Websites are an interactive art form and I am passionate about creating that experience.
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              Websites are an interactive art form and I am passionate about creating that experience.
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
            </p>
            <div className='mt-4 items-center justify-end flex'>
              <div className='cursor-pointer mr-6'>
                <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer"
                   className='flex flex-col justify-center items-center'
                >
                  <Image
                    src={"/linkedin-logo.png"}
                    alt="LinkedIn link"
                    width={192}
                    height={192}
                    className='w-8 h-fit invert mb-1'
                  />
                  <p className='text-sm font-extralightlight text-white'>
                    LinkedIn 
                  </p>
                </a>
              </div>
              <div className='cursor-pointer mr-2 flex flex-col justify-center items-center'>
                <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer"
                   className='flex flex-col justify-center items-center'
                >
                  <Image
                    src={"/github-logo.png"}
                    alt="Github link"
                    width={192}
                    height={192}
                    className='w-8 h-fit invert mb-1'
                  />
                  <p className='text-sm font-extralightlight text-white'>
                    Github
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className='flex justify-center mx-[150px] mt-[60px]'>
          <h2 className='border-b border-1-white w-min text-white text-3xl font-thin'>
            Skills 
          </h2> 
        </section>

        <section className='mx-[150px] mt-[60px]'>
          <h2 className='border-b border-1-white w-min text-white text-4xl font-thin'>
             
          </h2> 
        </section>

      </AnimatedPage>
    </div>
  )
};

export default About;

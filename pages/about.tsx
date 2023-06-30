import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function About(){
  const socialIconCss: string = `w-8 opacity-90 h-fit invert mb-1`;
  const skillCss: string = `mb-20 space-y-1 font-extralight text-sm tracking-widest text-white flex flex-col justify-center items-center `;

  return (
    <div className='relative min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"About"} />
        <section className='mt-[80px] flex flex-col justify-center items-center'>
          <div className='max-w-[1300px] w-[80vw] flex'>
            
            <div className='cursor-pointer flex justify-start'>
              <Image
                src={"/b-teton.jpg"}
                width={1500}
                height={1500}
                alt='Portrait of Bridger Brown'
                className='w-[400px] h-min rounded-sm'
              />
            </div>

            <div className='w-2/3 text-white ml-12 flex-col'>
              <h2 className='mb-1 text-white font-thin text-7xl w-fit'>
                Bridger Brown
              </h2>
              <h3 className='mb-4 text-white font-extralight text-xl'>
                Frontend Developer
              </h3>
              <p className='text-lg font-extralight leading-7'>
                Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                Websites are an interactive art form and I am passionate about creating that experience.
                Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                <br/>
                <br/>
                Websites are an interactive art form and I am passionate about creating that experience.
                Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                Websites are an interactive art form and I am passionate about creating that experience.
                Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              </p>
              <br/>

              <div className='mt-4 items-center justify-end flex'>
                <div className='cursor-pointer mr-8'>
                  <a href='https://www.linkedin.com/in/bridger-brown/' target="_blank" rel="noopener noreferrer"
                     className='flex flex-col justify-center items-center'
                  >
                  <Image
                    src={"/linkedin-logo.png"}
                    alt="LinkedIn link"
                    width={192}
                    height={192}
                    className={socialIconCss}
                  />
                  <p className='text-sm font-extralight text-white'>
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
                    className={socialIconCss}
                  />
                  <p className='text-sm font-extralight text-white'>
                    Github
                  </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center mt-48'>
          <div className='max-w-[1200px] w-[80vw] flex flex-col items-center'>
            <h4 className='mb-20 w-fit border-b border-white-1 tracking-wider text-white uppercase font-extralight text-2xl'>
                Skills
            </h4>
            <div className="grid grid-cols-4 w-full">
              <div className={skillCss}>          
                  <i className="devicon-javascript-plain skillIcon"></i>
                  <p>JAVASCRIPT</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-typescript-original skillIcon"></i>
                  <p>TYPESCRIPT</p>
              </div>
              <div className={skillCss}>     
                  <i className="devicon-react-original skillIcon"></i>
                  <p>REACT</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-python-plain skillIcon"></i>
                  <p>PYTHON</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-nextjs-original skillIcon"></i>
                  <p>NEXT.JS</p>
              </div>
              <div className={skillCss}>
                  <i className="devicon-html5-plain skillIcon"></i>
                  <p>HTML</p>
              </div>
              <div className={skillCss}>  
                  <i className="devicon-css3-plain skillIcon"></i>
                  <p>CSS</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-tailwindcss-plain skillIcon"></i>
                <p>TAILWIND CSS</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-jest-plain skillIcon"></i>
                  <p>JEST</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-mongodb-plain skillIcon"></i>
                  <p>MONGODB</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-photoshop-plain skillIcon"></i>
                  <p>PHOTOSHOP</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-illustrator-plain skillIcon"></i>
                  <p>ILLUSTRATOR</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-tailwindcss-plain skillIcon"></i>
                  <p>TAILWIND CSS</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-mongodb-plain skillIcon"></i>
                  <p>MONGODB</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-photoshop-plain skillIcon"></i>
                  <p>PHOTOSHOP</p>
              </div>
              <div className={skillCss}>       
                  <i className="devicon-illustrator-plain skillIcon"></i>
                  <p>ILLUSTRATOR</p>
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col items-center justify-center'>
          <div className='mb-72 mt-52 max-w-[1300px] w-[80vw]'>
            <h4 className='tracking-wider text-white uppercase font-extralight text-2xl mb-6'>
            </h4>
          </div>
          <p>

          </p>
        </section>

        <Footer />
      </AnimatedPage>
    </div>
  )
};

export default About;

/*
            <div className="grid grid-cols-4 w-7/12">
                <div className={skillCss}>          
                    <i className="devicon-javascript-plain skillIcon"></i>
                    <p>JAVASCRIPT</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-typescript-original skillIcon"></i>
                    <p>TYPESCRIPT</p>
                </div>
                <div className={skillCss}>     
                    <i className="devicon-react-original skillIcon"></i>
                    <p>REACT</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-nextjs-original skillIcon"></i>
                    <p>NEXT.JS</p>
                </div>
                <div className={skillCss}>
                    <i className="devicon-html5-plain skillIcon"></i>
                    <p>HTML</p>
                </div>
                <div className={skillCss}>  
                    <i className="devicon-css3-plain skillIcon"></i>
                    <p>CSS</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-python-plain skillIcon"></i>
                    <p>PYTHON</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-jest-plain skillIcon"></i>
                    <p>JEST</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-tailwindcss-plain skillIcon"></i>
                    <p>TAILWIND CSS</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-mongodb-plain skillIcon"></i>
                    <p>MONGODB</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-photoshop-plain skillIcon"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-illustrator-plain skillIcon"></i>
                    <p>ILLUSTRATOR</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-tailwindcss-plain skillIcon"></i>
                    <p>TAILWIND CSS</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-mongodb-plain skillIcon"></i>
                    <p>MONGODB</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-photoshop-plain skillIcon"></i>
                    <p>PHOTOSHOP</p>
                </div>
                <div className={skillCss}>       
                    <i className="devicon-illustrator-plain skillIcon"></i>
                    <p>ILLUSTRATOR</p>
                </div>
            </div>
*/

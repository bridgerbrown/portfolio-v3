import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function About(){
  const socialIconCss: string = `w-8 opacity-90 h-fit invert mb-1`;
  const skillCss: string = `font-extralight text-sm tracking-widest text-white`;

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
              <p className='text-md font-extralight'>
                Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                I am a creative devloper who is always trying to improve my craft by learning new technologies and building new projects. Websites are an interactive art form and I am passionate about creating that functional experience with a designers eye.
                <br/>
                <br/>
                I attended the Scrimba Front-End Developer Bootcamp, multiple School of Motion design courses, and am a graduate of Berklee College of Music with a Bachelors in Performance.

                <br/>
                <br/>
                I am also very passionate about music, mindfulness, and keyboards.
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


        <section className='mt-[100px] flex flex-col justify-center items-center'>
          <div className='max-w-[1300px] w-[80vw] flex'>
            <div className='w-full justify-start text-white flex flex-col'>
              
              <div className='pt-4'>
                <h4 className='text-xl mb-6 uppercase border-b border-white-1 w-fit tracking-wider text-white font-extralight'>
                  Education 
                </h4>
                <ul className='space-y-3 list-inside list-disc font-medium'>
                  <li>
                    Scrimba Bootcamp -
                    <span className='font-extralight'> Frontend Developer Career Path</span>
                  </li>
                  <li>
                    Educative -
                    <span className='font-extralight'> Python for Programmers</span>
                  </li>
                  <li>
                    School of Motion -
                    <span className='font-extralight'> Design Kickstart, PS + AI Unleashed</span>
                  </li>
                  <li>
                    Berklee College of Music - 
                    <span className='font-extralight'> Bachelors in Performance</span>
                  </li>
                </ul>
              </div>

              <div className='mt-16 w-full pr-20 flex flex-col'>
                <h4 className='text-xl mb-9 uppercase border-b border-white-1 w-fit tracking-wider text-white font-extralight'>
                  Skills  
                </h4>
                <div className='flex justify-between'>
                  <ul className="space-y-16">
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-javascript-plain skillIcon"></i>
                        <p className='relative top-1'>JAVASCRIPT</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-html5-plain skillIcon"></i>
                        <p className='relative top-1'>HTML</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-jest-plain skillIcon"></i>
                        <p className='relative top-1'>JEST</p>
                      </div>
                    </li>
                  </ul>

                  <ul className="space-y-16">
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-react-original skillIcon"></i>
                        <p className='relative top-1'>REACT</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-css3-plain skillIcon"></i>
                        <p className='relative top-1'>CSS</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-mongodb-plain skillIcon"></i>
                        <p className='relative top-1'>MONGODB</p>
                      </div>
                    </li>
                  </ul>

                  <ul className="space-y-16">
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-typescript-original skillIcon"></i>
                        <p className='relative top-1'>TYPESCRIPT</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-nextjs-original skillIcon"></i>
                        <p className='relative top-1'>NEXTJS</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-photoshop-plain skillIcon"></i>
                        <p className='relative top-1'>PHOTOSHOP</p>
                      </div>
                    </li>
                  </ul>

                  <ul className="space-y-16">
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-python-plain skillIcon"></i>
                        <p className='relative top-1'>PYTHON</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-tailwindcss-plain skillIcon"></i>
                        <p className='relative top-1'>TAILWIND</p>
                      </div>
                    </li>
                    <li className={skillCss}>
                      <div className='flex justify-start items-center'>
                        <i className="relative top-1 devicon-illustrator-plain skillIcon"></i>
                        <p className='relative top-1'>ILLUSTRATOR</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
              <div className='flex justify-end'>
                <Image
                  src={"/nvim-code.jpg"}
                  width={1500}
                  height={1500}
                  alt='Portrait of Bridger Brown'
                  className='w-[1000px] h-[800px] object-cover rounded-sm'
                />
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
        <section className='flex flex-col items-center justify-center mt-48'>
          <div className='max-w-[1300px] w-[80vw] flex flex-col items-center'>
            <h4 className='mb-20 w-fit border-b border-white-1 tracking-wider text-white uppercase font-extralight text-2xl'>
                Skills
            </h4>
            <div className="grid grid-cols-8 w-full">
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

*/

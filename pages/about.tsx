import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function About(){
  const socialIconCss: string = `w-8 opacity-90 h-fit invert mb-1`;
  const skillCss: string = `text-sm h-[130px] text-white flex flex-col justify-center items-center space-y-1 font-thin`;

  return (
    <div className='relative min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"About"} />
        <div className='mt-[60px] flex flex-col justify-center items-center'>
          <section className='max-w-[1500px] w-[80vw] flex'>
            <div className='w-full flex'>
              <div className='w-1/3 flex justify-start'>
                <Image
                  src={"/cortona-headshot.png"}
                  width={144}
                  height={144}
                  alt='Portrait of Bridger Brown'
                  className='w-full h-fit rounded-sm'
                />
              </div>
              <div className='w-2/3 text-white font-thin ml-12 flex-col'>
                <h2 className='mb-1 text-white font-thin text-6xl'>
                  Bridger Brown
                </h2>
                <h3 className='mb-4 text-white font-thin text-xl'>
                  Frontend Developer
                </h3>
                <p className='text-lg font-extralight leading-6'>
                  Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                  Websites are an interactive art form and I am passionate about creating that experience.
                  Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                  Websites are an interactive art form and I am passionate about creating that experience.
                  Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                </p>
                <br/>
                <p className='text-lg font-extralight leading-6'>
                  Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
                  Websites are an interactive art form and I am passionate about creating that experience.
                  Hello, my name is Bridgn and I am a Frontend Developer based out of Portland, Oregon.
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
                        className={socialIconCss}
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
                      className={socialIconCss}
                    />
                    <p className='text-sm font-extralightlight text-white'>
                      Github
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='text-white max-w-[1500px] w-[80vw] flex justify-center items-center mt-12'>
          <div className='w-2/3 mr-12'>
            <p className='text-lg font-extralight leading-6'>
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              Websites are an interactive art form and I am passionate about creating that experience.
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              Websites are an interactive art form and I am passionate about creating that experience.
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
            </p>
            <br/>
            <p className='text-lg font-extralight leading-6'>
              Hello, my name is Bridger Brown and I am a Frontend Developer based out of Portland, Oregon.
              Websites are an interactive art form and I am passionate about creating that experience.
              Hello, my name is Bridgn and I am a Frontend Developer based out of Portland, Oregon.
            </p>
          </div>
          <div className='w-1/3 flex justify-start'>
            <Image
              src={"/cortona-headshot.png"}
              width={144}
              height={144}
              alt='Portrait of Bridger Brown'
              className='w-full h-fit rounded-sm'
            />
          </div>
        </section>

        <section className='mb-72 mx-[150px] mt-[60px]'>
          <h2 className='border-b border-1-white w-min text-white text-4xl font-thin'>
             
          </h2> 
        </section>

        </div>
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

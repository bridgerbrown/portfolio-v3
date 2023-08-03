import AnimatedPage from '@/components/AnimatedPage';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';
import Link from 'next/link';

function About(){
  const skillCss: string = `mb-10 font-extralight sm:text-sm text-xs tracking-widest text-white`;

  return (
    <div className='overflow-hidden relative min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"About"} />
        <section className='mt-[80px] flex justify-center items-center'>
          <div className='max-w-[1300px] w-mobileWidth lg:w-[80vw] items-center lg:items-start flex lg:flex-row flex-col justify-center'>
            
            <div className='cursor-pointer flex justify-center'>
              <Image
                src={"/b-teton.webp"}
                width={500}
                height={500}
                alt='Portrait of Bridger Brown'
                className='w-[350px] sm:w-[400px] h-min rounded-sm'
                priority={true}
              />
            </div>

            <section className='ml-0 mt-8 lg:mt-0 lg:ml-12 max-w-[550px] text-white flex-col'>
              <h2 className='mb-5 text-white font-extralight text-5xl sm:text-6xl w-fit'>
                Bridger Brown
              </h2>
              <p className='text-md font-extralight'>
                Hello! My name is Bridger Brown, and I am a passionate Front-End Developer based out of Portland, Oregon. With a deep love for the craft of programming, I bring curiousity and dedication to every project I&apos;m on. I have a strong background in web development and a keen eye for design, specializing in the creation of immersive and intuitive user experiences. 
               <br/>
               <br/>
                My journey in web development began a couple years ago when I discovered my love for crafting pixel-perfect interfaces that blend aesthetics with functionality and efficiency. Since then, I have honed my skills in technologies such as JavaScript, React, TypeScript, and Python, always seeking to expand my knowledge in any way I can.
               <br/>
               <br/>
                I am excited about the opportunity to work on challenging projects, pushing boundaries and exploring new frontiers in web development. If you&apos;re looking for a dedicated and skilled developer to bring your ideas to reality, I would love to connect with you.
              </p>
              <br/>

              <div className='flex'>
                <div className='justify-start text-white flex flex-col'>
                  
                  <div className='mt-8'>
                    <h4 className='text-lg mb-6 border-b border-white-1 w-fit tracking-wider text-white font-extralight'>
                      Education
                    </h4>
                    <ul className='space-y-4 list-inside text-md list-disc font-medium'>
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

                  <div className='mt-16 pt-2 w-full flex flex-col'>
                    <h4 className='border-b border-white-1 text-lg mb-9 w-fit tracking-wider text-white font-extralight'>
                      Skills 
                    </h4>
                    <div className='flex'>
                      <ul className="grid grid-cols-3 w-mobileWidth sm:w-[600px]">
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-javascript-plain skillIcon"></i>
                            <p className='relative top-1'>JAVASCRIPT</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-react-original skillIcon"></i>
                            <p className='relative top-1'>REACT</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-typescript-original skillIcon"></i>
                            <p className='relative top-1'>TYPESCRIPT</p>
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
                            <i className="relative top-1 devicon-css3-plain skillIcon"></i>
                            <p className='relative top-1'>CSS</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-python-plain skillIcon"></i>
                            <p className='relative top-1'>PYTHON</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-nextjs-original skillIcon"></i>
                            <p className='relative top-1'>NEXT.JS</p>
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
                            <i className="relative top-1 devicon-jest-plain skillIcon"></i>
                            <p className='relative top-1'>JEST</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-mongodb-plain skillIcon"></i>
                            <p className='relative top-1'>MONGODB</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-git-plain skillIcon"></i>
                            <p className='relative top-1'>GIT</p>
                          </div>
                        </li>
                        <li className={skillCss}>
                          <div className='flex justify-start items-center'>
                            <i className="relative top-1 devicon-wordpress-plain skillIcon"></i>
                            <p className='relative top-1'>WORDPRESS</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='w-full mt-6 flex justify-start'>
                    <Link href="/contact">
                      <button 
                        className='hover:bg-gray-400 hover:text-white transition-colors font-regular text-sm w-24 h-12 rounded-sm bg-gray-300 text-black'
                          onClick={() => window.open('/Bridger_Brown_Resume_2023.pdf')}
                      >
                        Resume
                      </button>
                    </Link>
                  </div>

                  <div className='mt-20'>
                    <p className='text-md font-extralight'>
                      In addition to programming, I am also passionate about music, guitar, coffee, mindfulness, gaming, and split-keyboards!
                    </p>
                  </div>
                </div>
            </div>
            </section>
          </div>
        </section>
        <div className='pb-72'></div>
        <Footer />
      </AnimatedPage>
    </div>
  )
};

export default About;

import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function Contact(){
  const socialIconCss: string = `w-8 opacity-90 h-fit invert mb-1`;
  const skillCss: string = `mb-10 font-extralight text-sm tracking-widest text-white`;

  return (
    <div className='relative min-h-[95vh] w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"Contact"} />

        <section className='mt-[150px] flex justify-center items-center'>
          <div className='max-w-[1300px] w-[80vw] flex flex-col items-center justify-center'>
            <div className='mb-32 text-lg text-white font-thin'>
              <p>
                I am currently available for work. Feel free to reach out to me for any inquiries.
              </p>
            </div>
            <div className='items-center justify-end flex'>
               <div className='cursor-pointer mr-10'>
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
              <div className='cursor-pointer mr-10 flex flex-col justify-center items-center'>
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
              <div className='cursor-pointer mr-4 flex flex-col justify-center items-center'>
                <a href='https://github.com/bridgerbrown' target="_blank" rel="noopener noreferrer"
                   className='flex flex-col justify-center items-center'
                >
                  <Image
                    src={"/instagram-logo.png"}
                    alt="Instagram link"
                  width={192}
                  height={192}
                  className={socialIconCss}
                />
                <p className='text-sm font-extralight text-white'>
                  Instagram 
                </p>
                </a>
              </div>
              <div className='ml-8 w-full flex justify-start'>
                <button className='font-light text-sm w-32 h-12 rounded-sm bg-gray-300 text-black'>
                  Copy Email 
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </AnimatedPage>
    </div>
  )
};

export default Contact;

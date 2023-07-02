import AnimatedPage from '@/components/AnimatedPage';
import React, { useState } from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function Contact(){
  const socialIconCss: string = `w-8 opacity-90 hover:opacity-70 h-fit invert mb-1`;
  const skillCss: string = `mb-10 font-extralight text-sm tracking-widest text-white`;

  function copyContact(): void{
      const email: string = 'bridgerbrowndev@gmail.com'
      navigator.clipboard.writeText(email);
      const button: HTMLElement | null = document.getElementById("copy-button")
      if (button) {
        button.innerText = "Copied! ✔"
    }
  }

  return (
    <div className='relative min-h-[95vh] w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"Contact"} />

        <section className='mt-[150px] flex justify-center items-center'>
          <div className='max-w-[1300px] w-[80vw] flex flex-col items-center justify-center'>
            <p className='mb-32 text-xl text-white font-thin'>
                I am currently available for work. Feel free to reach out with any inquiries.
            </p>
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
                <a href='https://www.instagram.com/bridger.dev/' target="_blank" rel="noopener noreferrer"
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
                <button 
                  className='transition-colors hover:bg-gray-400 hover:text-white font-light text-sm w-28 h-12 rounded-sm bg-gray-300 text-black'
                  id="copy-button" 
                  onClick={() => copyContact()}
                >
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

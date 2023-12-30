import AnimatedPage from '@/components/AnimatedPage';
import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import Footer from '@/components/Footer';

function Contact(){
  const socialIconCss: string = `w-8 transition-opacity opacity-90 hover:opacity-60 h-fit invert mb-1`;

  function copyContact(): void{
      const secret = ['m', 'o', 'c', '.', 'l', 'i', 'a', 'm', 'g', '@', 'v', 'e', 'd', 'n', 'w', 'o', 'r', 'b', 'r', 'e', 'g', 'd', 'i', 'r', 'b']
      navigator.clipboard.writeText(secret.reverse().join(''));
      const button: HTMLElement | null = document.getElementById("copy-button")
      if (button) {
        button.innerText = "Copied! ✔"
    }
  }

  return (
    <div className='tracking-wide font-sansSerif overflow-hidden relative min-h-[95vh] w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"Contact"} />

        <section className='mt-[150px] flex justify-center items-center'>
          <div className='max-w-[1300px] w-mobileWidth sm:w-[80vw] flex flex-col items-center justify-center'>
            <p className='sm:mb-32 mb-20 sm:text-xl text-lg text-white font-thin sm:text-left text-center '>
                I am currently available for work. Feel free to reach out with any inquiries.
            </p>
            <div className='pb-[710px] sm:pb-[720px] items-center justify-center sm:justify-end flex flex-col sm:flex-row'>
              <div className='items-center justify-end flex mb-8 sm:mb-0'>
                <div className='cursor-pointer sm:mr-10 mx-6 flex flex-col justify-center items-center'>
                  <a href='https://github.com/bridgerbrown' rel="noopener noreferrer"
                     className='flex flex-col justify-center items-center'
                  >
                    <Image
                      src={"/github-logo.webp"}
                      alt="Github link"
                    width={50}
                    height={50}
                    className={socialIconCss}
                  />
                  <p className='text-sm font-extralight text-white'>
                    Github
                  </p>
                  </a>
                </div>
                <div className='cursor-pointer mx-6 sm:mr-10'>
                  <a href='https://www.linkedin.com/in/bridger-brown/' rel="noopener noreferrer"
                     className='flex flex-col justify-center items-center'
                  >
                  <Image
                    src={"/linkedin-logo.webp"}
                    alt="LinkedIn link"
                    width={50}
                    height={50}
                    className={socialIconCss}
                  />
                  <p className='text-sm font-extralight text-white'>
                      LinkedIn 
                    </p>
                  </a>
                </div>
                <div className='cursor-pointer mr-0 mx-6 sm:mr-4 flex flex-col justify-center items-center'>
                  <a href='https://www.instagram.com/bridger.dev/' rel="noopener noreferrer"
                     className='flex flex-col justify-center items-center'
                  >
                    <Image
                      src={"/instagram-logo.webp"}
                      alt="Instagram link"
                    width={50}
                    height={50}
                    className={socialIconCss}
                  />
                  <p className='text-sm font-extralight text-white'>
                    Instagram 
                  </p>
                  </a>
                </div>
              </div>
              <div className='sm:ml-8 ml-0 w-full flex justify-center sm:justify-start'>
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

import React from "react";
import Head from "next/head";
import HomeNavbar from "@/components/HomeNavbar";
import AnimatedPage from "@/components/AnimatedPage";
import Image from "next/image";

function Home() {

const imagePreloads = [
  {
    src: '/project-previews/daynotes-preview.webp',
    height: 800,
    width: 599,
  },
  {
    src: '/project-previews/ecommerce-preview.webp',
    height: 800,
    width: 600,
  },
  {
    src: '/project-previews/paycats-preview.webp',
    height: 800,
    width: 600,
  },
  {
    src: '/github-logo.webp',
    height: 50,
    width: 50,
  },
  {
    src: '/instagram-logo.webp',
    height: 50,
    width: 50,
  },
  {
    src: '/linkedin-logo.webp',
    height: 50,
    width: 50,
  },
  {
    src: '/b-teton.webp',
    height: 450,
    width: 450,
  },
];

  return (
    <div className="font-sansSerif bg-nearBlack fixed left-0 top-0 min-h-screen w-full">
      <AnimatedPage>
        <main 
          className="justify-between flex flex-col text-white"
        >
          <Head>Bridger Brown Dev</Head>

          <div className="fixed z-10 bg-nearBlack left-homeBoxPosition right-homeBoxPosition top-homeBoxPosition bottom-homeBoxPosition">
            <div className="w-[100%] h-[1px] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[100%] h-[1px] left-0 bottom-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] right-0 top-0 absolute bg-white opacity-50"></div>
          </div>

          <div className="pt-8 pr-10 sm:pr-12 w-full z-10 flex justify-end">
              <HomeNavbar />
          </div>

          <header className="fixed bottom-homeBoxPosition w-fit z-10 pl-10 lg:pl-12 pr-2 pb-3 flex md:flex-row flex-col md:items-end items-start justify-start">
            <h1 className="transition-all cursor-pointer text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white">
              BRIDGER BROWN  
            </h1>
            <h2 className="pb-1 cursor-pointer tracking-wide pl-0 md:pl-4 text-md sm:text-2xl font-thin text-white">
              Frontend Developer
            </h2>
          </header>
        </main>
      </AnimatedPage>
        {
          imagePreloads.map((image: any) => 
            <div 
              className="w-11/12 sm:w-2/3 lg:w-1/3 min-w-[300px] max-w-none lg:max-w-sm absolute"
              key={image.src}
            >
              <Image
                src={image.src}
                height={image.height}
                width={image.width}
                alt="hidden image for cache"
                className="opacity-0 w-full"
              />
            </div>
          )
        }
    </div>
  );
}

export default Home; 

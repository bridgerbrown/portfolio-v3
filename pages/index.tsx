import React from "react";
import Head from "next/head";
import HomeNavbar from "@/components/HomeNavbar";
import AnimatedPage from "@/components/AnimatedPage";
import Image from "next/image";

function Home() {

  const imagePaths = [
    '/project-previews/daynotes-preview.webp',
    '/project-previews/ecommerce-preview.webp',
    '/project-previews/paycats-preview.webp',
    '/github-logo.webp',
    '/instagram-logo.webp',
    '/linkedin-logo.webp',
    '/b-teton.webp',
  ]

  return (
    <div className="bg-nearBlack fixed left-0 top-0 min-h-screen w-full">
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

          <header className="fixed bottom-homeBoxPosition w-fit z-10 pl-10 lg:pl-12 pr-2 pb-4 flex md:flex-row flex-col md:items-end items-start justify-start">
            <h1 className="transition-all cursor-pointer text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-thin text-white">
              BRIDGER BROWN  
            </h1>
            <h2 className="cursor-pointer tracking-wide pl-0 md:pl-4 text-md sm:text-2xl font-thin text-white">
              Frontend Developer
            </h2>
          </header>
        </main>
      </AnimatedPage>
      {
        imagePaths.map((path: string) => 
          <Image
            key={path}
            src={path}
            height={1}
            width={1}
            alt="hidden image for cache"
            className="transparent absolute"
          />
        )
      }
    </div>
  );
}

export default Home; 

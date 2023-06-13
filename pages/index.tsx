import React, { useState, useRef } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import AnimatedPage from "@/components/AnimatedPage"; 

function Home() {

  return (
    <div className="bg-nearBlack fixed overflow-hidden left-0 top-0 min-h-screen w-full">
      <AnimatedPage>
        <main 
          className="justify-between flex flex-col text-white"
        >
          <Head>Bridger Brown Dev</Head>

          <div className="fixed z-10 left-homeBoxPosition right-homeBoxPosition top-homeBoxPosition bottom-homeBoxPosition">
            <div className="w-[100%] h-[1px] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[100%] h-[1px] left-0 bottom-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] right-0 top-0 absolute bg-white opacity-50"></div>
          </div>

          <div className="pt-10 pr-12 w-full z-10 flex justify-end">
              <Navbar />
          </div>

          <header className="absolute bottom-homeBoxPosition w-fit z-10 pl-12 pr-2 pb-4 flex items-end justify-start">
            <h1 className="text-8xl font-thin text-white">
              BRIDGER BROWN  
            </h1>
            <h2 className="tracking-wide pl-4 text-2xl font-thin text-white">
              Frontend Developer
            </h2>
          </header>
        </main>
      </AnimatedPage>
    </div>
  );
}

export default Home; 

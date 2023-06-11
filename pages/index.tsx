import React, { useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";

function Home() {

  return (
    <div className="bg-nearBlack fixed overflow-hidden left-0 top-0 min-h-screen w-full">
      <main className="fadeIn justify-between flex flex-col text-white" id="content">
        <Head>Bridger Brown Dev</Head>

        <div className="fixed z-10 left-boxPosition right-boxPosition top-boxPosition bottom-boxPosition">
          <div className="w-[100%] h-[1px] left-0 top-0 absolute bg-white opacity-50"></div>
          <div className="w-[1px] h-[100%] left-0 top-0 absolute bg-white opacity-50"></div>
          <div className="w-[100%] h-[1px] left-0 bottom-0 absolute bg-white opacity-50"></div>
          <div className="w-[1px] h-[100%] right-0 top-0 absolute bg-white opacity-50"></div>
        </div>

        <div className="pt-6 pr-7 w-full z-10 flex justify-end">
          <div className="pl-2 pb-1 bg-nearBlack w-fit">
            <Navbar />
          </div>
        </div>

        <header className="w-fit bg-nearBlack z-10 pl-7 pr-2 pt-0 pb-6 flex items-end justify-start">
          <h1 className="text-8xl font-thin text-white">
            BRIDGER BROWN  
          </h1>
          <h2 className="pl-4 text-3xl font-thin text-white">
            Frontend Developer
          </h2>
        </header>
      </main>
    </div>
  );
}

export default Home;

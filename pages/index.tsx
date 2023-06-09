import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";

function Home() {
  return (
    <main className="relative min-h-screen justify-between flex flex-col w-full bg-bg-dark text-white">
      <Head>Bridger Brown Dev</Head>

      <div className="absolute flex justify-center items-center w-full min-h-screen">
        <div className="bg-bg-dark border-[#dbdbdb] border-2 w-[95.5vw] min-h-[95.5vh]">
        </div>
      </div>

      <div className="pt-5 pr-7 w-full z-10 flex justify-end">
        <div className="pl-2 pb-1 bg-bg-dark w-fit">
        <Navbar />
        </div>
      </div>

      <div className="w-fit bg-bg-dark z-10 pl-7 pr-2 pt-1 pb-5 flex items-end justify-start">
        <h2 className="text-2xl">
        </h2>
        <h1 className="text-8xl font-bold text-white">
          BRIDGER BROWN  
        </h1>
      </div>

    </main>
  );
}

export default Home;

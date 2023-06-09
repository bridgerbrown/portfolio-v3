import React from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";

function Home() {
  return (
    <main className="min-h-screen justify-between flex flex-col w-full bg-black text-white">
      <Head>Bridger Brown Dev</Head>
      <div className="m-4 w-full flex justify-end">
        <Navbar />
      </div>
      <div className="m-4 w-full flex items-end justify-start">
        <h2 className="text-2xl">
        </h2>
        <h1 className="text-6xl font-bold text-white">
          BRIDGER BROWN  
        </h1>
      </div>
    </main>
  );
}

export default Home;

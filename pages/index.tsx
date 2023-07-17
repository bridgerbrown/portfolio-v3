import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import AnimatedPage from "@/components/AnimatedPage";
import { Surface } from "gl-react-dom";
import { Shader } from "../components/Shader";
import useDimensions from "react-cool-dimensions";

function Home() {
  const { observe, width, height } = useDimensions({});
  const [n, setN] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let startT: any;
    let h: any;
    function loop(t: any) {
      h = requestAnimationFrame(loop);
      if (!startT) startT = t;
      setTime((t - startT) / 1000);
    }
    h = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(h);
  }, [n]);

  return (
    <div className="bg-nearBlack fixed overflow-hidden left-0 top-0 min-h-screen w-full">
      <AnimatedPage>
        <main 
          className="justify-between flex flex-col text-white"
        >
          <Head>Bridger Brown Dev</Head>

          <div className="fixed z-10 left-homeBoxX right-homeBoxX top-homeBoxY bottom-homeBoxY">
            <div className="w-[100%] h-[1px] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] left-0 top-0 absolute bg-white opacity-50"></div>
            <div className="w-[100%] h-[1px] left-0 bottom-0 absolute bg-white opacity-50"></div>
            <div className="w-[1px] h-[100%] right-0 top-0 absolute bg-white opacity-50"></div>
          </div>

          <div className="pt-[94px] pr-20 w-full z-10 flex justify-end">
            <Navbar />
          </div>
          
          <section className="absolute top-shaderBoxY left-shaderBoxX right-shaderBoxX bottom-shaderBoxY flex justify-center items-center">
            <div ref={observe} className="w-full h-[79.75vh] z-50">
              <Surface width={width} height={height}>
                <Shader time={time} n={n} />
              </Surface>
            </div>
          </section>

          <header className="absolute bottom-[10px] w-fit z-10 pl-[73px] pr-2 pb-4 flex items-end justify-start">
            <h1 className="transition-all cursor-pointer text-8xl font-thin text-white">
              BRIDGER BROWN  
            </h1>
            <h2 className="cursor-pointer tracking-wide pl-4 text-2xl font-thin text-white">
              Frontend Developer
            </h2>
          </header>
        </main>
      </AnimatedPage>
    </div>
  );
}

export default Home; 

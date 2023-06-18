import Image from "next/image";
import React from "react";

function Project(props: any){

  return (
    <section className="mb-4 w-full flex"> 
      <div className="
        hover:scale-102 transition hover:opacity-100 cursor-pointer 
        w-full h-64 opacity-60 border-white-1 border-y border-x
        flex justify-end items-center
        ">
        <Image
          src={"/arrowhead-right-white.png"}
          alt="arrowhead white right"
          width={124}
          height={234}
          className="mr-10 relative w-4 h-8"
        />
      </div>
    </section>
  )
}

export default Project;

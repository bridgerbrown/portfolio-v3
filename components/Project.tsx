import Image from "next/image";
import React from "react";

function Project(props: any){
  const buttonCSS: string = `flex justify-center items-center rounded-sm text-sm font-regular w-20 mr-6 hover:text-black h-10 bg-gray-300 text-black hover:bg-gray-400 hover:border-none border border-white-1 hover:text-white transition-colors`;
  const { project } = props; 
  const builtWith = project.builtWith;

  return (
    <section className="max-w-[1300px] flex flex-col"> 
      <div className="cursor-pointer opacity-90 transition hover:opacity-100 hover:scale-102 w-full h-[275px] border-white-1 flex items-start mb-4">
        <div className="rounded-sm w-1/3 min-w-[300px] max-w-sm bg-white">
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.img}
              alt="Project image"
              width={1280}
              height={960}
              className="cursor-pointer w-full"
              priority={true}
            />
          </a>
        </div>
        <div className="h-full w-[66%] ml-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl tracking-wide font-light">
              {project.title}
            </h2>
            <h3 className="mb-4 text-md font-light uppercase opacity-80">
              {project.type}
            </h3>
            <p className="text-white text-md font-extralight">
              {project.description}
            </p>
            <br/>
            <p className="font-extralight">
              Built with {builtWith.map((item: string) => 
                item !== builtWith[builtWith.length - 1] 
                ? 
                <span key={builtWith.indexOf(item)}> <span className="font-light border-b border-white-1">{item}</span>,</span> 
                : 
                <span key={builtWith.indexOf(item)}> and <span className="font-light border-b border-white-1">{item}</span>.</span>
                )}
            </p>
          </div>
          <div className="justify-end items-end flex">
            <a className={buttonCSS} href={project.projectLink} target="_blank" rel="noopener noreferrer">
              View
            </a>
            <a className={buttonCSS} href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Github 
            </a>
          </div>
        </div>
      </div>
      <span className="my-12 w-[80vw] max-w-[1300px] h-[1px] bg-white opacity-20"></span>
    </section>
  )
}

export default Project;

import Image from "next/image";
import React from "react";

function Project(props: any){
  const buttonCSS: string = `flex justify-center items-center rounded-sm text-sm font-regular w-20 mr-2 sm:mr-6 hover:text-black h-10 bg-gray-300 text-black hover:bg-gray-400 hover:border-none border border-white-1 hover:text-white transition-colors`;
  const { project } = props; 
  const builtWith = project.builtWith;

  return (
    <section className="w-full max-w-[1300px] flex flex-col"> 
      <div className="cursor-pointer transition hover:scale-102 w-full lg:h-fit xl:h-[275px] border-white-1 flex lg:flex-row flex-col items-center lg:items-start mb-4">
        <div className="rounded-sm w-11/12 sm:w-2/3 lg:w-1/3 min-w-[300px] max-w-none lg:max-w-sm bg-white">
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
            <Image
              src={project.img}
              alt="Project image"
              width={800}
              height={600}
              className="cursor-pointer w-full"
              priority={project.id < 2 ? true : false}
            />
          </a>
        </div>
        <div className="h-full w-mobileWidth sm:w-[80vw] lg:w-[66%] ml-0 mt-4 lg:mt-0 lg:ml-8 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center">
              <h2 className="text-2xl sm:text-3xl tracking-wide font-light">
                {project.title}
              </h2>
              {
                project.featured === "true" ?
                <div className="flex items-center">
                  <Image
                    src={"/star.png"}
                    width={96}
                    height={96}
                    alt="Featured project icon, star"
                    className="ml-2 h-fit w-4 mt-1"
                  />
                </div>
                :
                <div></div>
              }
            </div>
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
          <div className="mt-8 sm:mt-6 xl:mt-0 justify-end items-end flex">
            <a className={buttonCSS} href={project.projectLink} target="_blank" rel="noopener noreferrer">
              View
            </a>
            <a className={buttonCSS} href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Github 
            </a>
          </div>
        </div>
      </div>
      <span className="my-12 w-[100%] max-w-[1300px] h-[1px] bg-white opacity-20"></span>
    </section>
  )
}

export default Project;

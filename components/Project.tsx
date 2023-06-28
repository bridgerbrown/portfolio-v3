import Image from "next/image";
import React from "react";

function Project(props: any){
  const buttonCSS: string = `rounded-sm hover:bg-gray-100 uppercase text-sm font-regular w-28 mr-6 
                             text-black h-10 bg-gray-300`;

  return (
    <div className="mb-4 flex"> 
      <div className="
        hover:scale-102 transition hover:opacity-100 opacity-80  cursor-pointer 
        w-full h-[275px] border-white-1 
        flex items-start 
        ">
        <div className="rounded-sm w-1/3 min-w-[300px] max-w-sm bg-white">
          <Image
            src={"/ecommerce-preview.jpg"}
            alt="Project image"
            width={1280}
            height={960}
            className=""
          />
        </div>
        <div className="h-full w-2/3 xl:max-w-[800px] ml-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-3xl tracking-wide font-light">
              PayCats (Venmo/Paypal clone)
            </h2>
            <h3 className="mb-4 text-md font-light">
              January 2023  
            </h3>
            <p className="text-white text-md font-extralight">
              Description text, description text, description text, description text, description text, description text, 
              Description text, description text, description text, description text, description text, description text, 
              Description text, description text, description text, description text, description text, description text, 
              Description text, description text, description text, description text, description text, description text, 
            </p>
          </div>
          <div className="justify-end items-end flex">
            <button className={buttonCSS}>
              View
            </button>
            <button className={buttonCSS}>
              Github 
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;

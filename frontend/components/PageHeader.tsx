import React from "react";
import PageNavbar from "./PageNavbar";

function PageHeader(props: any){
  const { pageTitle } = props;

  return (
    <header className='flex justify-center w-screen sm:mt-[60px] mt-[30px] mb-2 sm:mb-[12px]'>
      <div className='w-mobileWidth md:w-[80vw] max-w-[1300px]'>
        <div className='mb-0 lg:mb-1 flex flex-col sm:flex-row justify-between items-center sm:items-end'>
          <h1 className='mb-2 sm:mb-1.5 lg:mb-0 text-7xl sm:text-6xl lg:text-8xl font-thin text-white uppercase'>
            {pageTitle}
          </h1>
        <PageNavbar />
        </div>
        <div className="">
          <div className="w-[100%] h-[1px] bg-white opacity-50"></div>
        </div>
      </div>
    </header>
  )
};

export default PageHeader;
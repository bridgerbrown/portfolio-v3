import React from "react";
import PageNavbar from "./PageNavbar";

function PageHeader(props: any){
  const { pageTitle } = props;

  return (
    <header className='flex justify-center w-full mt-[60px] mb-[12px]'>
      <div className='w-[80vw] max-w-[1500px]'>
        <div className='mb-2 flex justify-between items-end'>
          <h1 className='text-8xl font-thin text-white uppercase'>
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

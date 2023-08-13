import React from "react";
import AnimatedPage from "@/components/AnimatedPage";
import PageHeader from "@/components/PageHeader";
import BlogPost from "@/components/BlogPost";

function Blog() {
  return (
    <div className='overflow-hidden relative min-h-screen w-full bg-nearBlack'>
      <AnimatedPage>
        <PageHeader pageTitle={"Blog"} />
        <section className='mt-[80px] flex justify-center items-center'>
          <div className='max-w-[1300px] w-mobileWidth lg:w-[80vw] items-center lg:items-start flex lg:flex-col flex-col justify-center'>
            <BlogPost /> 
            <BlogPost /> 
            <BlogPost /> 
          </div>
        </section>
      </AnimatedPage>
    </div>
  )
};

export default Blog;

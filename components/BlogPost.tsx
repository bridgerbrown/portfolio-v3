import Image from "next/image";

function BlogPost() {
  return (
    <section className="mb-24 w-full flex">
      <div className="rounded-sm w-11/12 sm:w-2/3 lg:w-1/3 min-w-[300px] max-w-none lg:max-w-sm">
        <Image
          src={"/b-teton.webp"}
          width={500}
          height={500}
          alt="Blog post image"
          className="w-full object-cover"
        />
      </div>
      <div className="w-2/3 text-white">
        <div className="pl-12">
          <h2 className="pb-2 text-4xl font-extralight">
            DayNotes Website Finished!
          </h2>
          <h3 className="pb-4 font-thin text-sm tracking-wide uppercase">
            August 13, 2023
          </h3>
          <p className="font-thin">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat in metus vitae mollis. Etiam sodales, mi vitae dapibus facilisis, arcu ante semper tellus, et mattis ante lorem sit amet odio. Quisque nisi ligula, iaculis quis ex non, tempor aliquet neque. Morbi rutrum magna sit amet sodales semper. Sed dolor est, mattis imperdiet ipsum in, bibendum tincidunt leo. Vestibulum lacinia semper blandit. Morbi in erat dolor. Fusce fringilla fringilla tempus.
            <br/>
            <br/>
            Morbi pharetra neque lectus, vitae rhoncus sem convallis eget. Praesent molestie sem volutpat, viverra nulla quis, pharetra elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie eleifend augue sed dictum. Sed sem massa, pulvinar sed fringilla ullamcorper, dapibus a neque. In vestibulum mauris nec orci           
            Morbi pharetra neque lectus, vitae rhoncus sem convallis eget. Praesent molestie sem volutpat, viverra nulla quis, pharetra elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent molestie eleifend augue sed dictum. Sed sem massa, pulvinar sed fringilla ullamcorper, dapibus a neque. In vestibulum mauris nec orci           
          </p>
        </div>
        <div className="w-full flex justify-end items-center h-20">
          <h3 className="cursor-pointer font-extralight tracking-wide opacity-60 hover:opacity-100 transition-opacity">
            READ MORE
          </h3>
        </div>
      </div>
    </section>
  )
};

export default BlogPost;

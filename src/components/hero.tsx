const Hero = () => {
  return (
    <section className="max-w-7xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-12 lg:text-5xl lg:leading-16 md:w-4/5">
          Building Dreams, Crafting Homes
        </h2>
        <p className="text-sm leading-6 text-darkBlue mb-6 md:w-4/5">
          Turning dreams into homes. Explore our exceptional craftmanship and
          envision your perfect space.
        </p>
        <button className="btn-primary">Explore our Projects</button>
      </div>

      <div className="w-full md:flex-1 flex gap-4 ">
        <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1774685110718-c5b4fe026144?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-size-[300%_100%] bg-left h-60 md:h-84 rounded-md"></div>

        <div className="flex-1 mt-10 bg-[url('https://images.unsplash.com/photo-1774685110718-c5b4fe026144?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-size-[300%_100%] bg-center h-60 md:h-84 rounded-md"></div>

        <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1774685110718-c5b4fe026144?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-size-[300%_100%] bg-right h-60 md:h-84 rounded-md"></div>
      </div>
    </section>
  );
};

export default Hero;

const CallToAction = () => {
  return (
    <div className="bg-secondary">
      <div className="max-w-300 h-auto mx-auto flex flex-col items-start md:h-100 md:flex-row lg:h-80">
        <img
          src="https://plus.unsplash.com/premium_photo-1746888841338-05a8279d4636?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full md:w-1/2 md:h-full object-cover"
        />

        <div className="p-10">
          <h5 className="text-lg font-medium text-darkBlue mb-2 lg:mb-4">
            Find Out What It Costs
          </h5>
          <p className="text-sm text-darkBlue leading-6 text-justify mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            excepturi aliquam eaque officia consectetur repellendus
            exercitationem autem quo animi beatae, nobis facere, in odio quasi
            quos cupiditate odit quas nisi et dolore fugiat soluta! Maiores
            ratione veritatis minus fugit iusto.
          </p>
          <button className="btn-primary">Get Estimation</button>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;

import { services } from "../utils/data";
import ServiceInfoCard from "./cards/service-info-card";

const Services = () => {
  return (
    <section className="max-w-300 py-16 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-10">
        Our Services
      </h5>
      <div className="bg-white lg:shadow-xl lg:shadow-slate-200/50">
        {services.map((item) => {
          return <ServiceInfoCard key={item.title} item={item} />;
        })}
      </div>
    </section>
  );
};

export default Services;

import { useRef } from "react";
import { testimonials } from "../utils/data";
import TestimonialCard from "./cards/testimonial-card";
import SlickSlider from "react-slick";
import type { Settings } from "react-slick";

const Testimonials = () => {
  const Slider = (SlickSlider as any).default;
  const sliderRef = useRef(null);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  console.log("Slider:", Slider);
  return (
    <section className="max-w-300 py-16 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Testimonials
      </h5>

      <div className="relative mb-7 px-5 md:px-10">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => {
            return <TestimonialCard key={item.id} item={item} />;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

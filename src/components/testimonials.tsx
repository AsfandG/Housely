import { useRef, useState } from "react";
import { testimonials } from "../utils/data";
import TestimonialCard from "./cards/testimonial-card";
import SlickSlider from "react-slick";
import type { Settings } from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Pagination from "./pagination";

const Testimonials = () => {
  const Slider = (SlickSlider as any).default;
  const sliderRef = useRef<SlickSlider | null>(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (index) => {
      setCurrentSlide(index);
    },
  };

  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.slickNext();
  };

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.slickPrev();
  };

  return (
    <section id="testimonials" className="max-w-7xl py-16 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16">
        Testimonials
      </h5>

      <div className="relative mb-7 px-5 md:px-10">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => {
            return <TestimonialCard key={item.id} item={item} />;
          })}
        </Slider>

        <button
          className="arrow-btn left-1 md:left-5 lg:left-2"
          onClick={slideLeft}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="arrow-btn right-1 md:right-5 lg:right-2"
          onClick={slideRight}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <Pagination active={currentSlide} />
    </section>
  );
};

export default Testimonials;

import { StarIcon } from "lucide-react";
import type { Testimonial } from "../../utils/data";

const TestimonialCard = ({ item }: { item: Testimonial }) => {
  const { name, imgUrl, review, description } = item;

  return (
    <div className="bg-white rounded-md p-5 border border-gray-300 mx-2">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={imgUrl}
          alt={name}
          className="size-14 md:size-16 rounded-full object-cover"
        />

        <div className="">
          <p className="text-sm md:text-base mb-1">{name}</p>

          <div className="flex items-end gap-0.5">
            <StarIcon fill="#FFD700" stroke="#FFD700" className="size-4" />
            <StarIcon fill="#FFD700" stroke="#FFD700" className="size-4" />
            <StarIcon fill="#FFD700" stroke="#FFD700" className="size-4" />
            <StarIcon fill="#FFD700" stroke="#FFD700" className="size-4" />
            <StarIcon fill="#FFD700" stroke="#FFD700" className="size-4" />
          </div>
        </div>
      </div>

      <h5 className="text-sm md:text-base font-medium mb-1">{review}</h5>
      <span className="text-xs md:text-sm text-slate-500">{description}</span>
    </div>
  );
};

export default TestimonialCard;

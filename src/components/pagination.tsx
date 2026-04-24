import { testimonials } from "../utils/data";

function Pagination({ active }: { active: number }) {
  return (
    <div className="flex items-center justify-center gap-4">
      {testimonials.map((item, index) => {
        return (
          <div
            className={`w-8 h-1 ${active === index ? "bg-darkBlue" : "bg-blue-200"} rounded-md transition-all duration-500`}
            key={item.id}
          />
        );
      })}
    </div>
  );
}
export default Pagination;

import type { Service } from "../../utils/data";

const ServiceInfoCard = ({ item }: { item: Service }) => {
  const { imgUrl, title, description } = item;

  return (
    <div className="bg-secondary flex flex-col md:even:flex-row-reverse md:odd:flex-row">
      <div className="flex-1">
        <img src={imgUrl} alt={title} className="w-full h-80 md:h-full" />
      </div>

      <div className="flex-1">
        <div className="p-10">
          <h5 className="text-sm md:text-xl text-darkBlue font-medium mb-3">
            {title}
          </h5>
          <p className="text-xs md:text-sm leading-6 text-darkBlue whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceInfoCard;

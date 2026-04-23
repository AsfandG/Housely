import type { StatItem } from "../../utils/data";

const StatCard = ({ data }: { data: StatItem }) => {
  const { count, label, icon: Icon } = data;
  return (
    <div className="min-w-48 flex flex-col items-center justify-center py-6 sm:py-14">
      <div className="size-14 flex items-center justify-center bg-lightBlue rounded-full">
        <Icon />
      </div>

      <p className="text-xl md:text-2xl text-darkBlue font-medium mt-4">
        {count}
      </p>
      <span className="text-sm text-darkBlue mt-1">{label}</span>
    </div>
  );
};

export default StatCard;

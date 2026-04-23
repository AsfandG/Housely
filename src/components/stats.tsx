import { StatsData } from "../utils/data";
import StatCard from "./cards/stat-card";

const Stats = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-7xl flex justify-around mx-auto flex-wrap">
        {StatsData.map((data) => (
          <StatCard key={data.count} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Stats;

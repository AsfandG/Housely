import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Stats from "./components/stats";

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
    </div>
  );
};

export default App;

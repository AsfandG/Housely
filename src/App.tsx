import CallToAction from "./components/call-to-action";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";
import Work from "./components/work";

const App = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default App;

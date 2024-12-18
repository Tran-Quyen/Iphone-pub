import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWork from "./components/HowItWork";
import Model from "./components/Model";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWork />
      <Footer />
    </div>
  );
};

export default App;

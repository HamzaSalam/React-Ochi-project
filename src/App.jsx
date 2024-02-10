import About from "./components/About";
import Cards from "./components/Cards";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Nav from "./components/Nav";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-screen min-h-screen bg-zinc-900 text-white overflow-hidden">
      <Nav />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;

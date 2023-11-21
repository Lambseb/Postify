import AboutUS from "../components/AboutUs/AboutUs";
import Presentation from "../components/Presentation/Presentation";
import WhyUs from "../components/WhyUS/WhyUs";

function Home() {
  return (
    <div className="App">
      <Presentation />
      <AboutUS />
      <WhyUs />
    </div>
  );
}

export default Home;

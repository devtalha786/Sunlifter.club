import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutSunLifterClub from "./components/home/AboutSunLifterClub";
import FrequentlyAskedQuestions from "./components/home/FrequentlyAskedQuestions";
import GetAppNow from "./components/home/GetAppNow";
import ViewAvailableRoutine from "./components/home/ViewAvailableRoutine";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>   
      <Navbar/>  
      <Hero/>
      <AboutSunLifterClub/>
      <ViewAvailableRoutine/>
      <GetAppNow/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </div>
  );
}

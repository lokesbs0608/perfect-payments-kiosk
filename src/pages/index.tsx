
import Header from "../Component/Header";
import HeroSection from "./herosection";
import Catalogue from "./catalogue";
import Features from "./features";
import Services from "./services";
import Aboutus from "./aboutus";
import OurValues from "./ourvalues";
import ContacUs from "./contactus";
import Footer from "../Component/Footer";
import Security from "./security";


export default function Home() {
  return (
    <div className="theme_bg">
      <div className="homePage_contaniner">
        <Header />
        <HeroSection />
        <Catalogue />
        <Features />
        <Services />
        <Security/>
        <Aboutus />
        <OurValues />
        <ContacUs />
        <Footer/>
      </div>
    </div>
  );
}

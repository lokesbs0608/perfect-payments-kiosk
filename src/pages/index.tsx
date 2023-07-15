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
        <div id="header">
          <Header />
        </div>
        <div id="herosection" className="mt-5">
          <HeroSection />
        </div>
        <div id="catalogue" className="mt-5">
          <Catalogue />
        </div>
        <div id="features" className="mt-5">
          <Features />
        </div>
        <div className="mt-5" id="services">
          <Services />
        </div>
        <div className="mt-5" id="security">
          <Security />
        </div>
        <div id="aboutus" className="mt-5">
          <Aboutus />
        </div>
        <div className="mt-5" id="ourvalues">
          <OurValues />
        </div>
        <div className="mt-5" id="contactus">
          <ContacUs />
        </div>
        <div className="mt-5" id="footer">

        <Footer />
        </div>
      </div>
    </div>
  );
}

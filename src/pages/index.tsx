import { Inter } from "next/font/google";
import Header from "@/Component/Header";
import HeroSection from "./herosection";
import Catalogue from "./catalogue";
import Features from "./features";
import Services from "./services";
import Aboutus from "./aboutus";
import OurValues from "./ourvalues";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="theme_bg">
      <div className="homePage_contaniner">
        <Header />
        <HeroSection />
        <Catalogue />
        <Features />
        <Services/>
        <Aboutus/>
        <OurValues/>
      </div>
    </div>
  );
}

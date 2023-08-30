// import { Inter } from 'next/font/google'
import Header from "@/Components/header";
import Footer from "@/Components/Footer";
// const inter = Inter({ subsets: ['latin'] })

import IndustriesWeProvideServicesFor from "../Components/IndustriesWeProvideServicesFor/index";

import WhyChosePerfectCorpeates from "../Components/WhyChoosePerfectCorprates/index";
import AboutUs from "../Components/Aboutus";
import OurTeam from "../Components/OurTeam";
import HeroSection from "@/Components/Herosection";
import ContactUs from "@/Components/ContactUs";


export default function Home() {
  
 
  return (
    <div>
      

       <HeroSection />
      

      <div id="aboutus">
        <AboutUs />
      </div>
      
      <div id="whychoose">
        <WhyChosePerfectCorpeates />
      </div>

      <div id="industries">
        <IndustriesWeProvideServicesFor />
      </div>

      <div id="ourteam">
        <OurTeam />
      </div>

      <div id="contactus">
        <ContactUs />
      </div>
    </div>
  );
}

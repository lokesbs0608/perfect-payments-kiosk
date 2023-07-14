import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/Component/Header";
import ProductsCard from "@/Component/ProductsCard";
import HeroSection from "./herosection";
import Catalogue from "./catalogue";
import Features from "./features";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="theme_bg">
      <div className="homePage_contaniner">
        <Header />
        <HeroSection />
        <Catalogue />
        <Features />
      </div>
    </div>
  );
}

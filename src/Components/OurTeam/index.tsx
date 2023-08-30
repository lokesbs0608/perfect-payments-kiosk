import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import OurTeam from "../../../public/assets/bg_images/ourTeamBg.svg";
import { SuperMolot, Verdana } from "@/styles/fonts";
import AnimatedDiv from '../Animated/Index'


const AboutUs = () => {
  return (
    <div className={styles.bg}>
    <AnimatedDiv>
     <div style={{maxWidth:'1100px',paddingTop:'12%'}} className={`  ${SuperMolot.className} flex flex-col items-center justify-center p-12 w-full h-full mx-auto place-items-center `}>
        <div  className="flex flex-col md:flex-row items-center justify-center place-items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image width={500} height={500} alt="ourteam" src={OurTeam} />
          </div>
          <div className="w-full md:w-1/2 text-white  place-items-center  md:text-right  text-center">
            <div className="text-6xl">
            Our Expert Team
            </div>
            <div className={` ${Verdana.className} text-2xl mt-4  md:text-right  text-center`}>
            Our team of experienced professionals is passionate about delivering
            exceptional solutions and ensuring your business's success.
            </div>
  
          </div>
        </div>
        <div className="flex justify-center items-center mt-24 my-4 md:w-60 w-90 ">
          <button
            className="font-semibold py-4 px-16 text-3xl w-full md:py-2 md:px-4 "
            style={{ background: "#66C1BF", color: "white" }}
            type="submit"
          >
            Contact us now
          </button>
        </div>
      </div>
      </AnimatedDiv>
    </div>
  );
};

export default AboutUs;

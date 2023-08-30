import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import DownArrow from "../../../public/assets/icons/downArrow.png";
import { SuperMolot, Verdana } from "@/styles/fonts";
import AnimatedDiv from '../Animated/Index'

function contactUs() {
  return (
    <div className={styles.bg}>
    
      <div
        style={{ maxWidth: "1100px", paddingTop: "5%", }}
        className="flex flex-col items-center justify-center w-full h-full mx-auto p-12"
      >
         <AnimatedDiv>
        <div
          className={`${SuperMolot.className}  flex flex-col md:flex-row items-center justify-center gap-12 `}
        >
          <div className="w-full md:w-1/2">
            <div className={`  text-7xl text-white`}>About Us</div>
            <p className="text-2xl text-white text-justify w-85 mt-12 ">
              At <span style={{ color: "#66C1BF" }}>Perfect Corporate,</span> we
              are dedicated to providing innovative and cutting-edge business
              solutions that empower your company's growth and success. As a
              leading provider of corporate solutions, we pride ourselves on
              delivering top-notch products and services tailored to your unique
              business needs.
            </p>
            <div className="flex items-center justify-between text-white text-3xl mt-6">
              <div>Why choose perfect corporate</div>
              <div>
                <Image width={40} height={40} src={DownArrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-white text-left">
            <div className={styles.blur_bg}>
              <div className={` mt-6 ${styles.heading} ${SuperMolot.className}  `}>Vision</div>
              <p className={` mt-4 ${styles.description} ${Verdana.className}`}>
                To be the perfect partner in elevating your corporate operations
                and customer experiences through seamless integration and
                advanced technology
              </p>
              <div className={` mt-6 ${styles.heading} ${SuperMolot.className}`}>Mission</div>
              <p className={` mt-4 ${styles.description} ${Verdana.className}`}>
                We strive to enhance your business efficiency, customer
                satisfaction, and profitability by offering state-of-the-art
                corporate solutions and unparalleled support.
              </p>
            </div>
          </div>
        </div>
        </AnimatedDiv>
      </div>
    
    </div>
  );
}
export default contactUs;

import React from "react";
import inovativeIcon from "../../../public/assets/icons/backlight_high.png";
import BulbIcon from "../../../public/assets/icons/bulb.png";
import styles from "./WhyChosse.module.scss";
import Image from "next/image";
import execptionalicon from "../../../public/assets/icons/exceptionalsuporticon.png";
import { SuperMolot, Verdana } from "@/styles/fonts";
import AnimatedDiv from '../Animated/Index'


function WhyChosePerfectCorpeates() {
  return (
    <div className={` ${styles.bg} ${SuperMolot.className}`}>
       <AnimatedDiv> 
        <div  className={`flex justify-center items-center px-8 pt-24 md:pt-0 `}
        style={{ width: "100%" ,padding:'12%'}}
      >
        <div className="mx-auto px-8 md:px-8 " style={{ maxWidth: "1200px" }}>
          <div className="flex justify-center mb-4 items-center">
            <h1
              className="flex font-semibold pt-24 md:pt-0"
              style={{ color: "#FFFFFF", fontSize: "58px" }}
            >
              Why Choose Perfect Corporate
            </h1>
          </div>
          <div className="grid grid-cols-1 mt-24 sm:grid-cols-3 gap-12 sm:gap-8 ">
            <div className="container1 pl-4">
              <div>
                <Image src={inovativeIcon} alt="inovativeIcon" width={100} />
              </div>
              <div className="my-2 font-semibold">
                <h4 style={{ color: "#66C1BF" }}>
                  Innovative <br />
                  Technology
                </h4>
              </div>
              <div>
                <p className={Verdana.className} style={{ color: "#F9F9F9", fontWeight: "400" }}>
                  Stay ahead of the competition with our latest technology
                  solutions that keep your business at the forefront of
                  innovation.
                </p>
              </div>
            </div>
            <div className="flex items-center  ">
              <div>
                <div
                  className={`${styles.vertical_line} hidden md:block`}
                ></div>
              </div>
              <div className="ml-4">
                <div>
                  <Image src={BulbIcon} alt="BulbIcon" width={100} />
                </div>
                <div className="my-2 font-semibold">
                  <h4 style={{ color: "#66C1BF" }}>
                    Tailored <br />
                    Solutions
                  </h4>
                </div>
                <div></div>

                <p className={Verdana.className} style={{ color: "#F9F9F9", fontWeight: "400" }}>
                  We understand that every business is unique. Our solutions are
                  customizable to meet your specific needs and requirements.
                </p>
              </div>
            </div>
            <div className="flex items-center  ">
              <div>
                <div
                  className={`${styles.vertical_line} hidden md:block`}
                ></div>
              </div>
              <div className="ml-4">
                <div>
                  <Image
                    src={execptionalicon}
                    alt="execptionalicon"
                    width={100}
                  />
                </div>
                <div className="mb-2 mt-3 font-semibold">
                  <h4 style={{ color: "#66C1BF" }}>
                    Exceptional <br />
                    Support
                  </h4>
                </div>
                <div></div>

                <p className={Verdana.className} style={{ color: "#F9F9F9", fontWeight: "400" }}>
                  We understand that every business is unique. Our solutions are
                  customizable to meet your specific needs and requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedDiv>
    </div>
  );
}
export default WhyChosePerfectCorpeates;

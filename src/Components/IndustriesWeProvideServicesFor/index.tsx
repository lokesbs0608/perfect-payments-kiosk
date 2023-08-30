import React from "react";
import styles from "./Style.module.scss";
import Image from "next/image";
import StoreIcon from "../../../public/assets/icons/storefront.png";
import HospitalIcon from "../../../public/assets/icons/hotel.png";
import ResturantIcon from "../../../public/assets/icons/restaurant.png";
import flightIcon from "../../../public/assets/icons/flight_takeoff.png";
import { SuperMolot, Verdana } from "@/styles/fonts";
import AnimatedDiv from '../Animated/Index'


function IndustriesWeProvideServicesFor() {
  return (
    <div className={` ${styles.bg} ${SuperMolot.className}  `}>
      <AnimatedDiv>
      <div  className={`flex justify-center items-center px-12 py-24 md:pt-24 `}>
        <div
          className="mx-auto justify-center items-center md:pt-12"
          style={{ maxWidth: "1200px" }}
        >
          <div className="justify-center items-center m-4">
            <div className="flex justify-center ">
              <h1
                className={` ${SuperMolot.className} font-semibold pt-24 md:pt-0`}
                style={{ fontSize: "58px", color: "#FFFFFF" }}
              >
                Industries We Provide Services For
              </h1>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 md:mt-24 place-items-center">
              <div>
                <div>
                  <Image src={StoreIcon} alt="backlight_high" width={100} />
                </div>
                <div>
                  <h3 className={styles.titles}>Retail</h3>
                </div>
              </div>
              <div>
                <div>
                  <Image src={HospitalIcon} alt="backlight_high" width={100} />
                </div>
                <div>
                  <h3 className={styles.titles}>Hospitality</h3>
                </div>
              </div>
              <div>
                <div>
                  <Image src={ResturantIcon} alt="backlight_high" width={100} />
                </div>
                <div>
                  <h3 className={styles.titles}>Catering</h3>
                </div>
              </div>
              <div>
                <div>
                  <Image src={flightIcon} alt="backlight_high" width={100} />
                </div>
                <div>
                  <h3 className={styles.titles}>Airport & authorities</h3>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center mt-12 md:mt-24 ">
              <div>
                <a href="#" style={{ color: "#FFFFFF" }}>
                  {" "}
                  And More...
                </a>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center my-4 ">
                <button
                  className="font-semibold py-4 px-16 text-3xl w-90 md:py-2 md:px-4"
                  style={{ background: "#66C1BF", color: "white" }}
                  type="submit"
                >
                  Contact us now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimatedDiv>
    </div>
  );
}
export default IndustriesWeProvideServicesFor;

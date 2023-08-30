import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { SuperMolot, Verdana } from "@/styles/fonts";
import Image from "next/image";
import herosecicon1 from "../../../public/assets/icons/Herosecicon1.png";
import monitoringicon from "../../../public/assets/icons/monitoring.png";
import diversityicon from "../../../public/assets/icons/diversity_2.png";
import AnimatedDiv from "../Animated/Index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const [step, setStep] = useState(5);
  const [intial, setIntial] = useState(true);

  const handelclick = (value: any) => {
    setStep(value);
  };
  const handelIntial = (value: boolean) => {
    setIntial(value);
    setTimeout(() => {
      setIntial(true);
    }, 900);
  };
  const [heroRef, heroInView] = useInView({
    threshold: 0.5,
    rootMargin: "10px 0px",
  });

  const containerRef: any = useRef(null);
  const [scrollMovementLength, setScrollMovementLength] = useState(0);

  const handleScroll = () => {
    const newScrollMovementLength = containerRef.current.scrollTop;
    setScrollMovementLength(newScrollMovementLength);
  };

  useEffect(() => {
    const container = containerRef.current;

    // Attach the scroll event listener to the container
    container.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  return (
    <div className={`${styles.bg} `}>
      <AnimatedDiv>
        <div className="py-24 px-8">
          <div
            className="mx-auto flex flex-wrap justify-center items-center"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            <div className="flex justify-around items-center py-32">
              <div
                ref={containerRef}
                className={styles.custom_scrollbar}
                style={{ height: "400px", overflow: "auto" }}
              >
                <div
                  className={`${
                    SuperMolot.className
                  } flex justify-between p-4 pb-24 ${
                    scrollMovementLength > 20 && !intial ? "hidden" : ""
                  }`}
                >
                  {/* ${step!==0?'hidden':''} */}
                  <div>
                    <p className={`${styles.header} mt-12`}>
                      Perfect <br />{" "}
                      <span style={{ color: "#66C1BF" }}>corporate</span>
                    </p>
                    <p
                      className="font-semibold text-basis pt-4"
                      style={{ color: "#F9F9F9" }}
                    >
                      your PERFECT partner
                    </p>
                  </div>
                  <div className="flex flex-col gap-12">
                    <a href="#Perfect_POS_Systems">
                      <Image
                        onClick={() => {
                          handelclick(0);
                          handelIntial(false);
                        }}
                        src={herosecicon1}
                        alt="herosecicon1"
                        width={50}
                      />
                    </a>
                    <a href="#Perfect_Corporate_Analytics">
                      {" "}
                      <Image
                        onClick={() => {
                          handelclick(1);
                          handelIntial(false);
                        }}
                        src={monitoringicon}
                        alt="monitoringicon"
                        width={50}
                      />
                    </a>
                    <a href="#PerfectCustomerRelationshipManagement">
                      <Image
                        onClick={() => {
                          handelclick(2);
                          handelIntial(false);
                        }}
                        src={diversityicon}
                        alt="diversityicon"
                        width={50}
                      />
                    </a>
                  </div>
                </div>

                <div className="px-4" id="oursolution">
                  {/* our solution product ${step!==1?'hidden':''} */}
                  <div className={`flex flex-wrap justify-between pt-12 `}>
                    <div className={`${SuperMolot.className} w-3/4 pr-4`}>
                      <h2
                        className="font-semibold"
                        style={{ color: "#66C1BF", fontSize: "2.5rem" }}
                      >
                        Our Solutions/Products
                      </h2>
                      <p
                        className={`${styles.contenttext} ${Verdana.className}`}
                      >
                        Corporate Solutions Suite: Explore our comprehensive
                        suite of corporate solutions designed to optimize your
                        business performance and customer engagement.
                      </p>
                    </div>
                    <div className="flex justify-center items-center my-4 w-1/4 pt-6">
                      <button
                        className="font-semibold py-4 px-12 text-3xl md:py-3 md:px-8"
                        style={{ background: "#66C1BF", color: "white" }}
                        type="submit"
                      >
                        Contact us now
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex  justify-between pr-4 p-4">
                  <div>
                    {/* Perfect POS Systems*/}
                    <div
                      className={` pt-12 ${step === 0  ? "" : "hidden"} `}
                      id="Perfect_POS_Systems"
                      style={{ width: "900px" }}
                    >
                      <div className={`${SuperMolot.className} flex gap-6`}>
                        <div>
                          <Image
                            src={herosecicon1}
                            alt="herosecicon1"
                            width={100}
                          />
                        </div>
                        <div>
                          <p style={{ color: "#66C1Bf", fontSize: "1rem" }}>
                            {" "}
                            Perfect <br />
                            <span
                              className="font-semibold"
                              style={{ color: "#FFFFFF", fontSize: "2rem" }}
                            >
                              POS Systems{" "}
                            </span>
                          </p>
                          <p
                            className={`${styles.contenttext} ${Verdana.className}`}
                          >
                            Revolutionize your point-of-sale experience with our
                            cutting-edge POS system, streamlining transactions
                            and enhancing customer interactions.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*  Perfect Corporate Analytics  */}
                    <div
                      className={` pt-12  ${step === 1 ? "" : "hidden"}`}
                      id="Perfect_Corporate_Analytics"
                      style={{ width: "900px" }}
                    >
                      <div className={`${SuperMolot.className} flex gap-6`}>
                        <div>
                          <Image
                            src={monitoringicon}
                            alt="herosecicon1"
                            width={100}
                          />
                        </div>
                        <div>
                          <p style={{ color: "#66C1Bf", fontSize: "1rem" }}>
                            {" "}
                            Perfect <br />
                            <span
                              className="font-semibold"
                              style={{ color: "#FFFFFF", fontSize: "2rem" }}
                            >
                              Corporate Analytics{" "}
                            </span>
                          </p>
                          <p
                            className={`${styles.contenttext} ${Verdana.className}`}
                          >
                            Gain valuable insights into your business
                            performance with our advanced analytics tools,
                            empowering data-driven decision-making.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Perfect Customer Relationship Management (CRM)*/}
                    <div
                      className={` pt-12  ${step === 2 ? "" : "hidden"}`}
                      id="PerfectCustomerRelationshipManagement"
                      style={{ width: "900px" }}
                    >
                      <div className={`${SuperMolot.className} flex gap-6`}>
                        <div>
                          <Image
                            src={diversityicon}
                            alt="diversityicon"
                            width={100}
                          />
                        </div>
                        <div>
                          <p style={{ color: "#66C1Bf", fontSize: "1rem" }}>
                            {" "}
                            Perfect <br />
                            <span
                              className="font-semibold"
                              style={{ color: "#FFFFFF", fontSize: "1.5rem" }}
                            >
                              Customer Relationship Management (CRM){" "}
                            </span>
                          </p>
                          <p
                            className={`${styles.contenttext} ${Verdana.className}`}
                          >
                            Strengthen customer relationships and maximize
                            loyalty through our intuitive CRM platform
                            ..Strengthen customer relationships and maximize
                            loyalty through our intuitive CRM platform
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-12 ">
                    <Image
                      onClick={() => handelclick(0)}
                      src={herosecicon1}
                      alt="herosecicon1"
                      width={40}
                    />
                    <Image
                      onClick={() => handelclick(1)}
                      src={monitoringicon}
                      alt="monitoringicon"
                      width={40}
                    />
                    <Image
                      onClick={() => handelclick(2)}
                      src={diversityicon}
                      alt="diversityicon"
                      width={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedDiv>
    </div>
  );
};

export default HeroSection;

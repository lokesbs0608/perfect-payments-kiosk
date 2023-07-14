import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import HeroSectionBg from "../../assets/Images/HeroSectionBG.png";
import CustomButton from "@/Component/atoms/CustomButton";
const HeroSection = () => {
  const handleClick = () => {};

  return (
    <div className={styles.container}>
      <div className="px-3 py-5 justify-content-center  w-50 d-flex flex-column">
        <div className={styles.heading}>
          {" "}
          <span> Perfect Payments :</span> <br /> Your Perfect Partner
        </div>
        <div style={{ width: "50%", paddingLeft: "2rem" }}>
          <CustomButton backGroundColor={'#0F4C81'} onClick={handleClick} title="Know More" />
        </div>
      </div>
      <div className={styles.image_cont}>
        {/* <Image style={{ opacity: 0.7 }} alt="HeroBg" src={HeroSectionBg} /> */}
      </div>
    </div>
  );
};

export default HeroSection;

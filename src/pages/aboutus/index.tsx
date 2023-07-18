import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import WhoweAreImage from "../../assets/Images/Whoweare.svg";

const Aboutus = () => {
  return (
    <div>
      <div className={styles.heading}>ABOUT US</div>
      <div className={styles.heading2}>who are we</div>
      <div className="d-flex gap-5 mt-5  justify-content-center">
        <div style={{ width: "40%" }} className={styles.shadow_bg}>
          <div className={styles.img_cont}>
            <Image src={WhoweAreImage} alt="weare" />
          </div>
        </div>
        <div style={{ width: "40%" }}>
          <div className={styles.card_heading}>
            We are Perfectpays based in the heart of Nottinghamshire
          </div>
          <p style={{ color: "#fff" }}>
            We take pride in providing revolutionary payment solutions to
            businesses through our industry leading Perfect Kiosk. The Perfect
            Kiosk provides a seamless and interactive self-service experience,
            allowing customers to effortlessly browse products, place orders,
            make payments, and access information. We will help you boost
            customer engagement and satisfaction, optimize your staff's
            productivity all while also improving your company’s profit margins.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

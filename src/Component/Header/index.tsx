import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "../atoms/CustomButton";
import Image from "next/image";
import PerfectLogo from "../../assets/Icons/PerfectP.svg";
const Header = () => {
  const handleClick = () => {
    alert("ok");
  };
  return (
    <div className={styles.container}>
      <div>
        <div className="d-flex align-items-center text-white ">
          <Image width={30} src={PerfectLogo} alt="logo" />
          <div
            style={{
              fontSize: "2.5rem",
              // fontFamily: "Inter",
              fontWeight: "400",
              textAlign: "center",
              marginTop: "8px",
            }}
          >
            PERFECT
          </div>
        </div>
        <div
          style={{
            fontSize: "1.3rem",
            color: "#e9c406",
            fontFamily: "Copperplate Gothic Bold",
            fontWeight: "400",
            lineHeight: "10px",
          }}
        >
          KIOSK
        </div>
      </div>
      <div className="d-flex mt-4 gap-5 justify-content-between">
        <div className={styles.nav_text}>Products</div>{" "}
        <div className={styles.nav_text}>Join Us</div>{" "}
        <div className={styles.nav_text}>About Us</div>
        <div className={styles.nav_text}>Contact Us</div>
        <div className={styles.nav_text}>Book a Demo</div>
      </div>
    </div>
  );
};

export default Header;

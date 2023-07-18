import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import FooterIcon from "../../assets/Icons/FooterLogo.svg";

const Footer = () => {
  const links = [
    { id: 0, title: "Products", path: "" },
    { id: 0, title: "About Us", path: "" },
    { id: 0, title: "Features", path: "" },
    { id: 0, title: "Join Us", path: "" },
    { id: 0, title: "Services", path: "" },
    { id: 0, title: "Contact Us", path: "" },
    { id: 0, title: "Security", path: "" },
    { id: 0, title: "Terms & Conditions", path: "" },
  ];

  return (
    <div className={styles.container}>
      <div className="d-flex">
        <div className={styles.footer_icon_cont}>
          <Image width={150} src={FooterIcon} alt="icons" />
        </div>
        <div className="">
          <div className="d-flex flex-wrap">
            {links.map((item, index) => {
              return (
                <div className={styles.options}>
                  <div style={{ display: "inline-block", cursor: "pointer" }}>
                    {item?.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.copy_right}>
        Intellectual Property of Perfectpays Ltd <br /> Copyrights of
        Perfectpays Ltd
      </div>
    </div>
  );
};

export default Footer;

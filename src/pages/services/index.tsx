import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Icon1 from "../../assets/Illus/serviceicon1.svg";
import ICon2 from "../../assets/Illus/serviceicon2.svg";
import Icon3 from "../../assets/Illus/serviceicon3.svg";
const Services = () => {
  return (
    <div>
      <div className={styles.heading}>SERVICES</div>
      <div className={styles.heading2}>Services we offer</div>
      <div className={` ${styles.mob_view} d-flex gap-3`}>
        <div
          
          className={`${styles.shadow_bg} ${styles.block1}`}
        >
          <div className={styles.card_heading}>Oiyaa technology</div>
          <p style={{ color: "#fff" }}>
            Our usage of Oiyaa software allows us to fill up quiet periods in
            your business by offering tailored discounts and an online booking
            service.
          </p>
          <div>
            <Image width={350} src={Icon1} alt="ok" />
          </div>
        </div>
        <div  className="d-flex flex-column gap-3">
          <div className={`${styles.shadow_bg} ${styles.block2} `}>
            <div style={{ width: "60%" }}>
              <div className={styles.card_heading}>
              Easytip 
              </div>
              <p style={{ color: "#fff" }}>
              Need a modern day solution to the tipping dilemma? Look no further than our partner
              </p>
            </div>

            <div>
              <Image width={250} src={ICon2} alt="ok" />
            </div>
          </div>
          <div className={`${styles.shadow_bg}`}>
            <div className={` ${styles.block2} ${styles.mob_view_block} `}>
              <div>
                <Image width={250} src={Icon3} alt="ok" />
              </div>
              <div style={{ width: "60%" }}>
                <div className={styles.card_heading}>
                Easytip 
                </div>
                <p style={{ color: "#fff" }}>
                creating a safe atmosphere for seamless tipping without any hassle or red tape involved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

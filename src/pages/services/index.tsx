import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Icon1 from "../../assets/Illus/serviceicon1.svg";
import ICon2 from "../../assets/Illus/serviceicon2.svg";
import Icon3 from '../../assets/Illus/serviceicon3.svg'
const Services = () => {
  return (
    <div>
      <div className={styles.heading}>SERVICES</div>
      <div className={styles.heading2}>Services we offer</div>
      <div className="d-flex  mt-5 gap-3">
        <div
          style={{ width: "45%" }}
          className={`${styles.shadow_bg} ${styles.block1}`}
        >
          <div className={styles.card_heading}>
            Lorem ipsum <br /> dolor sit amet.
          </div>
          <p style={{ color: "#fff" }}>
            Lorem ipsum dolor sit amet consectetur. Mattis in pellentesque a
            rhoncus ipsum sit senectus tincidunt.
          </p>
          <div>
            <Image width={350} src={Icon1} alt="ok" />
          </div>
        </div>
        <div style={{ width: "55%" }} className="d-flex flex-column gap-3">
          <div className={`${styles.shadow_bg} ${styles.block2} `}>
            <div style={{ width: "60%" }}>
              <div className={styles.card_heading}>
                Lorem ipsum <br /> dolor sit amet.
              </div>
              <p style={{ color: "#fff" }}>
                Lorem ipsum dolor sit amet consectetur. Mattis in pellentesque a
                rhoncus ipsum sit senectus tincidunt.
              </p>
            </div>

            <div>
              <Image width={250} src={ICon2} alt="ok" />
            </div>
          </div>
          <div className={`${styles.shadow_bg}`}>
            <div className={`${styles.shadow_bg} ${styles.block2} `}>
            <div>
                <Image width={250} src={Icon3} alt="ok" />
              </div>
              <div style={{ width: "60%" }}>
                <div className={styles.card_heading}>
                  Lorem ipsum <br /> dolor sit amet.
                </div>
                <p style={{ color: "#fff" }}>
                  Lorem ipsum dolor sit amet consectetur. Mattis in pellentesque
                  a rhoncus ipsum sit senectus tincidunt.
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

import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "@/Component/atoms/CustomButton";
import MainKiosk from "../../assets/Images/PerfectPays.svg";
import Image from "next/image";
import Checkbox from "../../assets/Icons/Checkbox.svg";

const Security = () => {
  const handleClick = () => {};
  return (
    <div>
      <div className={styles.heading}>SECURITY</div>
      <div className={styles.heading2}>Security Features</div>
      <div className={styles.bg_shadow}>
        <div className=" d-flex w-100  justify-content-center">
          <div className="mr-5">
            <div className={styles.image_card_cont}>
              <div className={styles.card_container}>
                <div className={styles.image_cont}>
                  <Image width={350} src={MainKiosk} alt="main" />
                </div>
              </div>
            </div>
          </div>
          <div className=" w-50 ml-5 mt-5">
            <h1 style={{ width: "100%", color: "#fff", fontSize: "2rem" }}>
              Lorem ipsum dolor sit <br /> amet consectetur.
            </h1>
            <p
              className="mt-3"
              style={{ fontSize: "20px", textAlign: "justify", color: "#fff",opacity:.9}}
            >
              Lorem ipsum dolor sit amet consectetur. <br /> Adipiscing volutpat
              eget at in enim. Pulvinar <br />
              vulputate sapien.
              <div className="d-flex align-items-center gap-2 mt-2">
                <div>
                  <Image src={Checkbox} alt="icon" />
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur</div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-1">
                <div>
                  <Image src={Checkbox} alt="icon" />
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur</div>
              </div>
              <div className="d-flex align-items-center gap-2 mt-1">
                <div>
                  <Image src={Checkbox} alt="icon" />
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur</div>
              </div>
            </p>
          </div>
        </div>
        <div className="mt-3 d-flex w-100 align-items-center justify-content-center gap-5">
          <div className="ml-5">
            <h1 style={{ width: "100%", color: "#fff", fontSize: "2rem" }}>
              Experience style and <br /> functionality with our <br />{" "}
              customizable kiosks.
            </h1>
            <p
              className="mt-3"
              style={{ fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
              Seamlessly integrate our sleek kiosks into your <br /> business
              environment for a modernized brand <br /> image.
            </p>
            <div className="w-80 mt-3">
              <CustomButton onClick={handleClick} title="Book a Demo" />
            </div>
          </div>
          <div className="mr-5">
            <div className={styles.image_card_cont}>
              <div className={styles.card_container}></div>
              <div className={styles.image_cont}>
                <Image width={300} src={MainKiosk} alt="main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;

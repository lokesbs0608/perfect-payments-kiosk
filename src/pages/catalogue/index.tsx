import React from "react";
import styles from "./styles.module.scss";
import ProductsCard from "@/Component/ProductsCard";
import CustomButton from "@/Component/atoms/CustomButton";
import MainKiosk from "../../assets/Images/KisokMain.svg";
import MainKiosk2 from "../../assets/Images/KioskMain2.svg";
import Image from "next/image";
import SeacrhIlus from "../../assets/Illus/SearchIlus.svg";

const Catalogue = () => {
  const handleClick = () => {};
  return (
    <div className="w-100">
      <div className={styles.heading}>CATALOGUE</div>
      <div className={styles.heading2}>OUR PRODUCTS</div>
      <div className={styles.cardcontainer}>
        <ProductsCard height={190} width={210} title="Visionary" />
        <ProductsCard height={230} width={230} title="Smart" />
        <ProductsCard height={250} width={260} title="Indie" />
      </div>
      <div style={{ maxWidth: "1200px " }} className="mt-5 pt-5 mx-auto">
        <h1 className={styles.sub_heading}>
          Captivating and Space-Efficient <br />
          Kiosk Designs
        </h1>
        <div className="mt-3 d-flex w-100 align-items-center justify-content-center gap-5">
          <div className="mr-5">
            <div className={styles.image_card_cont}>
              <div className={styles.card_container}></div>
              <div className={styles.image_cont}>
                <Image width={300} src={MainKiosk} alt="main" />
              </div>
            </div>
          </div>
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
        </div>
        <div className={styles.shadow_bg}>
          <div>
            Flexible Installation <br /> Choices for Adaptability <br /> and
            Convenience
          </div>
          <div>
            <Image width={400} src={SeacrhIlus} alt="ilu" />
          </div>
        </div>
        <div style={{width:'100%'}} className="mt-5 d-flex w-100 align-items-center  justify-content-center gap-5">
          <div style={{width:'50%'}} className="ml-5">
            <h1 style={{ width: "100%", color: "#fff", fontSize: "2rem" }}>
            Streamlined In-Store  <br />Engagements for Effortless <br /> Interactions
            </h1>
            <p
              className="mt-3"
              style={{ fontSize: "20px", textAlign: "justify", color: "#fff" }}
            >
             Effortlessly browse, order, pay, and access info, <br /> enhancing satisfaction and staff productivity. 
            </p>
            <div className="w-80 mt-3">
              <CustomButton backGroundColor={'#0F4C81'} onClick={handleClick} title="Contact Us" />
            </div>
          </div>
          <div className="mr-5 w-60">
            <div className={styles.image_card_cont}>
              <div className={styles.card_container}></div>
              <div className={styles.image_cont2}>
                <Image width={300} src={MainKiosk2} alt="main" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

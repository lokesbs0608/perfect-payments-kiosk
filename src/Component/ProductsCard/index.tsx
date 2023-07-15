import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Icon from "../../assets/Images/KioaskProduct.svg";

interface Props {
  title: string;
  description?: string;
  height?: number;
  width?: number;
}

const ProductsCard = ({ title, height, width }: Props) => {
  return (
    <div className={styles.shadow_container}>
      <div className={styles.container}>
        <div className={styles.img_cont}>
          <Image
            width={width ? width : 250}
            height={height ? height : 200}
            src={Icon}
            alt="icon"
          />
        </div>
        <div className={styles.content_cont}>
          <h1>Perfect</h1>
          <h1 style={{color:'#FFD500'}} >{title}</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, nulla?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

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

const ProductsCard = ({ title, height, width,description  }: Props) => {
  return (
    <div id={title} className={styles.shadow_container}>
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
          <h2>Perfect</h2>
          <h1 style={{color:'#FFD500',fontWeight:'bold',fontSize:'2.2rem'}} >{title}</h1>
          <p style={{textAlign:'justify',width:'80%'}} className="text-white">
           {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

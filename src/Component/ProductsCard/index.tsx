import React from "react";
import styles from "./styles.module.scss";

const ProductsCard = () => {
  return (
    <div className={styles.shadow_container}>
      <div className={styles.container}>
        <div className={styles.img_cont}>image</div>
        <div className={styles.content_cont}>
          <h1>Perfect King</h1>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;

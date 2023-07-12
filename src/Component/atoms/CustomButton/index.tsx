import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick: (e: any) => void;
}

const CustomButton = ({ title, onClick }: Props) => {
  return (
    <div onClick={onClick} className={styles.container}>
      {title}
    </div>
  );
};

export default CustomButton;

import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  onClick: (e: any) => void;
  backGroundColor?: string;
}

const CustomButton = ({ title, onClick, backGroundColor }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: backGroundColor ? backGroundColor : "",
        color: backGroundColor ? "#fff" : "",
      }}
      className={`${styles.container}`}
    >
      {title}
    </div>
  );
};

export default CustomButton;

import React, { useState } from "react";
import styles from "./styles.module.scss";
import CutomInput from "@/Component/CustomInput";
import CustomButton from "@/Component/atoms/CustomButton";
import { Input } from "antd";
import Image from "next/image";
import DinnersIcon from "../../assets/Images/Dinnersclub.svg";
import Visa from "../../assets/Images/Visa.svg";
import MatserIcon from "../../assets/Images/Mastercard.svg";
import AmericaIcon from "../../assets/Images/American.svg";

const { TextArea } = Input;

const ContacUs = () => {
  const [value, setValue] = useState("");
  const handleChange = (e: any) => {
    console.log(e.target.value);
  };

  const images = [AmericaIcon,DinnersIcon, Visa, MatserIcon, ];
  return (
    <div style={{ maxWidth: "900px", margin: "0 auto" }}>
      <div className={styles.heading}>CONTACT</div>
      <div className={styles.heading2}>Get In Touch</div>
      <div className={styles.shadow_bg}>
        <div className="w-50 m-2">
          <CutomInput title="Name" onChange={handleChange} />
        </div>
        <div className="d-flex">
          <div className="w-50 m-2">
            <CutomInput title="Email ID" onChange={handleChange} />
          </div>
          <div className="w-50 m-2">
            <CutomInput title="Email Address" onChange={handleChange} />{" "}
          </div>
        </div>
        <div className="m-2">
          <label style={{ fontWeight: "600" }} htmlFor="">
            Message
          </label>
          <TextArea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            autoSize={{ minRows: 7, maxRows: 8 }}
            style={{
              background: "#263138",
              outline: "none",
              borderRadius: "5px",
              border: "0px",
              outlineStyle: "none",
              outlineColor: "transparent",
            }}
          />
        </div>

        <div style={{ width: "30%" }} className="m-2 mt-4">
          <CustomButton title="Submit Response" onClick={handleChange} />
        </div>
      </div>
      <div style={{ marginTop: "4rem" }}>
        <div className={styles.bg_shadow}>
          {images.map((items) => {
            return (
              <div>
                <Image  src={items} alt="icon" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContacUs;
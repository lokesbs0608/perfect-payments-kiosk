import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Icon1 from "../../assets/Illus/features1.svg";
import Icon4 from "../../assets/Illus/features4.svg";
import Icon2 from "../../assets/Illus/features2.svg";
import Icon5 from "../../assets/Illus/features5.svg";
import Icon3 from "../../assets/Illus/features3.svg";
import Icon6 from "../../assets/Illus/features6.svg";
import VerticalLine from '../../assets/Illus/VerticalLine.svg';

const Features = () => {
  const shadowCard = (icon: any, title: string, description: string) => {
    return (
      <div
        className="text-center d-flex flex-column align-items-center"
        style={{ width: "15rem" }}
      >
        <div className={styles.shadow_card}>
          <Image width={150} src={icon} alt="icon" />
        </div>
        <div className="mt-4">
          <div className={styles.card_heading}>{title}</div>
          <div style={{ color: "#fff" }}>{description}</div>
        </div>
      </div>
    );
  };

  const GridCard = ({ data }: any) => {
    return (
      <div className="d-flex flex-column gap-5">
        {data?.map((item: any) => {
          return (
            <div>{shadowCard(item?.icon, item?.title, item?.description)}</div>
          );
        })}
      </div>
    );
  };

  const obj1 = [
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon1,
    },
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon4,
    },
  ];

  const obj2 = [
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon2,
    },
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon5,
    },
  ];
  const obj3 = [
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon3,
    },
    {
      id: 0,
      title: "Lorem",
      description:
        "lorem 10 description lorem 10 description lorem 10 description",
      icon: Icon6,
    },
  ];
  return (
    <div>
      <div className={styles.heading}>FEATURES</div>
      <div className={styles.heading2}>OUR FEATURES</div>
      <div className="d-flex justify-content-between mt-5 ">
        <GridCard data={obj1} />
        <Image src={VerticalLine} width={3}  height={100} alt="line" />
        <GridCard data={obj2} />
        <Image src={VerticalLine} width={3}  height={100} alt="line" />
        <GridCard data={obj3} />
      </div>
    </div>
  );
};

export default Features;

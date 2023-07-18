import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Man1 from "../../assets/Illus/Man1.svg";
import Man2 from "../../assets/Illus/Man2.svg";
import Man3 from "../../assets/Illus/Man3.svg";

const OurValues = () => {
  const Card = ({ icon, title, description, bg_color }: any) => {
    return (
      <div
        style={{ backgroundColor: bg_color ? bg_color : "" }}
        className={styles.card_cont}
      >
        <div className={styles.image_cont}>
          <Image src={icon} alt="man" width={230} />
        </div>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    );
  };

  const obj = [
    {
      id: 0,
      title: "Integrity",
      description: "Our commitment is to provide you with a service you can trust, which is why transparency is at the heart of our approach.",
      icon: Man1,
    },
    {
      id: 0,
      title: "Neutrality ",
      description: "Having no preconceived judgments or biases allows us to embrace new ideas and practices, following that we can respond directly to your unique needs",
      icon: Man2,
      bg_color:'#171D21'
    },
    {
      id: 0,
      title: "Equality",
      description: "Our value of the individual fosters a culture of collaboration and respect, we empower each employee, partner and consumer to strive towards their full potential within all realms of business. A win for you is a win for us!",
      icon: Man3,
    },
  ];

  return (
    <div>
      <div className={styles.heading}>OUR VALUES</div>
      <div className={styles.heading2}>What we believe in</div>
      <div
        style={{ marginTop: "12rem" }}
        className="d-flex align-items-center justify-content-center  gap-5"
      >
        {obj.map((items) => {
          return (
            <Card
              icon={items?.icon}
              title={items?.title}
              description={items?.description}
              bg_color={items?.bg_color}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurValues;

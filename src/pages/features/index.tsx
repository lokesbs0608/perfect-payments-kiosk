import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Icon1 from "../../assets/Illus/features1.svg";
import Icon4 from "../../assets/Illus/features4.svg";
import Icon2 from "../../assets/Illus/features2.svg";
import Icon5 from "../../assets/Illus/features5.svg";
import Icon3 from "../../assets/Illus/features3.svg";
import Icon6 from "../../assets/Illus/features6.svg";
import VerticalLine from "../../assets/Illus/VerticalLine.svg";

const Features = () => {
  const shadowCard = (icon: any, title: string, description: string) => {
    return (
      <div
        className={` ${styles.shadow_card_cont} text-center d-flex flex-column align-items-center`}
      
      >
        <div className={styles.shadow_card}>
          <Image width={150} src={icon} alt="icon" />
        </div>
        <div className="mt-4">
          <div className={styles.card_heading}>{title}</div>
          <div style={{ color: "#fff",textAlign:'left' }}>{description}</div>
        </div>
      </div>
    );
  };

  const GridCard = ({ data }: any) => {
    return (
      <div className=" d-flex flex-column gap-5 mt-4">
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
      title: "Customizable and Versatile ",
      description:
        "We deliver technological and aesthetic customizations with all products from the Smart, to the Indie, to the Visionary. Offering bespoke additional services to suit the needs of your business. Require a scanner? A printer? Your own logo and branding embedded on your kiosk? Here at The Perfect Kiosk we can do all of the above and more, the possibilities are endless.        ",
      icon: Icon1,
    },
    {
      id: 0,
      title: "Safe and Secure.",
      description:
        "We pride ourselves on our advanced payment solutions and secure payment processing. Our focus on constantly developing our technology is optimized to offer security miles ahead of the industry standard.",
      icon: Icon4,
    },
  ];

  const obj2 = [
    {
      id: 0,
      title: "Easy installation",
      description:
        "We will have our product installed into your business by an engineer, the process is simple. You will be taught the ins and outs of the machinery so you can utilize its functionality to the fullest.        ",
      icon: Icon2,
    },
    {
      id: 0,
      title: "Interactivity",
      description:
        "Our products come with a large high-resolution screen, paired with touchscreen technology that grants the user accuracy and precision in selecting their desired purchases. These additions bridge the gap between practical convenience and high-spec engineering",
      icon: Icon5,
    },
  ];
  const obj3 = [
    {
      id: 0,
      title: "Accessibility ",
      description:
        "Our kiosks are fitted with a chip and pin device; allocating easy integration with modern payment methods. A swipe, a tap or the insertion of a card followed by your secure pin will suffice for a quick and efficient payment. Cash payment is also an available option.",
      icon: Icon3,
    },
    {
      id: 0,
      title: "Powered by Windows",
      description:
        "The Perfect kiosk contains an innovative windows system, satisfying the needs of modern day technological capabilities. You won’t find better",
      icon: Icon6,
    },
  ];
  return (
    <div>
      <div className={styles.heading}>FEATURES</div>
      <div className={styles.heading2}>OUR FEATURES</div>
      <div className="d-flex flex-wrap  justify-content-between mt-5 ">
        <GridCard data={obj1} />
        <Image className={styles.mob_hide} src={VerticalLine} width={3} height={100} alt="line" />
        <GridCard data={obj2} />
        <Image className={styles.mob_hide} src={VerticalLine} width={3} height={100} alt="line" />
        <GridCard data={obj3} />
      </div>
    </div>
  );
};

export default Features;

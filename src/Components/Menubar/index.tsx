import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Arrow from "../../../public/assets/icons/arrow_outward.png";
import { SuperMolot, Verdana } from "@/styles/fonts";

interface Props {
  toggle: Boolean;
  handleToggle: (e: any) => void;
}

const MenuBar = ({ toggle, handleToggle }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    handleToggle(isOpen);
  };

  const MenuObj = [
    {
      id: 0,
      title: "Our solutions/Products",
      tagline: "Why choose us?",
      path: "whychoose",
    },
    { id: 0, title: "About Us", tagline: "Our Vision & Mission", path: "aboutus" },
    {
      id: 0,
      title: "Industries",
      tagline: `We provide services for 5+`,
      path: "industries",
    },
    { id: 0, title: "Our Team", tagline: "", path: "ourteam" },
    { id: 0, title: "Contact us", tagline: "", path: "contactus" },
  ];

  const MenuCard = (data: any) => {
    console.log(data);
    return (
       <a onClick={toggleSidebar} style={{background:"red"}} href={`#${data?.data?.path}`} >
      <div className={` ${styles.menuCard_container} ${SuperMolot.className} `}>
          <div className="flex flex-col justify-center items-center px-4 py-2  w-full h-full">
            <div className="flex justify-between items-center px-4 py-2 w-full h-full">
              <div style={{ fontSize: "2.2rem", color: "#1D4B7E" }}>
                {data?.data?.title}
                <p style={{ fontSize: "1.5rem", color: "#000" }}>
                  {" "}
                  {data?.data?.tagline}
                </p>
              </div>
              
                <Image width={50} height={50} alt="icon" src={Arrow} />
              
            </div>
          </div>
      </div>
          </a>
    );
  };

  return (
    <div>
      <button onClick={toggleSidebar}>Open Menu</button>
      <div className={`${styles.sidebar} ${toggle ? styles.open : ""} `}>
        <div className={styles.content}>
          <div onClick={toggleSidebar} className={styles.close}>
            <button onClick={toggleSidebar} className={styles.close_btn}>
              close
            </button>
          </div>
          <div className={`${styles.menu_cont}`}>
            {MenuObj.map((item) => {
              return (
                <div key={item?.id}>
                  <MenuCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;

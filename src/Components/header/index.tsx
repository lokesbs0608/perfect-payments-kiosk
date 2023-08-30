import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Icon from "../../../public/assets/icons/Perfect corporate logo.png";
import Image from "next/image";
import meunicon from "../../../public/assets/icons/menuicon.png";
import MenuBar from "../Menubar";
import { SuperMolot, Verdana } from "@/styles/fonts";

function Header() {
  const [open, setOpen] = useState(false);
  const handleMenuBar = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [open]);
  return (
    <div className={`${styles.blur_background} ${SuperMolot.className} `}>
      <div
        className="mx-auto flex justify-between items-center p-8 md:p-8 "
        style={{ maxWidth: "1200px" }}
      >
        <div>
          <Image src={Icon} alt="Perfect corporate logo.png" width={150} />
        </div>
        {!open && (
          <>
            <div className="hidden md:block">
              <button
                onClick={handleMenuBar}
                className="text-white py-1 px-5 "
                type="submit"
                style={{
                  background: "transperent",
                  border: "solid 1px white",
                  borderRadius: "50px",
                  fontSize: "16px",
                }}
              >
                Menu
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={handleMenuBar}>
                <Image src={meunicon} alt="Menu_icon" width={50} />
              </button>
            </div>
          </>
        )}

        {open && (
          <div>
            <MenuBar toggle={open} handleToggle={handleMenuBar} />
          </div>
        )}
      </div>
    </div>
  );
}
export default Header;

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import PerfectLogo from "../../assets/Icons/CompleteLogo.png";
import BasicMenu from "../Menubar";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [submenuopen, setSubMenuOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setSubMenuOpen(false);
  };
  const handleSubemnuOpen = () => {
    setSubMenuOpen(!submenuopen);
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.container}>
        <div>
          <div className="d-flex align-items-center text-white ">
            <Image width={150} src={PerfectLogo} alt="logo" />
            {/* <div className={styles.perfect_text}>PERFECT</div> */}
          </div>
          {/* <div className={styles.kiosk_text}>KIOSK</div> */}
        </div>
        <div className={` ${styles.web_views}`}>
          <div className="d-flex align-items-center gap-2">
            <BasicMenu />
          </div>
          <a className={styles.nav_text}>Join Us</a>
          <a className={styles.nav_text}>About Us</a>
          <a href="#contactus" className={styles.nav_text}>
            Contact Us
          </a>
          <a className={styles.nav_text}>Book a Demo</a>
        </div>
        <div className={styles.mob_view}>
          <div>
            <div>
              {open ? (
                <CloseIcon
                  onClick={handleOpen}
                  sx={{ color: "#fff", fontSize: "2.5rem" }}
                  fontSize="large"
                />
              ) : (
                <MenuIcon
                  onClick={handleOpen}
                  sx={{ color: "#fff", fontSize: "2.5rem" }}
                  fontSize="large"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {open && (
          <div className={styles.menu_container}>
            <div className={styles.mob_menus}>
              Products{" "}
              {submenuopen ? (
                <KeyboardArrowUpIcon onClick={handleSubemnuOpen} />
              ) : (
                <KeyboardArrowDownIcon onClick={handleSubemnuOpen} />
              )}
              {submenuopen && (
                <div>
                  <div>
                    <a href="#Visionary" className={styles.mob_menus}>
                      Perfect Visionary
                    </a>
                  </div>
                  <div>
                    <a href="#Smart" className={styles.mob_menus}>
                      Perfect Smart
                    </a>
                  </div>
                  <div>
                    <a href="#Indie" className={styles.mob_menus}>
                      Perfect Indie
                    </a>
                  </div>
                </div>
              )}
            </div>
            <a className={styles.mob_menus}>About Us</a>{" "}
            <a href="#contactus" className={styles.mob_menus}>Contact us</a>
            <a className={styles.mob_menus}>Book a Demo</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

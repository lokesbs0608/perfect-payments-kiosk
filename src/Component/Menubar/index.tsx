import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "../Header/styles.module.scss";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAnchorTag = (event: any, href: any, handleClose: any) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
      target.classList.add("highlighted"); // Add the 'highlighted' class to the div
      setTimeout(() => {
        target.classList.remove("highlighted"); // Remove the 'highlighted' class after a short delay (adjust as needed)
      }, 1000); // Adjust the delay time (in milliseconds) to keep the highlight visible
    }
    handleClose();
  };
  return (
    <div>
      <div
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={styles.nav_text}
      >
        Products
        {open ? (
          <KeyboardArrowUpIcon
            sx={{ color: "#fff", fontSize: "2rem" }}
            fontSize="medium"
            onClick={handleClick}
          />
        ) : (
          <KeyboardArrowDownIcon
            sx={{ color: "#fff", fontSize: "2rem" }}
            fontSize="medium"
            onClick={handleClose}
          />
        )}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ paddingTop: "0px" }}
      >
        <div style={{ background: "#0f4c81" }} className="d-flex flex-column">
          <a
            href="#Visionary"
            className={styles.mob_menus}
            onClick={(e) => handleAnchorTag(e, "#Visionary", handleClose)}
          >
            Perfect Visionary
          </a>
          <a
            href="#Smart"
            className={styles.mob_menus}
            onClick={(e) => handleAnchorTag(e, "#Smart", handleClose)}
          >
            Perfect Smart
          </a>
          <a
            href="#Indie"
            className={styles.mob_menus}
            onClick={(e) => handleAnchorTag(e, "#Indie", handleClose)}
          >
            Perfect Indie
          </a>
        </div>
      </Menu>
    </div>
  );
}

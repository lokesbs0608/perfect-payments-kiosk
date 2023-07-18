import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "../Header/styles.module.scss";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ paddingTop:'0px' }}
      >
        <MenuItem
          sx={{
            background: "#0f4c81",
            color: "#fff",
          }}
          onClick={handleClose}
        >
          Profile
        </MenuItem>
        <MenuItem
          sx={{
            background: "#0f4c81",
            color: "#fff",
          }}
          onClick={handleClose}
        >
          My account
        </MenuItem>
        <MenuItem
          sx={{
            background: "#0f4c81",
            color: "#fff",
          }}
          onClick={handleClose}
        >
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function PositionedMenu() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div>
        {open ? (
          <CloseIcon
            onClick={handleOpen}
            sx={{ color: "#fff", fontSize: "3rem" }}
            fontSize="large"
          />
        ) : (
          <MenuIcon
            onClick={handleOpen}
            sx={{ color: "#fff", fontSize: "3rem" }}
            fontSize="large"
          />
        )}
      </div>
    </div>
  );
}

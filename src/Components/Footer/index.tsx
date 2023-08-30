import React from "react";
import { SuperMolot, Verdana } from "@/styles/fonts";

const Footer = () => {
  return (
    <div className={`${SuperMolot.className}`}>
      <div
        className="  flex justify-around "
        style={{ background: "#2F2F2F" }}
      >
        <div className=" text-white p-4 font-semibold">
          intellectual property of perfectpays ltd | copyrights of perfectays
          ltd
        </div>
        <div className=" text-white p-4 font-semibold">&#169; 2023</div>
      </div>
    </div>
  );
};

export default Footer;

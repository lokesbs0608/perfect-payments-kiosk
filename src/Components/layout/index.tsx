
import React from "react";
import HeaderComponent from "../header";
import Footer from "../Footer";

const LayoutComponent = ({ children }: any) => {
  return (
  
      <div className="">
        <div style={{zIndex:'1000'}} className="fixed top-0 left-0 w-full">
          <HeaderComponent />
        </div>
        <div>
          {children}
        </div>
        <Footer />
      </div>

  );
};

export default LayoutComponent;

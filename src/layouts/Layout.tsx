import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BackgroundOverlay: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  return (
    <div className="flex flex-col flex-grow bg-[#FFF2D0] min-h-screen">
      <div className="relative z-3 flex-grow flex flex-col overflow-auto bottom-[115px]">
        {children}
      </div>
    </div>
  );
};

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BackgroundOverlay>
        <Navbar />
        <div className="z-3 relative flex-grow">{children}</div>
        <Footer />
      </BackgroundOverlay>
    </>
  );
};

export default Layout;

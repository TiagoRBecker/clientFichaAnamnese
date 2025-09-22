"use client";
import MenuDesktop from "./desktop";
import MenuMobile from "./mobile";

const Menu = () => {

  return (
    <>
    <nav className="container mx-auto h-[104px] md:flex items-center justify-between bg-[#EBEBEB]">
      <MenuDesktop/>
      <MenuMobile/>
    
    </nav>
    </>
  );
};

export default Menu;

import Menu from "../Nav";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
const Header = () => {
  return (
    <header className="w-full h-full bg-[#EBEBEB]">
      <div className="w-full h-[35px]  mx-auto flex items-center justify-around bg-[#336DFF]">
        <div className="hidden md:container mx-auto md:flex items-center">
          <div className="w-[50%]">
            <h1 className="text-sm text-white opacity-100">
              ACESSORIA JURÍDICA | GUEDES BAMPI ADVOCACIA
            </h1>
          </div>
          <div className="w-[50%] flex items-center justify-end gap-4 ">
            <Facebook size={20} color="white" />
            <Instagram size={20} color="white" />
            <Twitter size={20} color="white" />
          </div>
        </div>
      </div>

      <Menu />
    </header>
  );
};

export default Header;

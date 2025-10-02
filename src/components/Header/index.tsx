"use client";
import { Input } from "@chakra-ui/react";
import Menu from "../Nav";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter()
  const [name, setName] = useState("");
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!name) return;
     if(event.key === "Enter"){
      router.push(`/docs?search=${name}`)
      return
     }
  };
  return (
    <header className="w-full h-full bg-[#EBEBEB]">
      <div className="w-full h-[70px]  mx-auto flex items-center justify-around bg-[#336DFF]">
        <div className="hidden md:container mx-auto md:flex items-center">
          <div className="w-[30%]">
            <h1 className="text-sm text-white opacity-100">
              ACESSORIA JURÍDICA | GUEDES BAMPI ADVOCACIA
            </h1>
          </div>
          <div className="w-[40%] mx-auto ">
            <input
              className="w-full rounded-md outline-none h-10 pl-4 px-2 "
              placeholder="Buscar documentos, categorias "
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleSearch}
            />
          </div>
          <div className="w-[30%] flex items-center justify-end gap-4 ">
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

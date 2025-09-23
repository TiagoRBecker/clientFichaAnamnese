"use client";
import { useCategories } from "@/utils/Queries/useCategories";

import Perfil from "../Perfil";
import Link from "next/link";

import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { MenuIcon } from "lucide-react";

const MenuMobile = () => {
  const { data, isLoading } = useCategories();
  return (
    <div className="flex  lg:hidden container mx-auto h-[104px] items-center justify-between bg-[#EBEBEB]">
      <div className="w-[10%] flex items-center">
        <Menu>
          <MenuButton className="w-full h-full  ">
            <MenuIcon size={30}/>
          </MenuButton>

          <MenuList
            bg="white"
            h={"100vh"}
             w={"100vw"}
            p={1}
            mt={2}
            shadow="md"
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            {data?.map((cat: { id: string; name: string }, index: number) => (
              <MenuItem
              key={index}
                as={Link}
                href={`/categories/${cat.id}`}
                className="flex items-center gap-2"
              >
                {cat.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>

      <div className="w-[40%]">
        <Link href={"/"}>
          <img src="/Assets/Logo/logo.svg" alt="Logo" />
        </Link>
      </div>

      {/* Carrinho + Perfil à direita */}
      <div className="w-[40%] flex items-center justify-end gap-5 px-2">
        <Perfil />
      </div>
    </div>
  );
};

export default MenuMobile;

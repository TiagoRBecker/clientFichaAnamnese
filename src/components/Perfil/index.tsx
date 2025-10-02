"use client";

import { signOut, useSession } from "next-auth/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";
import {
  BookOpenText,
  BookCopy,
  LogOut,
  ChevronDown,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useCartHook } from "@/utils/Queries/useCart";
import Cart from "../checkout";
type Props = {
name:string
}
const Perfil = ({name}:Props) => {
 
  const { listCart } = useCartHook();
  const [showCart, setShowCart] = useState(false);


  if (listCart.isLoading) return null;
  return (
    <div className="w-full  flex items-center justify-end  ">
      <div className="flex items-center gap-3">
        <div
          className="relative cursor-pointer flex items-center justify-end   "
          onClick={() => setShowCart(true)}
        >
          <ShoppingBag size={30} color="#336DFF" strokeWidth={1} />
          <p className="w-4 h-4 bg-[#31AF97] rounded-full text-white flex items-center justify-center top-0 right-0 absolute text-[8px]">
            {listCart?.data?.cartItems?.length || 0}
          </p>
        </div>
        <Menu>
          <MenuButton className="w-full h-full  ">
            <div className="flex items-center gap-3 w-full  justify-end">
              <p className="hidden md:capitalize font-medium md:flex gap-1 items-center truncate ">
                
                {name}
                <ChevronDown size={18} />
              </p>
              <p className="capitalize font-medium flex gap-1 items-center md:hidden ">
                <UserRound size={30} color="#336DFF" strokeWidth={1} />
              </p>
            </div>
          </MenuButton>

          <MenuList
            bg="white"
            p={1}
            shadow="md"
            display={"flex"}
            flexDirection={"column"}
            gap={2}
          >
            <MenuItem
              as={Link}
              href="/library"
              className="flex items-center gap-2"
            >
              <BookOpenText strokeWidth="1" />
              Documentos
            </MenuItem>

            <MenuItem
              as={Link}
              href="/orders"
              className="flex items-center gap-2"
            >
              <BookCopy strokeWidth="1" />
              Pedidos
            </MenuItem>

            <MenuItem
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2"
            >
              <LogOut strokeWidth="1" />
              Sair
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      {listCart?.data?.cartItems?.length > 0 && showCart && (
        <Cart handleCloseMenu={() => setShowCart(false)} />
      )}
    </div>
  );
};

export default Perfil;

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
const Perfil = () => {
    const { data: session, status } = useSession();

  const [showCart, setShowCart] = useState(false);
  useEffect(() => {}, [status]);
    const { listCart } = useCartHook(status === "authenticated");

  return (
    <div className="w-full  flex items-center justify-end  ">
      {status === "loading" && (
        <p className="text-gray-400 text-left">carregando ...</p>
      )}
      {status === "unauthenticated" && (
        <Link
          href={"/auth/signin"}
          className="py-2 px-6 rounded-3xl flex items-center gap-2 border-[#336DFF] border text-[#336DFF] text-sm text-left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          Login
        </Link>
      )}
      {status === "authenticated" && (
        <>
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
                    {session?.user?.name}
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
        </>
      )}
    </div>
  );
};

export default Perfil;

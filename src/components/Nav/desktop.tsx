"use client";
import { useCategories } from "@/utils/Queries/useCategories";

import Perfil from "../Perfil";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "lucide-react";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from "@chakra-ui/react";

const MenuDesktop = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleTeste = () => {
    console.log("ij");
  };
  const { status, data: session } = useSession();
  const { data, isLoading } = useCategories();
  return (
    <div className="hidden lg:flex container mx-auto h-[104px] items-center justify-between bg-[#EBEBEB]">
      {/* Logo à esquerda */}
      <div className="w-[30%] flex items-center">
        <Link href={"/"}>
          <img src="/Assets/Logo/logo.svg" alt="Logo" />
        </Link>
      </div>

      {/* Links no meio */}
      <div className="flex flex-grow items-center justify-center gap-4">
        <li className="list-none text-[#336DFF] border-r border-[#336DFF] px-2">
          <Link href={"/"}>Início</Link>
        </li>
        {isLoading ? (
          <p>Carregando ..</p>
        ) : (
          <div className="flex items-center gap-3">
         
           
                {data?.map((link: { id: string; name: string }) => (
                  <li key={link.id} className="list-none">
                    <Link
                      href={`/categories/${link.id}`}
                      className="w-full truncate"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              
            
          </div>
        )}
      </div>

      {/* Carrinho + Perfil à direita */}
      <div className="w-[30%] flex items-center justify-end gap-5">
        {status === "loading" && <p>carregando</p>}
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
          <Perfil name={session.user.name as string} />
        )}
      </div>
    </div>
  );
};

export default MenuDesktop;

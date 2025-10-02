"use client"
import { useCategories } from "@/utils/Queries/useCategories";

import Perfil from "../Perfil";
import Link from "next/link";


const MenuDesktop = () => {

      const { data, isLoading } = useCategories();
    return (    <div className="hidden lg:flex container mx-auto h-[104px] items-center justify-between bg-[#EBEBEB]">
      
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
          <>
            {data?.map((link: { id: string; name: string }) => (
              <li key={link.id} className="list-none">
                <Link href={`/categories/${link.id}`} className="w-full truncate">{link.name}</Link>
              </li>
            ))}
          </>
        )}
      </div>

      {/* Carrinho + Perfil à direita */}
      <div className="w-[30%] flex items-center justify-end gap-5">
        <Perfil />
      </div>
    
    </div>);
}
 
export default MenuDesktop;
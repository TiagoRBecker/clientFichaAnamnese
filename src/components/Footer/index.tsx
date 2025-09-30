import { links, utils } from "@/utils/Mock/menu";
import Link from "next/link";
import { WhatsAppButton } from "../wpp";

const Footer = () => {
  return (
    <footer className="w-full h-full p-10 bg-white flex flex-col items-center justify-center shadow-2xl  ">
      <div className="container mx-auto grid  grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="w-full h-full flex  justify-center">
          <img src="/Assets/Logo/logo.svg" alt="" className="w-[300px] " />
        </div>
        <div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="uppercase text-[#336DFF]">Categorias</h1>
            <li className="list-none">
              <Link href={"#"}>Início</Link>
            </li>
            {links.map((links, index: number) => (
              <li key={index} className=" list-none">
                <Link href={"#"} className="">
                  {links.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div>
          <div className="flex flex-col items-start gap-4">
            <h1 className="uppercase text-[#336DFF]">Utilidades</h1>

            {utils.map((links, index: number) => (
              <li key={index} className=" list-none">
                <Link href={links.path} className="">
                  {links.name}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Tem dúvidas? Fale com a gente</h1>
          <div className="flex items-center gap-2">
            <img src="/Assets/Icons/contact.svg" alt="" className="w-8 h-8" />
            <p>Whatsapp 51 0000-0000</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Assets/Icons/contact2.svg" alt="" className="w-8 h-8" />
            <p>contato@fichadeanamnese.com.br</p>
          </div>
        </div>
      </div>
      <div className="h-[0.5px] container  bg-gray-200 my-10"></div>
      <div className="container mx-auto flex flex-col items-center  md:flex-row md:justify-between">
        <div className=" flex items-center gap-4">
          <img src="/Assets/Logo/logoOuro.svg" alt="" />
          <p>
            Ficha de Anamnese©  | Guedes Bampi Advocacia | Termos e Condições de
            Uso
          </p>
        </div>
        <div className="">
          <img src="/Assets/Logo/agion.svg" alt="" />
        </div>
      </div>
      <WhatsAppButton/>
    </footer>
  );
};

export default Footer;

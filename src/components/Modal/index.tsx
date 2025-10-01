"use client";
import Carrousel from "@/components/Carrousel";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Link from "next/link";
import ButtonAddToCart from "../Buttons/addTocartButton";
import ProductImage from "../productImage";
export type ProductsType = {
  id: string;
  name: string;
  price: number;
  description: string;
  status: "AVAILABLE" | "UNAVAILABLE";
  images: string[];
  categories: { name: string }[];
};
export type Modal = {
  product: ProductsType | null;

  isOpen: boolean;
  onClose: () => void;
};
const ModalProduct = ({ isOpen, onClose, product }: Modal) => {
  const createWhatsAppUrl = (product: ProductsType) => {
    const message = `Olá! Gostaria de solicitar o documento!
${product?.name} ${(product?.price / 100).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    })}
Nome da clínica/paciente: [Digite seu nome ..]`;
    const formattedPhone = 555195391300;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${formattedPhone}?text=${encodedMessage}`;
  };

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        closeOnEsc={false}
        isOpen={isOpen}
        onClose={onClose}
        size={"4xl"}
      >
        <ModalOverlay />
        <ModalContent className="py-10">
          <ModalHeader className=" flex items-center justify-center md:justify-start">
            <img src="/Assets/Logo/logo.svg" alt="logo" />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="grid  grid-cols-1 h-full gap-2 lg:grid-cols-2 lg:h-[500px]">
              <div className="w-full h-full flex items-center justify-center  ">
                <ProductImage products={product as ProductsType} />
              </div>

              <div className="w-full   flex flex-col gap-5 ">
                <h1 className="text-[#336DFF] uppercase font-bold">
                  {product?.name}
                </h1>
                <span className="font-bold">
                  {((product?.price as number) / 100)?.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <p className="hidden md:block">{product?.description}</p>
                {product?.status === "AVAILABLE" ? (
                  <div className="flex items-center justify-center gap-2">
                    <ButtonAddToCart product={product} />
                    <Link
                      href={"/cart"}
                      className="w-full flex items-center justify-center gap-2 border  border-[#31AF97]  rounded-full text-sm"
                    >
                      <ButtonAddToCart
                        product={product}
                        className=" !text-black "
                        text="Comprar Agora"
                      />
                    </Link>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      target="_blank"
                      href={createWhatsAppUrl(product as ProductsType)}
                      className="flex items-center justify-center gap-2 border border-[#31AF97]  py-2 px-4 rounded-full text-sm"
                    >
                      Soliciar Documento
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProduct;
//flex flex-col justify-center items-center w-full  gap-4 md:flex-row md:h-[600px]
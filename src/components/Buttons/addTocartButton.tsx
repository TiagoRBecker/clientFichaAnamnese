"use client";

import { useCartHook } from "@/utils/Queries/useCart";
import { ProductsType } from "../Modal";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
type Props = {
  product: ProductsType;
  className?: string;
  text?: string;
};
const ButtonAddToCart = ({ product, className, text }: Props) => {
  const router = useRouter()
  const { data:session} = useSession()
  const { addTocart } = useCartHook();
  const handleAddTocart = (product: ProductsType) => {
    if(!session){
      return router.push("/auth/signin")
    }
    addTocart.mutate({
      id: product?.id as string,
      image: product.images[0],
      price: product.price as number,
      name: product?.name as string,
    });

    return;
  };

  return (
    <button
      className={`w-full h-10 text-white rounded-full text-[10px] ${
        className ? className : "bg-[#336DFF]"
      }`}
      onClick={() => {
        handleAddTocart(product);
      }}
    >
      {text ? text : "Adicionar o Carrinho"}
    </button>
  );
};

export default ButtonAddToCart;

"use client";
import { Container, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import ModalProduct, { ProductsType } from "./Modal";
import CardBox from "./card";
import { useUpdateViewsProducts } from "@/utils/Queries/useDocuments";

type Props = {
  data: [];
  name?: string;
};
const CardList = ({ data, name }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync } = useUpdateViewsProducts();
  const [product, setProduct] = useState<ProductsType | null>(null);
  const openModal = async (product: any) => {
    await mutateAsync(product.id);
    setProduct(product);
    onOpen();
  };
  const handlCloseModal = () => {
    setProduct(null);
    onClose();
  };

  return (
    <div className="w-full h-full pb-20  px-2">
      <div className="container  gap-10 mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        {data?.map((products, index) => (
          <CardBox
            product={products}
            categoryName={name as string}
            key={index}
            onOpen={() => {
              openModal(products);
            }}
          />
        ))}
      </div>
      <ModalProduct
        product={product}
        isOpen={isOpen}
        onClose={handlCloseModal}
      />
    </div>
  );
};

export default CardList;

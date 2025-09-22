"use client";
import BannerDescript from "@/components/BannerDescript";
import CardList from "@/components/cardlist";
import ModalProduct, { ProductsType } from "@/components/Modal";
import NotFound from "@/components/NotFound/indext";

import { useCartStore } from "@/store/cartStore";
import { useCategoriesId } from "@/utils/Queries/useCategories";
import { useDisclosure } from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoriesPageID = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const params = useParams();
  const id = params.id;
  const addTocart = useCartStore((state) => state.addToCart);
  const { data, isLoading } = useCategoriesId(id as string);

  const [product, setProduct] = useState<ProductsType | null>(null);

  const handleOpenModal = (product: ProductsType) => {
    onOpen();
    setProduct(product);
  };
  if (isLoading) {
    return <p>Carregando</p>;
  }

  return (
    <section className="w-full flex items-center justify-center  flex-col ">
      <div className="w-full  bg-[#EBEBEB] h-[200px]"></div>
      <div className="-mt-24 w-full">
        <BannerDescript
          title={data?.name as string}
          descript="A ficha de anamnese é um documento essencial em qualquer atendimento clínico, sendo a base para o diagnóstico e acompanhamento de pacientes. Nela, o profissional de saúde coleta uma série de informações importantes sobre o histórico médico do paciente, estilo de vida, hábitos diários, além de queixas atuais."
        />
      </div>
      {data?.products?.length === 0 ? (
        <NotFound />
      ) : (
        <CardList data={data?.products} name={data.name} />
      )}
    </section>
  );
};

export default CategoriesPageID;

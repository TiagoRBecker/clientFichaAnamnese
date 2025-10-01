"use client";
import { useLastProducts } from "@/utils/Queries/useDocuments";
import CardList from "../cardlist";

const LastProducts = () => {
  const { data } = useLastProducts();

  return (
    <section className="container mx-auto h-full flex  pt-26 flex-col  items-center justify-center  ">
      <h1 className="uppercase text-2xl  text-left w-full py-10">
        Novas Atualizações
      </h1>
      <CardList data={data} />
    </section>
  );
};

export default LastProducts;

"use client";
import { useHighLigthProducts } from "@/utils/Queries/useDocuments";
import CardList from "../cardlist";

const DocsEmphasis = () => {
  const { data } = useHighLigthProducts();

  return (
 
        <section className="container mx-auto h-full flex flex-col p-10 items-center justify-center">
          <h1 className="uppercase text-2xl  text-left w-full">
            Documentos em Destaque
          </h1>

          <CardList data={data} />
        </section>
      
    
  );
};

export default DocsEmphasis;

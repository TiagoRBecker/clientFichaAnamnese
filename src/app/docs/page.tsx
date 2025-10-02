"use client";
import CardList from "@/components/cardlist";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound/indext";
import { useAllDocs } from "@/utils/Queries/useDocuments";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

const AllDocs = () => {
  const params = useSearchParams();
  const name = params.get("search");
  useEffect(() => {}, [name]);
  const { data, isLoading } = useAllDocs(name as string);
  if (isLoading) return <Loading />;
  if (!data.length) return <NotFound />;
  return (
    <Suspense fallback={""}>
      <div className="w-full min-h-screen">
        <div className="container mx-auto">
          <h1 className="py-10">
            Busca realizada para{" "}
            <span className="text-2xl text-gray-500 uppercase">{name}</span>
          </h1>
          <CardList data={data} name="Categorias" />
        </div>
      </div>
    </Suspense>
  );
};

export default AllDocs;

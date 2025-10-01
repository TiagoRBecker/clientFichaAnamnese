"use client";
import { useCategories } from "@/utils/Queries/useCategories";
import Link from "next/link";
import CardList from "./cardlist";
import React from "react";
import { ProductsType } from "./Modal";
import { Images } from "@/utils/Mock/images";

const ListCategories = () => {
  const { data } = useCategories();
  const categoriesWithProducts = data?.filter(
    (cat: any) => cat.products && cat.products.length > 0
  );

  return (
    <section className="w-full h-full flex flex-col gap-10 py-28">
      {categoriesWithProducts?.map(
        (
          cats: {
            id: string;
            name: string;
            description: string;
            products: any;
          },
          index: number
        ) => {
          const randomIndex = Math.floor(Math.random() * Images.length);
          return (
            <React.Fragment key={index}>
              <div className="w-full  h-[335px]  bg-[#336DFF] lg:h-[370px] ">
                <div className="w-full  grid grid-cols-1 md:grid-cols-2">
                  <div className="hidden  lg:flex items-center justify-center w-full relative h-[350px]">
                    <img
                      src={Images[randomIndex]}
                      alt=""
                      className="absolute  left-0 w-full h-[430px] object-contain top-[calc(370px-430px)]"
                    />
                  </div>
                  <div className="w-full flex   flex-col gap-4 items-start justify-center  max-w-[488px]  mx-auto">
                    <h2 className="text-2xl text-white  ">{cats.name}</h2>
                    <p className="text-white max-h-[200px] line-clamp-3">
                      {cats.description}
                    </p>
                    <Link
                      href={`/categories/${cats.id}`}
                      className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm flex items-center justify-center"
                    >
                      Veja Nossas Fichas
                    </Link>
                  </div>
                </div>
              </div>
              <h1 className="text-4xl container mx-auto">{cats.name}</h1>
              <CardList data={cats?.products} name={cats.name} />
            </React.Fragment>
          );
        }
      )}
    </section>
  );
};

export default ListCategories;

"use client";
import BannerDescript from "@/components/BannerDescript";
import CardList from "@/components/cardlist";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound/indext";
import { useCategoriesId } from "@/utils/Queries/useCategories";
import { useParams } from "next/navigation";


const CategoriesPageID = () => {

  const params = useParams();
  const id = params.id;

  const { data, isLoading } = useCategoriesId(id as string);




  if (isLoading) {
    return <Loading/>
  }

  return (
    <section className="w-full flex items-center justify-center  flex-col ">
      <div className="w-full  bg-[#EBEBEB] h-[200px]"></div>
      <div className="-mt-24 w-full mb-10">
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

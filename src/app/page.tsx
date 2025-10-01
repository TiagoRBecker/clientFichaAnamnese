"use client";
import Banner from "@/components/Banner";
import DocsEmphasis from "@/components/Docs";
import LastProducts from "@/components/LastProducts/indext";
import ListCategories from "@/components/listcategories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastProducts />
      {/*
      <section className="w-full  h-[335px] p-6 bg-[#336DFF] lg:h-[450px] ">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2">
          <div className="hidden  lg:flex items-center justify-center w-full">
            <img
              src="/Assets/Banner/banner1.svg"
              alt=""
              className="w-full h-[550px] -mt-[120px] ml-24"
            />
          </div>
          <div className="w-full flex   flex-col gap-4 items-start justify-center  max-w-[488px]  mx-auto">
            <h2 className="text-2xl text-white  ">
              Organize e otimize o atendimento com nossas fichas de anamnese
            </h2>
            <p className="text-white">
              Facilite o diagnóstico e o acompanhamento dos seus pacientes de
              forma prática e eficiente.
            </p>
            <button className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">
              Veja Nossas Fichas
            </button>
          </div>
        </div>
      </section>
      */}
      <ListCategories />
   

      <section className="w-full h-full  flex items-center justify-center">
        <div className="container  p-6 bg-[#336DFF] rounded-md mx-auto h-[400px]">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
            <div className="w-full  flex items-center justify-center max-w-[500px]  mx-auto  lg:h-[400px]">
              <h2 className="text-3xl mx-auto text-white text-left">
                Está procurando algo específico e não encontrou por aqui?
              </h2>
            </div>
            <div className="w-full flex flex-col   items-center lg:h-[400px] lg:justify-center">
              <p className="text-white max-w-[650px] text-left">
                Entre em contato com a nossa equipe para que possamos ajudar
                você com a melhor solução possível
              </p>
              <div className="w-full flex items-center lg:justify-end lg:w-[80%] mt-4">
                <button className="w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">
                  Solicite ajuda
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}

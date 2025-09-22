"use client";
import Banner from "@/components/Banner";
import DocsEmphasis from "@/components/Docs";
import LastProducts from "@/components/LastProducts/indext";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Banner />
      <LastProducts />

      <section className="w-full h-[431px] bg-[#336DFF]">
        <div className="w-full h-full grid grid-cols-1 p-6 md:grid-cols-2">
          <div className="hidden md:block">
            <img
              src="/Assets/Banner/banner1.svg"
              alt=""
              className="w-full h-[550px] -mt-[120px]"
            />
          </div>
          <div className="w-full flex   flex-col gap-4 items-start justify-center ">
            <h2 className="text-2xl text-white pt-[118px]">
              Organize e otimize o atendimento
            </h2>
            <h2 className="text-2xl text-white">
              {" "}
              com nossas fichas de anamnese
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
      <DocsEmphasis />
      <section className="container h-full   bg-[#336DFF] rounded-md mx-auto z-50 relative md:h-[280px]">
        <div className="w-full h-full grid  grid-cols-1 p-4 gap-4 md:grid-cols-2">
          <div className="w-full text-left md:text-center ">
            <h2 className="text-3xl max-w-[230px] mx-auto text-white pt-0 text-left md:text-center md:pt-[118px] md:w-full">
              Está procurando algo específico e não encontrou por aqui?
            </h2>
          
          </div>
          <div className="max-w-[230px] mx-auto flex  flex-col gap-2 md:items-end  md:justify-center md:max-w-[650px]">
            <p className="text-white  mx-auto md:w-full">
              Entre em contato com a nossa equipe para que
                possamos ajudar você com a melhor solução possível
            </p>
          
          
            
           
            <button className=" w-[199px] h-12 bg-white text-[#336DFF] rounded-full text-sm">
              Solicite ajuda
            </button>
          </div>
        </div>
      </section>
      <Testimonials />
    </main>
  );
}

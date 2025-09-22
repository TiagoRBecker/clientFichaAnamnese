import WpButton from "../WpButton";

const Banner = () => {
  return (
    <section className="w-full h-full bg-[#EBEBEB] flex items-center justify-around md:h-[640px]">
      <div className="container mx-auto h-full p-4 grid grid-cols-1 gap-5 md:grid-cols-3 py-10 md:h-[564px] ">
        <div className="w-[380px] mx-auto flex  flex-col gap-5 md:w-full">
          <h2 className="text-[#336DFF] uppercase font-semibold">
            Conheça agora
          </h2>
          <h1 className="text-4xl ">
            Os documentos certos para proteger sua carreira{" "}
          </h1>
          <p className="text-sm">
            Traga segurança o seu negócio com documentos jurídicos que protegem
            seus resultados e eliminam riscos.
          </p>
          <button className="w-[212px] h-[47px] bg-[#336DFF] rounded-full text-white text-sm">
            Veja Nossas Soluções
          </button>
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src="/Assets/Banner/banner.svg"
            alt=""
            className=" hidden md:w-full h-full md:block "
          />
             <img
            src="/Assets/Banner/bannerMd.svg"
            alt=""
            className=" w-full h-full md:hidden"
          />
        </div>
        <div className="hidden md:w-full md:flex flex-col gap-4 items-end">
          <div className="w-[340px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
            <div className="w-[130px] flex  flex-col items-start gap-1  ">
              <h2 className="text-[#072137] w-full text-sm">
                Novo contrato de Toxina Botulínica
              </h2>
              <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="w-[340px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
            <div className="w-[130px] flex  flex-col items-start gap-1  ">
              <h2 className="text-[#072137] w-full text-sm">
                Novo contrato de Toxina Botulínica
              </h2>
              <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="w-[340px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col ">
            <div className="w-[130px] flex  flex-col items-start gap-1  ">
              <h2 className="text-[#072137] w-full text-sm">
                Novo contrato de Toxina Botulínica
              </h2>
              <a className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

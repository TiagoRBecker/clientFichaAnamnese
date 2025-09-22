const AboutPage = () => {
  return (
    <section className="w-full h-full flex flex-col">
      <div className="w-full h-full bg-[#EBEBEB] ">
        <div className="container mx-auto h-[550px] grid grid-cols-2 py-10 gap-10">
          <div className="w-[500px] mx-auto h-[250px] flex items-start justify-center flex-col mt-[93px]">
            <h1 className="text-2xl text-[#336DFF] mb-4 ">Quem Somos</h1>
            <p className="max-w-[500px]">
              Somos uma Editora com foco em soluções digitais, publicações e
              capacitação multidisciplinar. Publicamos trabalhos técnicos e
              ferramentas digitais relevantes para aprimoramento profissional.
              Nossas publicações são produzidos por professores, juristas ,
              profissionais da saúde e de diversas áreas de conhecimento. Cada
              modelo é cuidadosamente elaborado por especialistas, garantindo
              atender aos padrões profissionais mais exigentes. Além disso,
              todos os nossos modelos são totalmente editáveis, permitindo que
              os usuários personalize cada documento de acordo com suas
              necessidades específicas
            </p>
          </div>
          <div className="w-full h-full ">
            <img
              src="/Assets/Banner/bannerAbout.svg"
              alt=""
              className="w-full h-[380px]"
            />
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-white ">
        <div className="container mx-auto h-[550px] grid grid-cols-3 py-10 gap-10">
          <div className="w-full h-full  flex items-end justify-end flex-col pb-20">
            <div className="max-w-[280px] flex flex-col items-start">
              <h1 className="text-[#336DFF] w-full text-2xl ">
                Dra. Deusa Guedes
              </h1>
              <p className="w-full">
                Direito médico, empresarial e da saúde, atua na defesa de
                clínicas e centros de estética.
              </p>
            </div>
          </div>
          <div className="w-full h-full ">
            <img
              src="/Assets/Banner/bannerAbout1.svg"
              alt=""
              className="w-full h-[550px]"
            />
          </div>
          <div className="w-full h-full  flex items-start justify-items-start flex-col pb-20">
            <div className="-ml-20 max-w-[300px] flex flex-col items-start mt-20">
              <h1 className="text-[#336DFF] w-full text-2xl ">
                Dr. Alexandre Bampi
              </h1>
              <p className="w-full text-left">
                Direito empresarial da saúde e contratual, advogado,
                administrador, mestre e professor de pós-graduação.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#336DFF] w-full h-[300px] flex items-center gap-10">
        <div className="w-[50%] flex items-center justify-center">
          <img src="/Assets/Logo/guedes.svg" alt="" />
        </div>
        <div className="w-[50%] h-full  flex flex-col gap-9  pt-20">
          <div className="max-w-[390px] text-white ">
            <p>Contamos com assessoria jurídica especializada em fichas, documentos e contratos para diversos nichos.</p>
          </div>
         <div className="w-full h-full ">
          <button className="bg-white py-4 w-[240px] text-[#336DFF] rounded-full">Conheça a Guedes Bampi</button>
         </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

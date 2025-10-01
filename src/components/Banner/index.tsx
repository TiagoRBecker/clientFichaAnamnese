import {
  useHighLigthProducts,
  useUpdateViewsProducts,
} from "@/utils/Queries/useDocuments";
import ModalProduct, { ProductsType } from "../Modal";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const Banner = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutateAsync } = useUpdateViewsProducts();
  const [product, setProduct] = useState<ProductsType | null>(null);
  const openModal = async (product: any) => {
    await mutateAsync(product.id);
    setProduct(product);
    onOpen();
  };
  const handlCloseModal = () => {
    setProduct(null);
    onClose();
  };

  const { data } = useHighLigthProducts();

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
          {data
            ?.slice(0, 3)
            .map((docs: { id: string; name: string }, index: number) => (
              <div
                className="w-[340px] h-[94px] bg-[#F4F4F4] rounded-md flex items-center justify-center gap-3 flex-col "
                key={index}
              >
                <div className="w-[130px] flex  flex-col items-start gap-1  ">
                  <h2 className="text-[#072137] w-full text-sm">
                    Novo contrato de {docs.name}
                  </h2>
                  <button onClick={()=>openModal(docs)} className=" text-left text-[#336DFF] border-b border-[#336DFF]">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <ModalProduct
        product={product}
        isOpen={isOpen}
        onClose={handlCloseModal}
      />
    </section>
  );
};

export default Banner;

import { Card } from "@chakra-ui/react";
import { ProductsType } from "./Modal";
import ButtonAddToCart from "./Buttons/addTocartButton";
import  { Zap } from "lucide-react"
type Props  = {
product:ProductsType
categoryName:string,
onOpen:(product:ProductsType)=>void


}
const CardBox = ({product ,categoryName,onOpen}: Props) => {

  const RenderButton = (status: string) => {
    switch (status) {
      case "AVAILABLE":
        return (
            <ButtonAddToCart product={product} />
        );

      case "UNAVAILABLE":
        return (
          <button className="w-full h-10 bg-[#336DFF] text-white  rounded-full text-[10px] " onClick={()=>{onOpen(product)}}>
            Indisponível
          </button>
        );

      default:
        return null; // Caso o status seja inesperado, não exibe nada
    }
  };
  return (
    <Card w={"100%"} bg="#EFEFEF" h={230}  rounded={"16px"} p={5} className="flex flex-col gap-6  mx-auto ">
      <h2 className="w-full truncate text-sm text-[#336DFF] md:font-semibold uppercase ">      { categoryName ?? product.categories[0]?.name}</h2>

      <p className="text-center text-black truncate w-full md:text-xl md:text-left ">{product.name}</p>
    
      <div className="flex flex-col items-center gap-4 md:flex-row   ">
        {RenderButton(product.status)}
        <button className=" w-full flex items-center gap-2 h-10 border border-[#31AF97]  justify-center  rounded-full text-[10px]" onClick={()=>{onOpen(product)}}>
         <Zap size={15}  color="#336DFF" strokeWidth={1}/>
          Visualização Rápida
        </button>
      </div>
    </Card>
  );
};

export default CardBox;


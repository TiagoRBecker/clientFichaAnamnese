import Image from "next/image";
import Carrousel from "./Carrousel";
import { ProductsType } from "./Modal";

type Props = {
  products: ProductsType;
};

const ProductImage = ({ products }: Props) => {
  // Se produto indisponível
  if (products.status === "UNAVAILABLE") {
    return (
      <img
        src="/Assets/Banner/caution.svg"
        alt="Indisponível"
        className="w-full h-[500px] "
      />
    );
  }




  if (products.images.length === 1) {
    return (
      <img
        src={products.images[0]}
        alt="Produto"
   
        className="w-full h-[500px] object-contain"
      />
    );
  }

  return (
    <Carrousel>
      {products.images.map((img: string, index: number) => (
      
          <img key={index} src={img} alt={`Produto ${index + 1}`} className="w-full h-[500px] object-contain" />
        
      ))}
    </Carrousel>
  );
};

export default ProductImage;

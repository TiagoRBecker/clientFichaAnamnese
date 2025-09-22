"use client"
import { usePayments } from "@/utils/Queries/usePayments";
import { usePathname, useRouter } from "next/navigation";

const ButtonPayment = () => {
    const router = useRouter()
  const { createOrderPayment } = usePayments();
  const pathname = usePathname();

  const handleCreatePayment = async () => {
  
    createOrderPayment.mutate(undefined,{
      async onSuccess(data, variables, context) {
       
          const newPath = data?.replace('/cart', pathname);
          return router.replace(newPath)
      },
      async onError(error, variables, context) {
        return alert("Estamos com problemas internos .Tente Novamente mais tarde.")
      },
    });
  };
  return (
    <button  onClick={handleCreatePayment} className="w-full  mt-6 py-4 bg-[#336DFF] text-white rounded-full text-xlflex items-center justify-center">
      Finalizar Compra
    </button>
  );
};

export default ButtonPayment;

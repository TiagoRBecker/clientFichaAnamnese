"use client";
import { usePayments } from "@/utils/Queries/usePayments";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ButtonPayment = () => {
  const router = useRouter();
  const { createOrderPayment } = usePayments();
  const pathname = usePathname();

  const handleCreatePayment = async () => {
    const confirm = await Swal.fire({
      title: "Confirmar Pagamento",
      text: "Ao confirmar, você será redirecionado para um ambiente protegido e certificado, garantindo total segurança na finalização do seu pagamento.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, continuar",
      cancelButtonText: "Cancelar",
    });
    if (confirm.isConfirmed) {
      createOrderPayment.mutate(undefined, {
        async onSuccess(data, variables, context) {
          const newPath = data?.replace("/cart", pathname);
          return router.replace(newPath);
        },
        async onError(error, variables, context) {
          await Swal.fire(
            "Internal Server Error",
            "Estamos com problemas internos. Tente novamente mais tarde!",
            "error"
          );
          return 
        },
      });
    }
    /*
   
    */
  };
  return (
    <button
      onClick={handleCreatePayment}
      className="w-full  mt-6 py-4 bg-[#336DFF] text-white rounded-full text-xlflex items-center justify-center"
    >
      Finalizar Compra
    </button>
  );
};

export default ButtonPayment;

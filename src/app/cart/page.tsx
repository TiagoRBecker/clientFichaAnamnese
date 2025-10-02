"use client";
import ButtonPayment from "@/components/Buttons/createOrderPayment";
import Loading from "@/components/Loading";
import Terms from "@/components/terms";
import { useCartHook } from "@/utils/Queries/useCart";
import { useTerms } from "@/utils/Queries/useTerms";
import { Checkbox, ListItem, useDisclosure } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const CartPage = () => {
  const {status} = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { listCart, removeCart } = useCartHook(status === "authenticated");
  const { lisTerm } = useTerms();
  const total = listCart?.data?.cartItems?.reduce(
    (acc: number, item: { price: number }) => acc + item.price,
    0
  );

  const handleOpenModal = () => {
    onOpen();
  };
  const handleRemovecart = (id: string) => {
    removeCart.mutate(id);
  };

  if (listCart.isLoading || lisTerm.isLoading) {
    return <Loading />;
  }
  if (!listCart.data) {
    return (
      <section className="w-full h-screen flex items-center justify-center bg-[#EBEBEB] py-10">
        <p className="text-2xl text-gray-600">
          Nenhum item adicionado ao carrinho !
        </p>
      </section>
    );
  }
  return (
    <section className="w-full h-screen bg-[#EBEBEB] py-10 px-4">
      <h1 className="container mx-auto text-3xl text-left">
        Lista de Produtos
      </h1>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32">
        <div className="w-full flex-col  flex items-center justify-center">
          <div className="w-full  flex items-center justify-center flex-col pt-10 gap-4 ">
            {listCart.data?.cartItems?.map(
              (
                docs: { id: string; name: string; price: number },
                index: number
              ) => (
                <div
                  className="w-full h-[55px] flex items-center gap-1 justify-around shadow-sm rounded-md border-gray-100 border-[1px] bg-white px-2"
                  key={index}
                >
                  <div className="w-[50%]">
                    <h2 className="text-xl truncate  ">{docs.name}</h2>
                  </div>
                  <div className="w-[50%] flex items-center justify-end gap-3">
                    <span className="text-[#336DFF] text-xl">
                      {(docs.price / 100).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </span>
                    <p
                      className="cursor-pointer"
                      onClick={() => handleRemovecart(docs.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 text-red-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <div className="w-full   flex flex-col  pt-10 gap-4  ">
          <h1 className="uppercase text-2xl">Detalhes do Pagamento</h1>
          {!lisTerm.data && (
            <>
              <div className="" onClick={handleOpenModal}>
                <Checkbox
                  border={"#336DFF"}
                  colorScheme="green"
                  isChecked={false}
                >
                  Termos de Contrato
                </Checkbox>
              </div>
              <Terms isOpen={isOpen} onClose={onClose} />
            </>
          )}

          <div className="w-full flex items-center justify-between">
            <span className="  ">Subtotal</span>

            <p className="text-xl">
              {(total / 100)?.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
          {lisTerm.data ? (
            <ButtonPayment />
          ) : (
            <button className="w-full  mt-6 py-4 bg-[#336DFF] text-white rounded-full text-xlflex items-center justify-center">
              Necessário aceitar os termos para finalizar a compra
            </button>
          )}
        </div>
      </div>
      {!lisTerm.data && <Terms isOpen={isOpen} onClose={onClose} />}
    </section>
  );
};

export default CartPage;

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";

type CartItems = {
  id: string;
  image: string;
  price: number;
  name: string;
};

export const useCartHook = () => {
  const axios = useAxiosAuth();
  const queryClient = useQueryClient();
  const listCart = useQuery({
    queryKey: ["cart-id"],
    queryFn: async () => {
      const response = await axios.get(`/cart/id`);
      return response.data;
    },
    retry:false,
  
    refetchOnWindowFocus: false,
  });
  const addTocart = useMutation({
    mutationFn: async ({ ...cart }: CartItems) => {
      const response = await axios.put(`/cart/update`, cart);

      return response.data;
    },
    async onSuccess(data, variables, context) {
      await queryClient.invalidateQueries({ queryKey: ["cart-id"] });
      toast.success("Documento adicionado ao carrinho!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    },
    async onError(error: any, variables, context) {
      return;
    },
  });
  const removeCart = useMutation({
    mutationFn: async (id: string) => {
      const response = await axios.delete(`/cart/${id}`);

      return response.data;
    },
    async onSuccess(data, variables, context) {
      await queryClient.invalidateQueries({ queryKey: ["cart-id"] });
      toast.success("Removido com sucesso!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    },
    async onError(error: any, variables, context) {
      return;
    },
  });
  return {
    listCart,
    addTocart,
    removeCart,
  };
};

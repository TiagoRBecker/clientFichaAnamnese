import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";
import { toast } from "react-toastify";
;

export const usePayments  = (id?: string) => {
  const axios = useAxiosAuth();
  const queryClient = useQueryClient()
   const orderId = useQuery({
      queryKey: ["order-id" ,id],
      queryFn: async () => {
        const response = await axios.get(`/payment/${id}`);
        return response.data;
      },
      enabled:!!id
    });
  const createOrderPayment = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`/create-order/payment`);
   
      return response.data;

    },
    async onSuccess(data, variables, context) {
      await queryClient.invalidateQueries({ queryKey: ["terms"] })
     
      return;
    },
    async onError(error: any, variables, context) {
     
      return;
    },
  });
 
  return {
 createOrderPayment,
 orderId
  }
}


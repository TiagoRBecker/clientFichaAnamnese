import { useQuery } from "@tanstack/react-query";

import { api } from "../axios/axios";

export const useOrderUser = (id?: string) => {
  
  const orderAllUser = useQuery({
    queryKey: ["order-user"],
    queryFn: async () => {
      const response = await api.get(`/orders`);
      return response.data;
    },
  });
  const orderIdUser = useQuery({
    queryKey: ["order-id", id],
    queryFn: async () => {
      const response = await api.get(`/orders/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
  return {
orderAllUser,orderIdUser
  };
};

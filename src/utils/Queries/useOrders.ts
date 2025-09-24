import { useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";

export const useOrderUser = (id?: string) => {
  const axios = useAxiosAuth();
  const orderAllUser = useQuery({
    queryKey: ["order-user"],
    queryFn: async () => {
      const response = await axios.get(`/orders`);
      return response.data;
    },
  });
  const orderIdUser = useQuery({
    queryKey: ["order-id", id],
    queryFn: async () => {
      const response = await axios.get(`/orders/${id}`);
      return response.data;
    },
    enabled: !!id,
  });
  return {
orderAllUser,orderIdUser
  };
};

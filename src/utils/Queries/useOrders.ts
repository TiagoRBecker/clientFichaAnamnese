import {  useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";




 export  const useOrderUser = () => {
      const axios = useAxiosAuth();
    const user = useQuery({
      queryKey: ["order-user"],
      queryFn: async () => {
        const response = await axios.get(`/orders/all`);
        return response.data;
      },
    });
    return user;
  };






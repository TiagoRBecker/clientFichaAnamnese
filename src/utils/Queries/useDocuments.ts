import {  useMutation, useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";

export const useLastProducts = () => {
  const axios = useAxiosAuth();
  const user = useQuery({
    queryKey: ["docs-last"],
    queryFn: async () => {
      const response = await axios.get(`/products/last`);
      return response.data;
    },
  });
  return user;
};

export const useHighLigthProducts = () => {
  const axios = useAxiosAuth();
  const user = useQuery({
    queryKey: ["docs-higgh"],
    queryFn: async () => {
      const response = await axios.get(`/products/highligths`);
      return response.data;
    },
  });
  return user;
};



export const useUpdateViewsProducts = () => {
     const axios = useAxiosAuth();
  return useMutation({
    mutationFn: async (id:string) => {
      const response = await axios.put(`/products/views/${id}`);
   
     return response.data
    },
    async onSuccess(data, variables, context) {
      return
    },
   async  onError(error, variables, context) {
      console.log(error);
    },
  });
};

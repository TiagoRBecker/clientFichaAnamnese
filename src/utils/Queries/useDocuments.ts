import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";
import { api } from "../axios/axios";

export const useAllDocs = (search: string) => {
  console.log(search);
  const user = useQuery({
    queryKey: ["docs-all", search],
    queryFn: async () => {
      const response = await api.get(`/products/search`, {
        params: {
          q: search,
        },
      });

      return response.data;
    },
    enabled: !!search,
  });
  return user;
};
export const useLastProducts = () => {
  const user = useQuery({
    queryKey: ["docs-last"],
    queryFn: async () => {
      const response = await api.get(`/products/last`);
      return response.data;
    },
  });
  return user;
};

export const useHighLigthProducts = () => {
  const user = useQuery({
    queryKey: ["docs-higgh"],
    queryFn: async () => {
      const response = await api.get(`/products/highligths`);
      return response.data;
    },
  });
  return user;
};

export const useUpdateViewsProducts = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      const response = await api.put(`/products/views/${id}`);

      return response.data;
    },
    async onSuccess(data, variables, context) {
      return;
    },
    async onError(error, variables, context) {
      return;
    },
  });
};

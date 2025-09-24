import { QueryClient, useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";

export const useCategories = () => {
  const axios = useAxiosAuth();
  const user = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(`/categories`);
      return response.data;
    },
     refetchInterval: 1000 * 60 * 60 * 2,
  });
  return user;
};

export const useCategoriesId = (id: string) => {
  const axios = useAxiosAuth();
  const user = useQuery({
    queryKey: ["category-id"],
    queryFn: async () => {
      const response = await axios.get(`/categories/${id}`);
      console.log(response.data)
      return response.data;
    },
  });
  return user;
};

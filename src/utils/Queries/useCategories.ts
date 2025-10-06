import { QueryClient, useQuery } from "@tanstack/react-query";
import { api } from "../axios/axios";



export const useCategories = () => {

  const categories = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get(`/categories`);
      return response.data;
    },
     refetchInterval: 1000 * 60 * 60 * 2,
     refetchOnWindowFocus: false,
  });
  return categories;
};

export const useCategoriesId = (id: string) => {

  const user = useQuery({
    queryKey: ["category-id",id],
    queryFn: async () => {
      const response = await api.get(`/categories/${id}`);
  
      return response.data;
    },
  });
  return user;
};

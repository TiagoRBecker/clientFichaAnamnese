import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useapiAuth from "../axios/useAxios";
import { toast } from "react-toastify";
import { api } from "../axios/axios";
;

export const useTerms = () => {

  const queryClient = useQueryClient()
  const lisTerm = useQuery({
    queryKey: ["terms"],
    queryFn: async () => {
      const response = await api.get(`/terms`);
      return response.data;
    },
  });
  const accepted = useMutation({
    mutationFn: async () => {
      const response = await api.post(`/accept`);
   
      return response.data;

    },
    async onSuccess(data, variables, context) {
      await queryClient.invalidateQueries({ queryKey: ["terms"] })
      toast.success("Termos aceitos com sucesso!!", {
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
    lisTerm,
    accepted,
    
  }
}


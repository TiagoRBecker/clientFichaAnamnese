import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosAuth from "@/utils/axios/useAxios";
import { toast } from "react-toastify";
;

export const useTerms = () => {
  const axios = useAxiosAuth();
  const queryClient = useQueryClient()
  const lisTerm = useQuery({
    queryKey: ["terms"],
    queryFn: async () => {
      const response = await axios.get(`/terms`);
      return response.data;
    },
  });
  const accepted = useMutation({
    mutationFn: async () => {
      const response = await axios.post(`/accept`);
   
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
      console.log(error);
      return;
    },
  });
 
  return {
    lisTerm,
    accepted,
    
  }
}


import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosAuth from "../axios/useAxios";
import  { Axios } from "axios";

export const useLibraryUserHook = () => {
  const axios = useAxiosAuth();
  const libraryByUser = () => {
    const user = useQuery({
      queryKey: ["library-user"],
      queryFn: async () => {
        const response = await axios.get(`/library/user`);
        return response.data;
      },
    });
    return user;
  };
    const downloadDocLibraryUserT = (id:string) => {
    const user = useQuery({
      queryKey: ["doc",id],
      queryFn: async () => {
        const response = await axios.get(`/library/user`);
        return response.data;
      },
    
      enabled:!!id
    });
    return user;
  };
  const downloadDocLibraryUser = () => {
    return useMutation({
      mutationFn: async (id: string) => {
        const response = await axios.post(`/library/user/download/doc/${id}`);
        console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "doc.zip");
        document.body.appendChild(link);
        link.click();

        // Limpeza
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);

        return response.data;
      },
      async onSuccess(data, variables, context) {
        return;
      },
      async onError(error: any, variables, context) {
        return;
      },
    });
  };

  return {
    libraryByUser,
    downloadDocLibraryUser,
  };
};

export const doawnloadDocLibraryUser = async (id: string, api:Axios) => {
  
  try {
    const req = await api.get(`library/user/download/doc/${id}`);
    const link = document.createElement("a");
    link.href = req.data;
    link.setAttribute("download", "termo.zip"); // Nome do arquivo no download
    document.body.appendChild(link);
    link.click();
    link.remove();
    return req.data;
  } catch (error) {
    console.log(error);
  }
};


import { useMutation, useQuery } from "@tanstack/react-query";
import { SignupData } from "../validation/signup";
import { useSwal } from "../swal";
import { useRouter } from "next/navigation";
import { api } from "../axios/axios";

export const useAccountHook = () => {
  const router = useRouter();
  const { show } = useSwal();

  const perfil = () => {
    const user = useQuery({
      queryKey: ["perfil"],
      queryFn: async () => {
        const response = await api.get(`/products/last`);
        return response.data;
      },
    });
    return user;
  };

  const useHighLigthProducts = () => {
    const user = useQuery({
      queryKey: ["docs-higgh"],
      queryFn: async () => {
        const response = await api.get(`/products/highligths`);
        return response.data;
      },
    });
    return user;
  };

  const createAccount = () => {
    return useMutation({
      mutationFn: async (data: SignupData) => {
        const response = await api.post(`/user/signup`, data);

        return response.data;
      },
      async onSuccess(data, variables, context) {
        await show(
          "Sucesso",
          "Agora você já faz parte da nossa plataforma. Em instantes, você será redirecionado para a página de login, onde poderá acessar utilizando suas credenciais cadastradas.",
          "success"
        );
        router.push("/auth/signin");
        return;
      },
      async onError(error: any, variables, context) {
        await show(
          "Ocorreu um erro!",
          `${error?.response.data.message}`,
          "error"
        );
        return;
      },
    });
  };
  return {
    perfil,
    createAccount,
  };
};

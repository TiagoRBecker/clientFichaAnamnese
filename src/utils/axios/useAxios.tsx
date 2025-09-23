"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { api } from "./axiosConfig";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const useAxiosAuth = () => {
  const router = useRouter();
  const publicRoutes = [
    "user/signup",
    "user/signin",
    "user/signin/google",
    "/refreshToken",
    "/categories",
    "/products/last",
    "products/highligths",
  ];
  const { data: session, status } = useSession();

  const isPublicRoute = (url?: string) => {
    if (!url) return false;
    return (
      publicRoutes.some((route) => url.startsWith(route)) ||
      url.startsWith("/categories/") ||
      url.startsWith("/products/")
    );
  };
  useEffect(() => {
    if (status === "loading") return;
    const requestIntercept = api.interceptors.request.use(
      async (config) => {
        if (!isPublicRoute(config.url) && session?.user?.accessToken) {
          config.headers.Authorization = `Bearer ${session.user.accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = api.interceptors.response.use(
      (response) => response,

      async (error) => {
        if (session?.user?.error === "RefreshAccessTokenError") {
          await Swal.fire(
            `Sua sessão expirou. Por favor, faça login novamente.`,
            "Clique no botão para continuar!",
            "error"
          );
          await signOut({ callbackUrl: "/" });

          return new Promise(() => {});
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responseIntercept);
    };
  }, [session]);

  return api;
};

export default useAxiosAuth;

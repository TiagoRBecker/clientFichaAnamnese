// utils/axiosConfig.ts
"use client";

import axios from "axios";
import { getSession, signOut } from "next-auth/react";
import Swal from "sweetalert2";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// interceptador de request (executa antes de cada chamada)
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();

    // só adiciona token se existir
    if (session?.user?.accessToken) {
      config.headers.Authorization = `Bearer ${session.user.accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// interceptador de response (trata erros de auth, refresh etc.)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const session = await getSession();

    if (session?.user?.error === "RefreshAccessTokenError") {
      await Swal.fire(
        "Sessão expirada",
        "Faça login novamente para continuar.",
        "error"
      );
      await signOut({ callbackUrl: "/" });

      return new Promise(() => {}); // trava a request até logout
    }

    return Promise.reject(error);
  }
);

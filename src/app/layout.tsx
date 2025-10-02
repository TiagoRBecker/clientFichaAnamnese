"use client";
import "./globals.css";

import { ChakraUI } from "./providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactQueryProvider } from "./reactQueryProvider";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const authLayout = pathName.startsWith("/auth");
  return (
    <ReactQueryProvider>
      <SessionProvider>
        <html lang="pt-br">
          <body>
            <ChakraUI>
              {!authLayout && <Header />}
              {children}
            </ChakraUI>

            <ToastContainer />
            {!authLayout && <Footer />}
          </body>
        </html>
      </SessionProvider>
    </ReactQueryProvider>
  );
}

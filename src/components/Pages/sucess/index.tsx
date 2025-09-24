"use client";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound/indext";
import { useOrderUser } from "@/utils/Queries/useOrders";
import { usePayments } from "@/utils/Queries/usePayments";
import { Button, Card } from "@chakra-ui/react";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const path = useSearchParams();
  const orderIdPath = path.get("order_id");
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (orderIdPath) {
      setId(orderIdPath);
    }
  }, []);
  const { orderIdUser } = useOrderUser(orderIdPath as string);
  if (orderIdUser.isLoading) {
    return <Loading />;
  }
  if(!orderIdUser.data){ return <NotFound  /> }

const products = JSON?.parse(orderIdUser.data?.products);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg">
            <div className="p-8 text-center">
              {/* Ícone de sucesso */}
              <div className="mb-6">
                <div className="w-full h-full mx-auto  rounded-full flex items-center justify-center">
                  <Image
                    src={"/Assets/Logo/logo.svg"}
                    width={200}
                    height={200}
                    alt="Logo"
                  />
                </div>
              </div>

              {/* Título principal */}
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Compra Realizada com Sucesso!
              </h2>

              {/* Subtítulo */}
              <p className="text-lg text-gray-600 mb-8">
                Parabéns! Sua compra foi processada com sucesso. Você receberá
                um e-mail de confirmação em breve.
              </p>

              {/* Informações da compra */}
              <div className="bg-gray-50 rounded-lg p-6 mb-8 flex flex-col w-full gap-4">
                <div className="w-full text-left">
                  <p className="text-sm text-gray-500 mb-1">Data da Compra</p>
                  <p className="font-semibold text-gray-900">
                    {new Date(orderIdUser.data?.updatedAt).toLocaleDateString(
                      "pt-BR"
                    )}
                  </p>
                </div>
                <div className="w-full text-left">
                  <p className="text-sm text-gray-500 mb-1">Produto</p>
                  {products.map(
                    (
                      item: { id: string; name:string},
                      index: number
                    ) => (
                      <h2 key={item.id}>{item.name}</h2>
                    )
                  )}
                </div>
                <div className="w-full text-left">
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Confirmado
                  </span>
                </div>
              </div>

              {/* Próximos passos */}
              <div className="text-left mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Próximos Passos:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Download className="w-5 h-5 text-[#336DFF] mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600">
                      Faça o download dos materiais em sua área do cliente
                    </span>
                  </li>
                </ul>
              </div>

              {/* Botões de ação */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/library/"}>
                  <Button
                    className=" px-8 py-3"
                    size="lg"
                    bg={"#336DFF"}
                    color={"white"}
                  >
                    Acessar Área do Cliente
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Informações de suporte */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 mb-2">
              Precisa de ajuda? Entre em contato conosco
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a
                href="mailto:suporte@fichaanamnese.com"
                className="text-[#336DFF] hover:underline"
              >
                suporte@fichaanamnese.com
              </a>
              <a
                href="tel:+5511999999999"
                className="text-[#336DFF] hover:underline"
              >
                (55) 51-99999999
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

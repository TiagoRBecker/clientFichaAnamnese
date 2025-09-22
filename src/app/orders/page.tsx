"use client";

import NotFound from "@/components/NotFound/indext";
import { useOrderUser } from "@/utils/Queries/useOrders";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Ordes = () => {
  const { data , isLoading} = useOrderUser()
  const formateProducs  = (product:any)=>{
     const mapper = JSON.parse(product )
    return mapper.length
  }
 if(isLoading){
  return <p className="w-full h-screen flex items-center justify-center">Carregando aguarde ....</p>
 }
  return (
    <section className="container mx-auto h-screen">
      <h1 className="text-gray-400 text-2xl my-10">Ordem de pedidos</h1>
      {
        data && data.length > 0 ? <TableContainer className="mt-32">
        <Table colorScheme="teal">
          <TableCaption>Ordem de pedidos</TableCaption>
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>ID</Th>
              <Th>Documentos</Th>
              <Th>Total</Th>
            </Tr>
          </Thead>
          {data?.map((order: any, index: number) => (
            <Tbody key={index}>
              <Tr>
                <Td>{new Date(order.createdAt).toLocaleDateString("pt-br")}</Td>
                <Td>{order.id}</Td>
                <Td>{formateProducs(order?.products)}</Td>
                <Td>
                  {Number(order.amount /100).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
      </TableContainer>
      :
      <NotFound  />
      }
      
    </section>
  );
};

export default Ordes;

"use client";

import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound/indext";
import useAxiosAuth from "@/utils/axios/useAxios";
import {
  doawnloadDocLibraryUser,
  useLibraryUserHook,
} from "@/utils/Queries/useLibraryUser";
import Swal from "sweetalert2";

const Libary = () => {
  const axios = useAxiosAuth();
  const { libraryByUser } = useLibraryUserHook();
  const { data, isLoading } = libraryByUser();

  const handleDoawnloadDoc = async (id: string) => {
    const result = await Swal.fire({
      title: "Deseja baixar o arquivo?",
      text: "Clique OK para iniciar o download",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "Cancelar",
      showLoaderOnConfirm: true, // mostra loading no botão
      preConfirm: async () => {
        
        try {
          await doawnloadDocLibraryUser(id, axios);

          return true; 
        } catch (error) {
          Swal.showValidationMessage(`Falha no download: ${error}`);
          return false;
        }
      },
      allowOutsideClick: () => !Swal.isLoading(),
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Download concluído!",
        icon: "success",
      });
    }

    return;
  };

  if (isLoading) {
    return <Loading/>;
  }

  return (
    <section className="mx-auto container h-full md:h-screen py-20">
      <h1 className="text-gray-400 text-2xl">
        Bem vindo a sua biblioteca de documentos{" "}
      </h1>

      {data?.docs && data?.docs.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 p-4 gap-10">
          {data?.docs.map(
            (
              item: { id: string; image: string; name: string },
              index: number
            ) => (
              <div
                key={index}
                className="w-full sm:max-w-[260px]  h-[380px]   flex flex-col gap-3  shadow-2xl  bg-opacity-50"
              >
                <h1 className="text-black w-full truncate p-2">{item.name}</h1>
                <div className="w-full h-[270px]">
                  <img src={item.image} alt="Doc" className="w-full h-full object-cover " />
                </div>
                <div className="flex items-center justify-center flex-grow ">
                  <button
                    onClick={() => handleDoawnloadDoc(item.id)}
                    className="w-full bg-[#336DFF] h-full  text-white flex items-center gap-2 justify-center   text-base"
                  >
                    Baixar Documento
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default Libary;

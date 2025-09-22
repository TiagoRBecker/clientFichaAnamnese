import Image from "next/image";

const NotFound = () => {
    return ( <div className="w-full h-[300px] flex flex-col items-center justify-center gap-10"  >
        <Image src={"/Assets/Logo/logo.svg"} width={200} height={200} alt="Logo"/>
        <p className="text-gray-400 text-4xl">Nenhum item encontrado </p>

    </div>);
}
 
export default NotFound;
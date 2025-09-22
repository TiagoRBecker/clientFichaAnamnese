"use client";
import Image from "next/image";
import Link from "next/link";

const InternalServerError = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <Link href="/">
        <Image
          src={"/Assets/Logo/logo.svg"}
          width={900}
          height={600}
          alt="Logo"
        />
      </Link>
      <h2 className="text-3xl text-red-500">
        Estamos com problemas internos .Tente novamente mais tarde!
      </h2>
    </div>
  );
};

export default InternalServerError;

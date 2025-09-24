import { Atom } from "react-loading-indicators";
const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
    <Atom
      color="#2557BA"
      size="medium"
      text="Carregando aguarde "
      textColor="#ddd"
      speedPlus={-5}
    />
    </div>
  );
};

export default Loading;

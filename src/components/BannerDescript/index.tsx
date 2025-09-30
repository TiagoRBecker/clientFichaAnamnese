type Props = {
  title: string;
  descript: string;
};
const BannerDescript = ({ title, descript }: Props) => {
  return (
    <div className="container mx-auto h-[230px] flex-col p-3 bg-[#336DFF] flex items-center gap-4 rounded-md md:flex-row">
      <div className="w-full flex items-center justify-center">
        <h1 className="text-4xl text-white">{title}</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <p className="text-white max-w-[510px]">
          {descript}
        </p>
      </div>
    </div>
  );
};

export default BannerDescript;

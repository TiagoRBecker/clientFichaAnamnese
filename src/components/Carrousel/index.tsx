import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Carrousel = {
  children: React.ReactNode;
};
const Carrousel = ({ children }: Carrousel) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    centerMode: true,  // Habilita o modo centralizado
    centerPadding: "0px", // Remove qualquer padding lateral para alinhar no centro
  };
  return <Slider {...settings} className="w-[70%] h-[70%]" >{children}</Slider>;
};

export default Carrousel;

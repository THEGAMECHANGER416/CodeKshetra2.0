import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import image1 from "../../../public/assets/Main Logo.png";

interface Judge {
  img: string;
  name: string;
}

const judges: Judge[] = [
  { img: image1, name: "Judge 1" },
  { img: image1, name: "Judge 2" },
  { img: image1, name: "Judge 3" },
  { img: image1, name: "Judge 4" },
  { img: image1, name: "Judge 5" },
];

export default function Judge(): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className="App bg-black min-h-screen text-white">
        <h1 className="md:text-[12rem] text-6xl font-bebas text-pink font-bold mb-[4rem] md:mb-[6rem] mt-[5rem] text-center">EVENT JUDGES</h1>
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center space-x-10">
        {judges.map((judge, index) => (
          <div
            key={index}
            className={`w-48 h-48 bg-neutral-200/10 ${
              index % 2 === 0 ? "rounded-lg" : "rounded-full"
            } overflow-hidden flex justify-center items-center ${
              index === 2 ? "triangle-shape" : ""
            }`}
          >
            <img
              src={judge.img}
              alt={judge.name}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
        className="lg:hidden"
      >
        {judges.map((judge, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <div
                className={`w-64 h-64 bg-white ${
                  index % 2 === 0 ? "rounded-lg" : "rounded-full"
                } overflow-hidden flex justify-center items-center ${
                  index === 2 ? "triangle-shape" : "rounded-full"
                }`}
              >
                <img
                  src={judge.img}
                  alt={judge.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

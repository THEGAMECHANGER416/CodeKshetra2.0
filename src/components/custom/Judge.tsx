import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Logo from "../../../public/assets/Main Logo.png";

interface Judge {
  img: string;
  name: string;
}

const judges: Judge[] = [
  { img: Logo, name: "Judge 1" },
  { img: Logo, name: "Judge 2" },
  { img: Logo, name: "Judge 3" },
  { img: Logo, name: "Judge 4" },
  { img: Logo, name: "Judge 5" },
];

export default function Judge(): JSX.Element {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-black min-h-screen text-white">
      <div className="text-center mt-8 mb-12 lg:mt-12 lg:mb-16">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bebas font-bold text-pink mb-6 md:mb-10">
          EVENT JUDGES
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-10 mb-12">
        {judges.map((judge, index) => (
          <div
            key={index}
            className={`w-32 h-32 xl:w-48 xl:h-48 bg-neutral-200/15 ${
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
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        modules={[Autoplay, Pagination]}
        className="lg:hidden"
      >
        {judges.map((judge, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mb-10"> 
              <div
                className={`w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-neutral-200/15 ${
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: white !important; 
          width: 12px; 
          height: 12px;
          top:10px;
        }
        .swiper-pagination {
          bottom: 15px; /* Adjust distance from the bottom of the slide */
      `}</style>
    </div>
  );
}

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
    <div className="container mx-auto px-4 h-auto sm:px-6 lg:px-8 bg-black text-white">
      <div className="text-center mt-8 mb-12 lg:mt-12 lg:mb-16">
        <h1 className="md:text-[12rem] font-bebas text-6xl text-pink font-bold mb-[2rem] md:mb-[6rem] text-center">
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
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        modules={[Autoplay, Pagination]}
        className="lg:hidden"
      >
        {judges.map((judge, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center mb-10">
              <div
                className={`w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-neutral-200/15 ${
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
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 9px;
          bottom: 15px;
        }
        .swiper-pagination-bullet {
          background-color: grey;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .swiper-pagination-bullet-active {
          background-color: #DA39AE;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}

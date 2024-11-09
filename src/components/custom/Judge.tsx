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
          JUDGES
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-10 mb-12">
        {judges.map((judge, index) => (
          <div
            key={index}
            className={`${
              index === 1 || index === judges.length - 2
                ? "w-40 h-72 xl:w-48 xl:h-80 rounded-[100px]" 
                : "w-46 h-72 xl:w-64 xl:h-80 rounded-xl"
            } bg-neutral-200/15 overflow-hidden flex justify-center items-center shadow-lg ${
              index === 2 ? "triangle-shape rounded-xl" : ""
            }`}
          >
            <img
              src={judge.img}
              alt={judge.name}
              className="h-full w-full object-cover rounded-[100px]"
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
                className={`${
                  index === 1 || index === judges.length - 2
                    ? "w-52 h-96 sm:w-56 sm:h-104 md:w-64 md:h-[300px] rounded-[100px]" 
                    : "w-72 h-96 sm:w-80 sm:h-96 md:w-96 md:h-112 rounded-xl"
                } bg-neutral-200/15 overflow-hidden flex justify-center items-center shadow-lg ${
                  index === 2 ? "triangle-shape rounded-lg" : ""
                }`}
              >
                <img
                  src={judge.img}
                  alt={judge.name}
                  className="h-full w-full object-cover rounded-[100px]" 
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

        /* Box shadow for the active card */
        .swiper-slide-active {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

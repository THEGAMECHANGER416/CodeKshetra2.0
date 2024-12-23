import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Logo from "/assets/Main Logo.png";

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
        <h1 className="md:text-[13rem] font-bebas text-8xl mt-[3rem] sm:mt-[1.5rem] text-pink font-bold mb-[2rem] md:mb-[5rem] text-center">
          JUDGES
        </h1>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-center items-center space-x-6 xl:space-x-10 mb-12">
        {judges.map((judge, index) => (
          <div
            key={index}
            className={`relative overflow-hidden flex justify-center items-center rounded-2xl glassy-div ${
              index === 1 || index === judges.length - 2
                ? "w-48 h-72 xl:w-56 xl:h-80"
                : "w-64 h-80 xl:w-72 xl:h-96"
            } shadow-lg tilt-effect`}
          >
            <img
              src={judge.img}
              alt={judge.name}
              className="h-full w-full object-cover rounded-2xl"
            />
          </div>
        ))}
      </div>

      {/* Mobile View (Uniform Card Size) */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1.0}
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
              {/* All cards have the same size in mobile view */}
              <div
                className={`relative overflow-hidden flex justify-center items-center rounded-2xl glassy-div w-72 h-96 sm:w-80 sm:h-96 md:w-96 md:h-112 shadow-lg tilt-effect`}
              >
                <img
                  src={judge.img}
                  alt={judge.name}
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS */}
      <style>{`
        .glassy-div {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }
        .tilt-effect {
          transform: perspective(1000px) rotateX(2.5deg) rotateY(5deg);
        }
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

        .swiper-slide-active {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
          transform: scale(1);  /* Center active image */
        }

        /* Custom transition for the mobile swiper to create the effect of images coming from left and right */
        .swiper-slide-next {
          transform: translateX(30px) scale(0.95);  /* Next slide comes from right */
        }
        
        .swiper-slide-prev {
          transform: translateX(-30px) scale(0.95);  /* Previous slide comes from left */
        }

        .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease;
        }

        .swiper-slide-active {
          transform: translateX(0) scale(1);  /* Active slide centered */
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.5;  /* Slightly reduce opacity for previous and next images */
        }

        .swiper-slide-active {
          opacity: 1;  /* Full opacity for the active image */
        }

        /* Ensure the previous and next slides don't merge and are clearly spaced */
        .swiper-slide-prev, .swiper-slide-next {
          z-index: 0;
        }
        .swiper-slide-active {
          z-index: 10;
        }
      `}</style>
    </div>
  );
}

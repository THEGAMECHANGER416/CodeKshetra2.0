// import { ChevronLeft, ChevronRight } from "lucide-react";

// import { CardContent } from "../CardContent";
// import { rippleEffect } from "@/utils/rippleEffect";
// import { problemStatements } from "@/json/problem-statements";
// import { useProblemStatements } from "@/hooks/useProblemStatements";
// import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
// import { useCarousel } from "@/components/ui/carousel";

// const ProblemStatement = () => {
//     const carouselApi = useCarousel();
//   const {
//     containerRef,
//     titleRef,
//     cardsRef,
//     currentIndex,
//     nextCard,
//     prevCard,
//     goToCard,
//   } = useProblemStatements(problemStatements);
//   rippleEffect(titleRef, containerRef);

//   return (
//     <div
//       ref={containerRef}
//       className="py-8 h-full grid grid-rows-[auto_1fr_auto]"
//     >
//       <div className="text-white flex justify-center">
//         <h2
//           ref={titleRef}
//           className="text-2xl md:text-4xl xl:text-6xl font-bold cursor-pointer relative px-2 md:px-6 xl:px-8"
//         >
//           Problem Statements
//         </h2>
//       </div>

//       {/* <div className="grid place-items-center">
//         <div className="w-full max-w-6xl px-4 md:px-12 py-[2.5rem] h-full lg:max-h-[60rem] grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-1">
//           <div className="hidden md:flex md:items-center">
//             <button
//               onClick={prevCard}
//               className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
//               aria-label="Previous card"
//             >
//               <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-white" />
//             </button>
//           </div>

//           <div className="flex relative justify-center h-full overflow-hidden">
//             {problemStatements.map((statement, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 className="absolute w-full max-w-md h-full"
//               >
//                 <CardContent {...statement} className="h-full" />
//               </div>
//             ))}
//           </div>

//           <div className="hidden md:flex md:items-center">
//             <button
//               onClick={nextCard}
//               className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
//               aria-label="Next card"
//             >
//               <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div> */}
//       <div className="grid place-items-center">
//         <div className="w-full max-w-6xl px-4 md:px-12 py-[2.5rem] h-full lg:max-h-[60rem] grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-1">
//           <div className="hidden md:flex md:items-center">
//             <button
//               onClick={() => carouselApi.scrollPrev()}
//               className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
//               aria-label="Previous card"
//             >
//               <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-white" />
//             </button>
//           </div>

//           <Carousel className="w-full max-w-md">
//             <CarouselContent>
//               {problemStatements.map((statement, index) => (
//                 <CarouselItem key={index}>
//                   <CardContent {...statement} className="h-full" />
//                 </CarouselItem>
//               ))}
//             </CarouselContent>
//           </Carousel>

//           <div className="hidden md:flex md:items-center">
//             <button
//               onClick={() => carouselApi.scrollNext()}
//               className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
//               aria-label="Next card"
//             >
//               <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-white" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-center space-x-2">
//         {problemStatements.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToCard(index)}
//             className={`w-2 h-2 rounded-full transition-all duration-300 ${
//               index === currentIndex
//                 ? "bg-accent scale-125"
//                 : "bg-gray-300 hover:bg-gray-500"
//             }`}
//             aria-label={`Go to card ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProblemStatement;

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { CardContent } from "../CardContent";
import { rippleEffect } from "@/utils/rippleEffect";
import { problemStatements } from "@/json/problem-statements";
import { useProblemStatements } from "@/hooks/useProblemStatements";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

const ProblemStatement = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { containerRef, titleRef } = useProblemStatements(problemStatements);
  rippleEffect(titleRef, containerRef);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div
      ref={containerRef}
      className="py-8 h-full grid grid-rows-[auto_1fr_auto]"
    >
      <div className="text-white flex justify-center">
        <h2
          ref={titleRef}
          className="text-2xl md:text-4xl xl:text-6xl font-bold cursor-pointer relative px-2 md:px-6 xl:px-8"
        >
          Problem Statements
        </h2>
      </div>

      <div className="grid place-items-center">
        <div className="w-full max-w-6xl px-4 md:px-12 py-[2.5rem] h-full lg:max-h-[60rem] grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-1">
          <div className="hidden md:flex md:items-center">
            <button
              onClick={() => api?.scrollPrev()}
              className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-white" />
            </button>
          </div>

          <div className="flex justify-center items-center">
            <Carousel
              className="w-full h-full max-w-md lg:max-w-none"
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
              }}
            >
              <CarouselContent>
                {problemStatements.map((statement, index) => (
                  <CarouselItem
                    key={index}
                    className="md:pl-4 lg:basis-4/5 xl:basis-2/5"
                  >
                    <div
                      className={`transition-all duration-300 ${
                        index === current
                          ? "scale-100 opacity-100"
                          : "scale-90 opacity-60"
                      }`}
                    >
                      <CardContent {...statement} className="h-full" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="hidden md:flex md:items-center">
            <button
              onClick={() => api?.scrollNext()}
              className="bg-accent/50 border border-white/30 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
              aria-label="Next card"
            >
              <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {problemStatements.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-accent scale-125"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProblemStatement;

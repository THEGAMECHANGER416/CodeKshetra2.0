import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";

import { CardContent } from "../CardContent";
import { rippleEffect } from "@/utils/rippleEffect";
import { problemStatements, CHANGE_DURATION } from "@/json/problem-statements";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../ui/carousel";

const ProblemStatement = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  rippleEffect(titleRef, containerRef);

  const startAutoChange = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      api?.scrollNext();
    }, CHANGE_DURATION);
  }, [api]);

  const stopAutoChange = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    setCurrent(api.selectedScrollSnap());

    startAutoChange();

    return () => {
      stopAutoChange();
      api.off("select", onSelect);
    };
  }, [api, startAutoChange, stopAutoChange]);

  const handleInteraction = useCallback(() => {
    stopAutoChange();
    startAutoChange();
  }, [startAutoChange, stopAutoChange]);

  const handleCardClick = (index: number) => {
    const card = document.querySelector(`[data-card-index="${index}"]`);
    if (card) {
      card.classList.add("vibrate");
      setTimeout(() => {
        card.classList.remove("vibrate");
      }, 600);
    }
  };

  return (
    <div
      ref={containerRef}
      className="py-12 h-fit grid grid-rows-[auto_1fr_auto]"
    >
      <h1
        ref={titleRef}

        className="text-8xl sm:text-[14rem] md:text-[13rem] font-bebas text-pink font-bold text-center mb-[3rem]"      >
        PROBLEM STATEMENTS
      </h1>

      <div className="w-full max-w-6xl px-4 md:px-12 py-[2.5rem] h-fit grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-2">
        <div className="hidden md:flex md:items-center">
          <button
            onClick={() => {
              api?.scrollPrev();
              handleInteraction();
            }}
            className="bg-white/60 border border-black/10 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-black" />
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
            onMouseEnter={stopAutoChange}
            onMouseLeave={startAutoChange}
            onTouchStart={stopAutoChange}
            onTouchEnd={startAutoChange}
          >
            <CarouselContent className="h-full flex items-center">
              {problemStatements.map((statement, index) => (
                <CarouselItem key={index} className="lg:basis-4/5 xl:basis-2/5" data-card-index={index}>
                  <div
                    className={`transition-all duration-300 rounded-lg shadow-lg ${
                      index === current
                        ? "scale-100 opacity-100"
                        : "scale-90 opacity-30"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <div className="filter blur-[6px]">
                        <CardContent {...statement} className="h-full" />
                      </div>

                      {/* Remove this div to reveal the card */}
                      <div 
                        className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm rounded-lg cursor-pointer transition-all duration-300 hover:backdrop-blur-md"
                        onClick={() => handleCardClick(index)}
                      >
                        <div className="bg-white/10 p-4 rounded-full mb-4 backdrop-blur-md">
                          <Lock className="w-10 h-10 text-white" />
                        </div>
                        <p className="text-white text-xl font-bold text-center px-4 mb-2">
                          Locked Content
                        </p>
                        <p className="text-pink/80 text-2xl font-medium text-center px-4">
                          Will be revealed soon!! 😉
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden md:flex md:items-center">
          <button
            onClick={() => {
              api?.scrollNext();
              handleInteraction();
            }}
            className="bg-white/60 border border-accent/10 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
            aria-label="Next card"
          >
            <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-black" />
          </button>
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {problemStatements.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              api?.scrollTo(index);
              handleInteraction();
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-pink scale-125"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const style = document.createElement("style");
style.textContent = `
  @keyframes vibrate {
    0%, 100% { transform: translateX(0); }
    20% { transform: translateX(-2px) rotate(-0.5deg); }
    40% { transform: translateX(2px) rotate(0.5deg); }
    60% { transform: translateX(-2px) rotate(0.5deg); }
    80% { transform: translateX(2px) rotate(-0.5deg); }
  }
  .vibrate {
    animation: vibrate 0.4s cubic-bezier(.36,.07,.19,.97) both;
  }
`;
document.head.appendChild(style);

export default ProblemStatement;

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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

  return (
    <div
      ref={containerRef}
      className="py-12 h-fit grid grid-rows-[auto_1fr_auto]"
    >
      <div className="text-white flex justify-center">
        <h2
          ref={titleRef}
          className="text-2xl md:text-4xl xl:text-6xl font-bold cursor-pointer relative px-2 md:px-6 xl:px-8"
        >
          Problem Statements
        </h2>
      </div>

      <div className="w-full max-w-6xl px-4 md:px-12 py-[2.5rem] h-fit grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-2">
        <div className="hidden md:flex md:items-center">
          <button
            onClick={() => {
              api?.scrollPrev();
              handleInteraction();
            }}
            className="bg-white/60 border border-accent/10 rounded-full h-fit p-2 shadow-md z-30 hidden md:block"
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
                <CarouselItem key={index} className="lg:basis-4/5 xl:basis-2/5">
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

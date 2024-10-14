import { ChevronLeft, ChevronRight } from "lucide-react";

import { CardContent } from "../CardContent";
import { rippleEffect } from "@/utils/rippleEffect";
import { problemStatements } from "@/json/problem-statements";
import { useProblemStatements } from "@/hooks/useProblemStatements";

const ProblemStatement = () => {
  const {
    containerRef,
    titleRef,
    cardsRef,
    currentIndex,
    nextCard,
    prevCard,
    goToCard,
  } = useProblemStatements(problemStatements);
  rippleEffect(titleRef, containerRef);

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

      <div className="grid place-items-center overflow-hidden">
        <div className="relative w-full max-w-6xl px-4 md:px-12 py-[4.5rem] h-full">
          <div className="flex relative justify-center h-full overflow-hidden">
            {problemStatements.map((statement, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="absolute w-full max-w-md h-full"
              >
                <CardContent {...statement} className="h-full" />
              </div>
            ))}
          </div>

          {problemStatements.length > 1 && (
            <>
              <button
                onClick={prevCard}
                className="absolute left-0 md:-left-4 top-1/2 transform -translate-y-1/2 bg-accent/50 border border-white/30 rounded-full p-2 shadow-md z-30 hidden md:block"
                aria-label="Previous card"
              >
                <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 text-white" />
              </button>
              <button
                onClick={nextCard}
                className="absolute right-0 md:-right-4 top-1/2 transform -translate-y-1/2 bg-accent/50 border border-white/30 rounded-full p-2 shadow-md z-30 hidden md:block"
                aria-label="Next card"
              >
                <ChevronRight className="w-3 h-3 md:w-6 md:h-6 text-white" />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="flex justify-center space-x-2">
        {problemStatements.map((_, index) => (
          <button
            key={index}
            onClick={() => goToCard(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
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

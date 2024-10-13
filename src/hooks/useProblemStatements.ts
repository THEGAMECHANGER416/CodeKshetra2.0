import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect, useCallback } from "react";

import { ProblemStatement } from "@/types/problems";

export const useProblemStatements = (statements: ProblemStatement[]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = useCallback(() => {
    if (statements && statements.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length);
    }
  }, [statements]);

  const prevCard = useCallback(() => {
    if (statements && statements.length > 0) {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + statements.length) % statements.length
      );
    }
  }, [statements]);

  const goToCard = useCallback(
    (index: number) => {
      if (
        statements &&
        statements.length > 0 &&
        index >= 0 &&
        index < statements.length
      ) {
        setCurrentIndex(index);
      }
    },
    [statements]
  );

  useEffect(() => {
    setCurrentIndex(0);
  }, [statements]);

  useGSAP(() => {
    if (!statements || statements.length === 0) return;

    const updateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const offset =
          (index - currentIndex + statements.length) % statements.length;
        let xPercent, scale, zIndex, opacity;

        if (offset === 0) {
          xPercent = 0;
          scale = 1;
          zIndex = 2;
          opacity = 1;
        } else if (offset === 1 || offset === statements.length - 1) {
          xPercent = offset === 1 ? 100 : -100;
          scale = 0.8;
          zIndex = 1;
          opacity = 0.6;
        } else {
          xPercent = offset < statements.length / 2 ? 200 : -200;
          scale = 0.6;
          zIndex = 0;
          opacity = 0;
        }

        gsap.to(card, {
          xPercent,
          scale,
          zIndex,
          opacity,
          duration: 0.5,
          ease: "power2.out",
        });
      });
    };

    updateCards();
  }, [currentIndex, statements]);

  return {
    containerRef,
    titleRef,
    cardsRef,
    currentIndex,
    nextCard,
    prevCard,
    goToCard,
  };
};

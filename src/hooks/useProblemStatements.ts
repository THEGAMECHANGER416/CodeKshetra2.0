import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ProblemStatement } from "@/types/problems";
import { CHANGE_DURATION } from "@/json/problem-statements";

export const useProblemStatements = (statements: ProblemStatement[]) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextCard = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % statements.length);
  }, [statements.length]);

  const prevCard = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + statements.length) % statements.length
    );
  }, [statements.length]);

  const goToCard = useCallback(
    (index: number) => {
      if (index >= 0 && index < statements.length) {
        setCurrentIndex(index);
      }
    },
    [statements.length]
  );

  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (deltaX > 80) {
      prevCard();
    } else if (deltaX < -80) {
      nextCard();
    }
  }, [nextCard, prevCard]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    const intervalId = setInterval(nextCard, CHANGE_DURATION);
    return () => clearInterval(intervalId);
  }, [nextCard]);

  useGSAP(() => {
    if (statements.length === 0) return;

    const tl = gsap.timeline();

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const offset =
        (index - currentIndex + statements.length) % statements.length;

      if (offset === 0 || offset === 1 || offset === statements.length - 1) {
        const config = {
          xPercent: offset === 0 ? 0 : offset === 1 ? 100 : -100,
          scale: offset === 0 ? 1 : 0.8,
          zIndex: offset === 0 ? 2 : 1,
          opacity: offset === 0 ? 1 : 0.6,
          duration: 0.5,
          ease: "power2.out",
        };

        tl.to(card, config, 0);
      } else {
        tl.set(card, { opacity: 0, scale: 0.6, zIndex: 0 }, 0);
      }
    });
  }, [currentIndex, statements.length]);

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
